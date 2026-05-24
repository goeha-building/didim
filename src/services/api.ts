const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_MODEL = import.meta.env.VITE_GEMINI_MODEL || 'chat-bison-001';
const KOREAN_DICT_KEY = import.meta.env.VITE_KOREAN_DICT_KEY;
const KOREAN_DICT_CERTKEY = import.meta.env.VITE_KOREAN_DICT_CERTKEY;

function requireKey(value: string | undefined, name: string) {
  if (!value) {
    throw new Error(`${name}이(가) 설정되지 않았습니다. .env에서 값을 확인하세요.`);
  }
  return value;
}

function parseDictionaryXml(xmlText: string): string {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
  const items = Array.from(xmlDoc.querySelectorAll('item'));
  if (!items.length) {
    return xmlText;
  }
  return items
    .map((item) => {
      const wordNode = item.querySelector('word');
      const defNode = item.querySelector('definition');
      const wordText = wordNode?.textContent?.trim() || '단어 정보 없음';
      const definition = defNode?.textContent?.trim() || '뜻 정보 없음';
      return `단어: ${wordText}\n뜻: ${definition}`;
    })
    .join('\n\n');
}

function parseDictionaryResponse(data: any, rawText: string): string {
  if (data?.channel?.item) {
    const items = Array.isArray(data.channel.item) ? data.channel.item : [data.channel.item];
    return items
      .map((item: any) => {
        const wordText = item.word?.value || item.word || '단어 정보 없음';
        const meaning = item?.sense?.[0]?.definition?.[0]?.value || item.meaning || JSON.stringify(item, null, 2);
        return `단어: ${wordText}\n뜻: ${meaning}`;
      })
      .join('\n\n');
  }
  if (data?.item) {
    const items = Array.isArray(data.item) ? data.item : [data.item];
    return items.map((item: any) => `단어: ${item.word || '단어 없음'}\n뜻: ${item.meaning || JSON.stringify(item, null, 2)}`).join('\n\n');
  }
  return rawText || JSON.stringify(data, null, 2);
}

export async function generateAiResponse(prompt: string): Promise<string> {
  try {
    // Use server proxy to avoid exposing API key and CORS/400 inconsistencies
    const resp = await fetch('/api/gemini/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    if (!resp.ok) {
      const txt = await resp.text();
      throw new Error(`서버 프로시 응답 에러: ${resp.status} ${txt}`);
    }
    const json = await resp.json();
    // Try to extract text from server response
    const raw = json?.raw;
    if (!raw) return JSON.stringify(json, null, 2);
    if (typeof raw === 'string') return raw;
    // If raw has fields from Gemini, attempt to parse similarly to previous logic
    if (raw?.candidates?.length) {
      const c = raw.candidates[0];
      if (typeof c.content === 'string') return c.content;
      if (Array.isArray(c.content)) return c.content.map((x:any)=>x.text||'').join('\n');
      return c.content?.text || JSON.stringify(raw, null, 2);
    }
    if (raw?.output?.text) return raw.output.text;
    if (raw?.output) return JSON.stringify(raw.output, null, 2);
    return JSON.stringify(raw, null, 2);
  } catch (err) {
    throw err;
  }
  
}

export async function fetchDictionaryEntry(word: string): Promise<string> {
  // Prefer server proxy to avoid CORS and key exposure
  try {
    const resp = await fetch(`/api/dictionary/define?word=${encodeURIComponent(word)}`);
    if (!resp.ok) {
      const t = await resp.text();
      throw new Error(`서버 프록시 에러: ${resp.status} ${t}`);
    }
    const json = await resp.json();
    // server returns { raw: ... }
    const raw = json?.raw;
    if (!raw) return JSON.stringify(json, null, 2);
    if (typeof raw === 'string') return parseDictionaryXml(raw);
    return parseDictionaryResponse(raw, JSON.stringify(raw));
  } catch (err) {
    // Fallback to client-side direct fetch (best-effort)
    const apiKey = KOREAN_DICT_KEY;
    if (!apiKey) throw err;
    const baseUrl = 'https://stdict.korean.go.kr/api/search';
    const params = new URLSearchParams({ key: apiKey, target_type: 'search', req_type: 'json', method: 'searchDic', part: 'word', q: word });
    if (KOREAN_DICT_CERTKEY) params.set('certkey_no', KOREAN_DICT_CERTKEY);
    const directUrl = `${baseUrl}?${params.toString()}`;
    let response: Response | null = null;
    try {
      response = await fetch(directUrl, { headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error(`status:${response.status}`);
    } catch (err2) {
      const proxy = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(directUrl);
      response = await fetch(proxy, { headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error(`프록시 응답 실패: ${response.status}`);
    }
    const text = await response.text();
    try {
      const data = JSON.parse(text);
      return parseDictionaryResponse(data, text);
    } catch {
      return parseDictionaryXml(text);
    }
  }
}
