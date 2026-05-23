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
  const { word } = req.body || req.query;
  // TODO: proxy to 국립국어원 API with caching
  return res.json({ word, definition: '샘플 뜻(서버 프록시 미구현)' });
});

app.post('/api/rag/query', verifyFirebaseIdToken, async (req, res) => {
  // TODO: vector search -> LLM
  return res.status(501).json({ error: 'Not implemented' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
