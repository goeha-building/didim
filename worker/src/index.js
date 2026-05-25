// worker/src/index.js
// Cloudflare Workers용 Gemini API 프록시 서버

// CORS 헤더 설정 (보안을 위해 허용할 도메인을 정확히 지정해야 합니다.)
// 사용자님의 프론트엔드 도메인: https://goeha-building.github.io
// 개발 시 로컬 환경: http://localhost:5173
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': 'https://goeha-building.github.io', // 서브경로 없이 도메인만 허용 (GitHub Pages 특성)
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With', // X-Requested-With 추가
  'Access-Control-Max-Age': '86400', // Preflight 요청 캐싱 시간 (초)
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

      const GEMINI_API_KEY = env.GEMINI_API_KEY_SECRET;
      const GEMINI_MODEL = env.GEMINI_MODEL_SECRET || 'gemini-1.5-flash';
      const IMAGEN_3_MODEL = env.IMAGEN_3_MODEL_SECRET || 'imagen-3.0-generate-002'; // Imagen 3 모델 이름

      if (!GEMINI_API_KEY) {
        return new Response(JSON.stringify({ error: 'Gemini API 키가 Workers Secret에 설정되지 않았습니다.' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
        });
      }
      // IMAGEN_3_API_KEY_SECRET 유효성 검사 제거 (GEMINI_API_KEY 사용)

      // ----------------------------------------------------------------------
      // Imagen 3 Tool 정의
      // ----------------------------------------------------------------------
      const tools = [
        {
          function_declarations: [
            {
              name: "generate_image",
              description: "주어진 프롬프트를 사용하여 이미지를 생성합니다.",
              parameters: {
                type: "OBJECT",
                properties: {
                  prompt: {
                    type: "STRING",
                    description: "이미지 생성에 사용할 상세한 설명 (프롬프트)",
                  },
                },
                required: ["prompt"],
              },
            },
          ],
        },
      ];

      // ----------------------------------------------------------------------
      // Gemini API 호출
      // ----------------------------------------------------------------------
      const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

      const geminiRequestBody = {
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        tools: tools, // 도구 정의 추가
        tool_config: {
          function_calling_config: {
            mode: "AUTO", // Gemini가 필요하다고 판단하면 자동으로 도구 호출
          },
        },
        generationConfig: {
          temperature: 0.35,
          maxOutputTokens: 1200,
        },
      };

      const geminiResponse = await fetch(geminiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(geminiRequestBody),
      });

      if (!geminiResponse.ok) {
        const errorText = await geminiResponse.text();
        return new Response(JSON.stringify({ error: `Gemini API 오류: ${geminiResponse.status} - ${errorText}` }), {
          status: geminiResponse.status,
          headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
        });
      }

      const geminiData = await geminiResponse.json();
      const candidates = geminiData.candidates;

      let responseText = '';
      let imageUrl = ''; // Imagen 3에서 생성된 이미지 URL을 저장할 변수

      if (candidates && candidates.length > 0) {
        const firstCandidate = candidates[0];

        // ----------------------------------------------------------------------
        // Gemini의 응답에 Tool Call이 포함되어 있는지 확인
        // ----------------------------------------------------------------------
        if (firstCandidate.content && firstCandidate.content.parts) {
          for (const part of firstCandidate.content.parts) {
            if (part.function_call && part.function_call.name === "generate_image") {
              const imagePrompt = part.function_call.args.prompt;

              // --------------------------------------------------------------
              // Imagen 3 API 호출 (Tool Call 실행) - Gemini API 키 사용
              // --------------------------------------------------------------
              // Imagen 3 API 엔드포인트 수정: 모델 이름을 포함
              const imagen3Endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${IMAGEN_3_MODEL}:generateImages?key=${GEMINI_API_KEY}`;
              
              const imagen3Response = await fetch(imagen3Endpoint, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  prompt: {
                    text: imagePrompt,
                  },
                }),
              });

              if (!imagen3Response.ok) {
                const imagen3ErrorText = await imagen3Response.text();
                console.error("Imagen 3 API 오류:", imagen3Response.status, imagen3ErrorText);
                responseText += `(이미지 생성 실패: ${imagen3Response.status} - ${imagen3ErrorText})`;
                break; // 이미지 생성 실패 시 다음 파트 처리 중단
              }

              const imagen3Data = await imagen3Response.json();
              if (imagen3Data.images && imagen3Data.images.length > 0) {
                imageUrl = imagen3Data.images[0].url; // 첫 번째 이미지 URL 가져오기
                responseText += `(이미지 생성 완료: ${imageUrl})`; // 텍스트 응답에 이미지 URL 포함 (프론트엔드에서 파싱)
              } else {
                responseText += "(이미지 생성은 되었으나 URL을 찾을 수 없습니다.)";
              }
            } else if (part.text) {
              responseText += part.text;
            }
          }
        }
      }

      return new Response(JSON.stringify({ text: responseText.trim(), imageUrl: imageUrl, raw: geminiData }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
      });

    } catch (error) {
      console.error("Workers 처리 중 오류 발생:", error);
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