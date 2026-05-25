// src/services/api.ts

// API_BASE_URL은 더 이상 서버 프록시용으로 사용되지 않음.
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const CLOUDFLARE_WORKER_URL = import.meta.env.VITE_CLOUDFLARE_WORKER_URL || '';

const demoAnswer = `먼저 세 가지만 확인하세요.

1. 돈: 시급 또는 월급이 숫자로 적혀 있는지 봅니다.
2. 시간: 일하는 요일, 시작 시간, 끝 시간을 봅니다.
3. 쉬는 시간: 하루에 얼마나 쉬는지 확인합니다.

모르는 말이 있으면 바로 서명하지 말고 "이 문장을 쉽게 설명해주세요"라고 물어보세요.
확인 출처: 법제처 찾기 쉬운 생활법률, 고용노동부 근로계약 안내`;

// 함수 반환 타입 업데이트
export async function generateAiResponse(prompt: string): Promise<{ text: string; imageUrl?: string }> {
  if (!CLOUDFLARE_WORKER_URL) {
    console.warn("VITE_CLOUDFLARE_WORKER_URL 환경 변수가 설정되지 않았습니다. 데모 모드로 작동합니다.");
    return { text: `${demoAnswer}\n\n데모 모드: Cloudflare Workers URL이 설정되지 않았습니다.` };
  }
  
  try {
    const response = await fetch(`${CLOUDFLARE_WORKER_URL}`, { // Cloudflare Worker URL 사용
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Workers 호출 오류: ${response.status}`);
    }

    const json = await response.json();
    // Workers 코드에서 반환하는 JSON 형태에 따라 파싱 로직 조정
    // Workers는 { text: string, imageUrl?: string, raw: any } 형태를 반환하도록 작성되었음.
    return {
      text: json?.text || `응답 텍스트 없음. raw 데이터: ${JSON.stringify(json, null, 2)}`,
      imageUrl: json?.imageUrl,
    };
  } catch (error: any) {
    return { text: `데모 모드: Workers 호출 오류. ${error.message}. VITE_CLOUDFLARE_WORKER_URL이 올바른지 확인하세요.` };
  }
}

// 이 함수들은 기존 API_BASE_URL을 사용하고 있으므로,
// Workers로 프록시할 필요가 없다면 그대로 두고, 필요하다면 Workers에서 엔드포인트를 만들어야 합니다.
// 현재는 이 함수들이 동작하지 않을 가능성이 높으므로, 데모 응답으로 대체하거나 Workers에 해당 엔드포인트를 추가해야 합니다.
export async function fetchDictionaryEntry(word: string): Promise<string> {
  // Cloudflare Workers를 통해 사전 API를 호출하는 경우, Workers에 해당 엔드포인트를 구현해야 합니다.
  // 여기서는 편의상 데모 응답을 반환합니다.
  return `${word}: 데모 뜻입니다. Cloudflare Workers를 통해 사전 API를 호출하는 기능을 추가해야 합니다.`;
}

// tryDictionaryProxy 함수는 더 이상 사용되지 않거나, Workers를 통해 동작해야 합니다.
// function tryDictionaryProxy(word: string): Promise<string | null> {
//   return null; // 현재는 사용하지 않음
// }

// function parseDictionaryData(data: any, fallbackWord: string): string {
//   return JSON.stringify(data, null, 2); // 현재는 사용하지 않음
// }

