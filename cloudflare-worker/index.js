// index.js
// Cloudflare Workers용 Gemini API 프록시 서버

// CORS 헤더 설정 (보안을 위해 허용할 도메인을 정확히 지정해야 합니다.)
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*', // 실제 배포 시에는 React 앱의 도메인으로 변경하세요 (예: 'https://goeha-building.github.io')
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

async function handleRequest(request) {
  // OPTIONS 요청 처리 (CORS Preflight)
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: CORS_HEADERS,
    });
  }

  // POST 요청 처리
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
      // 이 환경 변수는 Cloudflare Workers 대시보드 또는 wrangler.toml을 통해 설정됩니다.
      const GEMINI_API_KEY = GEMINI_API_KEY_SECRET; // wrangler.toml의 vars 또는 secrets와 매칭되어야 합니다.
      const GEMINI_MODEL = GEMINI_MODEL_SECRET || 'gemini-1.5-flash'; // 모델도 설정 가능

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

  // POST 및 OPTIONS가 아닌 다른 요청은 405 Method Not Allowed
  return new Response('405 Method Not Allowed', {
    status: 405,
    headers: { 'Allow': 'POST, OPTIONS', ...CORS_HEADERS },
  });
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});