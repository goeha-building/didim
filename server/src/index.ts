import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import admin from 'firebase-admin';
import https from 'node:https';
import * as functions from 'firebase-functions'; // Firebase Functions import

dotenv.config(); // Keep for local development

process.on('uncaughtException', (error) => {
  console.error('uncaughtException:', error);
});

process.on('unhandledRejection', (reason) => {
  console.error('unhandledRejection:', reason);
});

const app = express();
app.use(cors({ origin: true })); // Allow all origins for API calls, or specify client origin
app.use(express.json({ limit: '1mb' }));

let firebaseAdminReady = false;

// Helper to get environment variables, checking Firebase Functions config first, then process.env
function getEnv(key: string): string | undefined {
  if (process.env.NODE_ENV === 'production' && functions.config() && functions.config().api) {
    // Check for Firebase Functions config (e.g., functions.config().api.gemini_key)
    const configKey = key.toLowerCase().replace(/_/g, ''); // Convert GEMINI_API_KEY to gemini_key
    return functions.config().api[configKey];
  }
  return process.env[key];
}

function requestText(url: string, options: { method?: string; headers?: Record<string, string>; body?: string } = {}) {
  return new Promise<{ statusCode: number; text: string }>((resolve, reject) => {
    const parsed = new URL(url);
    const req = https.request(
      parsed,
      {
        method: options.method || 'GET',
        headers: options.headers,
      },
      (response) => {
        let text = '';
        response.setEncoding('utf8');
        response.on('data', (chunk) => {
          text += chunk;
        });
        response.on('end', () => {
          resolve({ statusCode: response.statusCode || 500, text });
        });
      },
    );

    req.on('error', reject);
    if (options.body) req.write(options.body);
    req.end();
  });
}

try {
  // Only initialize Firebase Admin if running as a function or credentials are provided
  if (getEnv('GOOGLE_APPLICATION_CREDENTIALS_JSON')) {
    const key = JSON.parse(getEnv('GOOGLE_APPLICATION_CREDENTIALS_JSON') as string);
    admin.initializeApp({ credential: admin.credential.cert(key) });
    firebaseAdminReady = true;
  } else if (getEnv('GOOGLE_APPLICATION_CREDENTIALS')) {
    admin.initializeApp();
    firebaseAdminReady = true;
  } else if (functions.config().firebase) { // Initialize using default Firebase project for functions
    admin.initializeApp();
    firebaseAdminReady = true;
  }
} catch (error) {
  console.warn('Firebase Admin 초기화 생략:', error);
}

async function verifyFirebaseIdToken(req: any, res: any, next: any) {
  if (!firebaseAdminReady) return res.status(503).json({ error: 'Firebase Admin is not configured' });

  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const idToken = auth.split('Bearer ')[1];
    const decoded = await admin.auth().verifyIdToken(idToken);
    req.uid = decoded.uid;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/prompt/refine', verifyFirebaseIdToken, async (req, res) => {
  const { text, level } = req.body;
  return res.json({ refined: text, level: level || 'normal' });
});

app.post('/api/gemini/generate', async (req, res) => {
  const { prompt } = req.body || {};
  if (!prompt || typeof prompt !== 'string') return res.status(400).json({ error: 'prompt required' });

  const key = getEnv('GEMINI_API_KEY'); // Use getEnv helper
  const model = getEnv('GEMINI_MODEL') || 'gemini-1.5-flash'; // Use getEnv helper
  if (!key) return res.status(500).json({ error: 'server missing GEMINI_API_KEY' });

  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
    const geminiResponse = await requestText(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.35,
          maxOutputTokens: 1200,
          thinkingConfig: {
            thinkingBudget: 0,
          },
        },
      }),
    });

    const rawText = geminiResponse.text;
    if (geminiResponse.statusCode < 200 || geminiResponse.statusCode >= 300) {
      return res.status(geminiResponse.statusCode).json({ error: rawText });
    }

    const raw = JSON.parse(rawText);
    const text = raw?.candidates?.[0]?.content?.parts?.map((part: any) => part.text || '').join('\n').trim() || '';
    return res.json({ text, raw });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || String(error) });
  }
});

app.get('/api/dictionary/define', async (req, res) => {
  const word = String(req.query.word || '').trim();
  if (!word) return res.status(400).json({ error: 'word parameter required' });

  const apiKey = getEnv('KOREAN_DICT_KEY'); // Use getEnv helper
  const cert = getEnv('KOREAN_DICT_CERTKEY'); // Use getEnv helper
  if (!apiKey) return res.status(500).json({ error: 'server missing KOREAN_DICT_KEY' });

  try {
    const params = new URLSearchParams({
      key: apiKey,
      q: word,
      req_type: 'json',
      part: 'word',
      sort: 'dict',
      advanced: 'n',
      target: '1',
      method: 'searchDic',
      type1: 'word',
    });
    if (cert) params.set('certkey_no', cert);

    const response = await requestText(`https://stdict.korean.go.kr/api/search.do?${params.toString()}`);
    const text = response.text;
    if (response.statusCode < 200 || response.statusCode >= 300) return res.status(response.statusCode).json({ error: text });

    try {
      return res.json({ word, raw: JSON.parse(text) });
    } catch {
      return res.json({ word, raw: text });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || String(error) });
  }
});

app.post('/api/rag/query', verifyFirebaseIdToken, async (_req, res) => {
  return res.status(501).json({ error: 'Not implemented' });
});

// Removed app.listen()

// Export the Express app as a Firebase Function
exports.api = functions.https.onRequest(app);
