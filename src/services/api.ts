const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const demoAnswer = `먼저 세 가지만 확인하세요.

1. 돈: 시급 또는 월급이 숫자로 적혀 있는지 봅니다.
2. 시간: 일하는 요일, 시작 시간, 끝 시간을 봅니다.
3. 쉬는 시간: 하루에 얼마나 쉬는지 확인합니다.

모르는 말이 있으면 바로 서명하지 말고 "이 문장을 쉽게 설명해주세요"라고 물어보세요.
확인 출처: 법제처 찾기 쉬운 생활법률, 고용노동부 근로계약 안내`;

function extractGeminiText(data: any): string {
  const parts = data?.candidates?.[0]?.content?.parts;
  if (Array.isArray(parts)) {
    return parts.map((part) => part.text || '').join('\n').trim();
  }
  return data?.text || data?.raw || '';
}

export async function generateAiResponse(prompt: string): Promise<string> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/gemini/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message);
    }

    const json = await response.json();
    if (json?.text) return json.text;
    if (json?.raw) return extractGeminiText(json.raw) || JSON.stringify(json.raw, null, 2);
    return JSON.stringify(json, null, 2);
  } catch {
    return `${demoAnswer}\n\n데모 모드: Gemini 키는 프런트에 넣지 않습니다. 서버 프록시(/api/gemini/generate)가 켜지면 실제 응답으로 바뀝니다.`;
  }
}

export async function fetchDictionaryEntry(word: string): Promise<string> {
  const trimmed = word.trim();
  if (!trimmed) return '검색할 단어를 입력해주세요.';

  const proxyResult = await tryDictionaryProxy(trimmed);
  if (proxyResult) return proxyResult;

  return `${trimmed}: 데모 뜻입니다. 실제 뜻은 서버 프록시(/api/dictionary/define)가 켜지면 국립국어원 표준국어대사전 API로 확인합니다.`;
}

async function tryDictionaryProxy(word: string): Promise<string | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/dictionary/define?word=${encodeURIComponent(word)}`);
    if (!response.ok) return null;
    const json = await response.json();
    if (typeof json?.raw === 'string') return json.raw;
    if (json?.raw) return parseDictionaryData(json.raw, word);
    return JSON.stringify(json, null, 2);
  } catch {
    return null;
  }
}

function parseDictionaryData(data: any, fallbackWord: string): string {
  const item = Array.isArray(data?.channel?.item) ? data.channel.item[0] : data?.channel?.item;
  const sense = Array.isArray(item?.sense) ? item.sense[0] : item?.sense;
  const definition = sense?.definition || item?.definition;
  if (!definition) return JSON.stringify(data, null, 2);
  return `${item?.word || fallbackWord}: ${definition}`;
}
