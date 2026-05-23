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
  const apiKey = requireKey(GEMINI_API_KEY, 'Gemini API 키');
  const base = `https://generativelanguage.googleapis.com/v1beta2/models/${GEMINI_MODEL}`;

  const bodies = [
    { instances: [{ input: prompt }], parameters: { temperature: 0.65, candidateCount: 1 } },
    { prompt: { text: prompt }, temperature: 0.65, candidateCount: 1 },
    { text: prompt, temperature: 0.65, candidateCount: 1 },
    { input: prompt, temperature: 0.65 },
    {
      messages: [
        { author: 'user', content: [{ type: 'text', text: prompt }] },
      ],
      temperature: 0.65,
      candidateCount: 1,
    },
  ];

  const endpoints = [
    `${base}:generate`,
    `${base}:generateMessage`,
    `${base}:generateText`,
  ];

  let lastError: any = null;
  let data: any = null;

  // Try combinations: endpoint + body, and try sending API key as query param or Bearer token
  for (const endpoint of endpoints) {
    for (const body of bodies) {
      // Try with API key in query param first
      const urlWithKey = `${endpoint}?key=${apiKey}`;
      try {
        const res = await fetch(urlWithKey, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        if (res.ok) {
          data = await res.json();
          break;
        }
        const txt = await res.text();
        lastError = new Error(`Gemini(${urlWithKey}) ${res.status}: ${txt}`);
        // if 400 due to unknown field, try next body shape
        if (res.status === 400) continue;
      } catch (err) {
        lastError = err;
      }

      // Try with Authorization Bearer header
      try {
        const res2 = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
          body: JSON.stringify(body),
        });
        if (res2.ok) {
          data = await res2.json();
          break;
        }
        const txt2 = await res2.text();
        lastError = new Error(`Gemini(${endpoint} auth) ${res2.status}: ${txt2}`);
        if (res2.status === 400) continue;
      } catch (err2) {
        lastError = err2;
      }
    }
    if (data) break;
  }

  if (!data) {
    throw lastError || new Error('Gemini API 호출 실패');
  }

  if (data?.candidates?.length > 0) {
    const candidate = data.candidates[0];
    if (candidate?.content) {
      const content = candidate.content;
      if (typeof content === 'string') return content;
      if (Array.isArray(content)) return content.map((item: any) => item?.text || '').filter(Boolean).join('\n');
      if (content?.text) return content.text;
    }
  }

  if (typeof data?.output === 'string') return data.output;
  if (data?.output?.text) return data.output.text;
  if (data?.output?.[0]?.content?.[0]?.text) return data.output[0].content[0].text;
  if (data?.result?.[0]?.content?.[0]?.text) return data.result[0].content[0].text;
  if (data?.predictions?.[0]?.content?.[0]?.text) return data.predictions[0].content[0].text;
  if (data?.predictions?.[0]?.output?.[0]?.content?.[0]?.text) return data.predictions[0].output[0].content[0].text;

  return JSON.stringify(data, null, 2);
}

export async function fetchDictionaryEntry(word: string): Promise<string> {
  const apiKey = requireKey(KOREAN_DICT_KEY, '표준국어대사전 API 키');
  const baseUrl = 'https://stdict.korean.go.kr/api/search';
  const params = new URLSearchParams({
    key: apiKey,
    target_type: 'search',
    req_type: 'json',
    method: 'searchDic',
    part: 'word',
    q: word,
  });

  if (KOREAN_DICT_CERTKEY) {
    params.set('certkey_no', KOREAN_DICT_CERTKEY);
  }

  const directUrl = `${baseUrl}?${params.toString()}`;
  let response: Response | null = null;
  try {
    response = await fetch(directUrl, { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`status:${response.status}`);
  } catch (err) {
    // CORS or network error — try a public CORS proxy fallback (allorigins)
    try {
      const proxy = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(directUrl);
      response = await fetch(proxy, { headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error(`프록시 응답 실패: ${response.status}`);
    } catch (err2) {
      throw new Error(`표준국어대사전 요청 실패: ${(err2 as any)?.message || (err as any)?.message || '네트워크 오류'}`);
    }
  }
  const text = await response.text();
  try {
    const data = JSON.parse(text);
    return parseDictionaryResponse(data, text);
  } catch {
    return parseDictionaryXml(text);
  }
}
