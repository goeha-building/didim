import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import admin from 'firebase-admin';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Firebase Admin 초기화 (서비스 계정은 환경변수로 제공)
if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
  const key = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
  admin.initializeApp({ credential: admin.credential.cert(key) });
} else {
  admin.initializeApp();
}

// 토큰 검증 미들웨어
async function verifyFirebaseIdToken(req: any, res: any, next: any) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ error: 'Unauthorized' });
  const idToken = auth.split('Bearer ')[1];
  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    (req as any).uid = decoded.uid;
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// 간단한 엔드포인트 샘플
app.post('/api/prompt/refine', verifyFirebaseIdToken, async (req, res) => {
  const { text, level } = req.body;
  // TODO: aiService.refinePrompt(text, level)
  return res.json({ refined: text, level: level || 'normal' });
});

app.post('/api/dictionary/define', async (req, res) => {
  const word = (req.body && req.body.word) || req.query.word;
  if (!word) return res.status(400).json({ error: 'word 파라미터 필요' });
  try {
    const apiKey = process.env.KOREAN_DICT_KEY;
    const cert = process.env.KOREAN_DICT_CERTKEY;
    if (!apiKey) return res.status(500).json({ error: '서버에 표준국어대사전 키가 없음' });
    const baseUrl = 'https://stdict.korean.go.kr/api/search';
    const params = new URLSearchParams({ key: apiKey, target_type: 'search', req_type: 'json', method: 'searchDic', part: 'word', q: word });
    if (cert) params.set('certkey_no', cert);
    const direct = `${baseUrl}?${params.toString()}`;
    const r = await fetch(direct, { headers: { Accept: 'application/json' } });
    const text = await r.text();
    // try parse json
    try {
      const data = JSON.parse(text);
      return res.json({ word, raw: data });
    } catch {
      return res.json({ word, raw: text });
    }
  } catch (err: any) {
    return res.status(500).json({ error: err.message || String(err) });
  }
});

// Server-side Gemini proxy
app.post('/api/gemini/generate', verifyFirebaseIdToken, async (req, res) => {
  const { prompt } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'prompt required' });
  try {
    const key = process.env.GEMINI_API_KEY;
    const model = process.env.GEMINI_MODEL || 'chat-bison-001';
    if (!key) return res.status(500).json({ error: 'server missing GEMINI_API_KEY' });
    const endpoint = `https://generativelanguage.googleapis.com/v1beta2/models/${model}:generateText?key=${key}`;
    const body = { text: prompt, temperature: 0.65, candidateCount: 1 };
    const r = await fetch(endpoint, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
    });
    const txt = await r.text();
    try {
      const data = JSON.parse(txt);
      return res.json({ raw: data });
    } catch {
      return res.json({ raw: txt });
    }
  } catch (err: any) {
    return res.status(500).json({ error: err.message || String(err) });
  }
});

app.post('/api/rag/query', verifyFirebaseIdToken, async (req, res) => {
  // TODO: vector search -> LLM
  return res.status(501).json({ error: 'Not implemented' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
