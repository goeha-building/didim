// worker/src/index.js
// Cloudflare Workers용 Gemini API 프록시 서버

// CORS 헤더 설정 (보안을 위해 허용할 도메인을 정확히 지정해야 합니다.)
// 사용자님의 프론트엔드 도메인: https://goeha-building.github.io/didim/
// 개발 시 로컬 환경: http://localhost:5173
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': 'https://goeha-building.github.io', // 서브경로 없이 도메인만 허용 (GitHub Pages 특성)
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS', // GET도 추가합니다.
  'Access-Control-Allow-Headers': 'Content-Type',
};

async function handleRequest(request, env) { // env 객체를 통해 Secrets 접근
  // OPTIONS 요청 처리 (CORS Preflight)
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: CORS_HEADERS,
    });
  }

  // POST 요청 처리 (Gemini API 호출)
  if (request.method === 'POST') {
    try {
      const { prompt } = await request.json(); // React 앱에서 보낸 prompt를 받습니다.

      if (!prompt) {
        return new Response(JSON.stringify({ error: '프롬프트가 필요합니다.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
        });
      }

      // Gemini API 키를 Workers Secret에서 가져옵니다.
      const GEMINI_API_KEY = env.GEMINI_API_KEY_SECRET; // env 객체를 통해 접근
      const GEMINI_MODEL = env.GEMINI_MODEL_SECRET || 'gemini-1.5-flash'; // 모델도 env 객체를 통해 접근

      if (!GEMINI_API_KEY) {
        return new Response(JSON.stringify({ error: 'Gemini API 키가 Workers Secret에 설정되지 않았습니다.' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
        });
      }

      const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

      const geminiResponse = await fetch(geminiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.35,
            maxOutputTokens: 1200,
          },
        }),
      });

      if (!geminiResponse.ok) {
        const errorText = await geminiResponse.text();
        return new Response(JSON.stringify({ error: `Gemini API 오류: ${geminiResponse.status} - ${errorText}` }), {
          status: geminiResponse.status,
          headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
        });
      }

      const geminiData = await geminiResponse.json();
      const text = geminiData?.candidates?.[0]?.content?.parts?.map(part => part.text || '').join('
').trim() || '';

      return new Response(JSON.stringify({ text, raw: geminiData }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: `서버 처리 오류: ${error.message}` }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
      });
    }
  }
  
  // GET 요청 처리 (선택 사항, 필요하다면 추가 로직 구현)
  if (request.method === 'GET') {
    return new Response(JSON.stringify({ message: "Cloudflare Worker is running for didim-AI" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
    });
  }

  // POST, GET, OPTIONS가 아닌 다른 요청은 405 Method Not Allowed
  return new Response('405 Method Not Allowed', {
    status: 405,
    headers: { 'Allow': 'POST, GET, OPTIONS', ...CORS_HEADERS },
  });
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request, event.context.env)); // env 객체 전달
});