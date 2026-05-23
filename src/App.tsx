import { useEffect, useMemo, useState } from 'react';

type Zone = {
  id: number;
  name: string;
  type: 'safe' | 'risk';
  description: string;
};

const promptFragments = [
  { label: '학습 대상', value: '느린학습자' },
  { label: '교과 영역', value: '기초 생활 교육' },
  { label: '목표', value: '안전 정보 이해 및 자기 주도 학습' },
  { label: '톤', value: '친절하고 쉬운 표현' },
];

const safetyZones: Zone[] = [
  { id: 1, name: '00경찰서', type: 'safe', description: '가까운 세이프존' },
  { id: 2, name: '공원 앞 횡단보도', type: 'risk', description: '야간 조명이 약한 구역' },
  { id: 3, name: '버스정류장', type: 'safe', description: '사람이 많은 안전 구역' },
  { id: 4, name: '골목길', type: 'risk', description: '비상 호출이 필요한 위험 지역' },
];

const featureCards = [
  {
    title: 'RAG 기반 사실 검증 AI',
    description:
      '법제처와 행안부 공공데이터를 벡터 DB로 구성하여, 학습자 친화적 답변과 팩트 기반 해설을 동시에 제공합니다.',
  },
  {
    title: '멀티모달 그림 보조',
    description:
      'Gemini + DALL-E 스타일 이미지 보조 생성으로 학습 내용을 시각화하며, 단계별 이해를 돕습니다.',
  },
  {
    title: '개인정보 보호 요약',
    description:
      '개인정보는 요약 리포트로 처리하고, 가디언 대시보드 연동 알고리즘으로 안전하게 관리합니다.',
  },
];

const dataSources = [
  { name: '경찰청 생활안전 데이터', source: '경찰청 공공데이터 포털', note: '도보 안전지도 오버레이' },
  { name: '표준국어대사전 API', source: '국립국어원', note: '프롬프트 가이드 언어 지원' },
  { name: '법제처 정보', source: '법제처 공공 API', note: '법 기반 RAG 사실 검증' },
  { name: '행정안전부 공공데이터', source: '행안부 OpenAPI', note: '위험 지역 및 안전망 정보' },
];

function App() {
  const [currentPrompt, setCurrentPrompt] = useState<string>('학습 대상: 느린학습자');
  const [selectedFragments, setSelectedFragments] = useState<string[]>([]);
  const [dictionaryQuery, setDictionaryQuery] = useState('안전');
  const [dictionaryPlan, setDictionaryPlan] = useState('표준국어대사전 API 연동 계획을 준비 중입니다.');
  const [ttsStatus, setTtsStatus] = useState('TTS 준비 완료');
  const [highlighted, setHighlighted] = useState<number | null>(null);

  useEffect(() => {
    const summary = selectedFragments.length > 0 ? selectedFragments.join(', ') : '학습 대상: 느린학습자';
    setCurrentPrompt(`질문 조립기 프롬프트: ${summary}`);
  }, [selectedFragments]);

  const promptOptions = useMemo(
    () => promptFragments.map((item, index) => ({ ...item, id: index })),
    [],
  );

  const toggleFragment = (value: string) => {
    setSelectedFragments((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
  };

  const speakText = (text: string) => {
    const synth = window.speechSynthesis;
    if (!synth) {
      setTtsStatus('TTS를 사용할 수 없는 브라우저입니다.');
      return;
    }
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.95;
    utterance.onstart = () => setTtsStatus('음성 안내 재생 중...');
    utterance.onend = () => setTtsStatus('음성 안내 재생 완료');
    utterance.onerror = () => setTtsStatus('음성 안내에 문제가 발생했습니다.');
    synth.speak(utterance);
  };

  const requestDictionaryPlan = () => {
    setDictionaryPlan(
      `표준국어대사전 API 연동 계획:
1) ${dictionaryQuery} 키워드 검색 요청 처리
2) 응답에서 어휘 설명, 예문, 발음 데이터를 파싱
3) 프롬프트 가이드에 자연어 설명 자동 보강`,
    );
  };

  return (
    <div className="app-shell">
      <main className="page-shell">
        <section className="hero-card widget-style">
          <div className="hero-badge">Didim</div>
          <h1>느린학습자를 위한 AI 학습 플래너</h1>
          <p>
            iPhone 위젯처럼 직관적인 모바일 UI로, 안전 지도와 학습 AI를 한곳에서 제공합니다.
          </p>
          <div className="hero-grid">
            <div>
              <strong>핵심 기능</strong>
              <p>질문 조립기, 안전망 지도, 유니버셜 접근성, RAG 기반 답변.</p>
            </div>
            <div>
              <strong>배포</strong>
              <p>GitHub Pages 배포용 Vite 설정 포함</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>06. 질문 조립기</h2>
          <p>비계 설정 기반의 조립식 프롬프트를 만들고, 국어사전 API 연동 계획을 함께 제시합니다.</p>
          <div className="prompt-builder">
            {promptOptions.map((item) => (
              <button
                key={item.id}
                type="button"
                className={selectedFragments.includes(item.value) ? 'pill active' : 'pill'}
                onClick={() => toggleFragment(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="summary-box" data-highlighted={highlighted === 1} tabIndex={0} onFocus={() => setHighlighted(1)} onBlur={() => setHighlighted(null)}>
            <h3>조립된 프롬프트</h3>
            <p>{currentPrompt}</p>
          </div>
          <div className="dictionary-panel">
            <label htmlFor="dictionaryQuery">사전 검색 단어</label>
            <input
              id="dictionaryQuery"
              type="text"
              value={dictionaryQuery}
              onChange={(event) => setDictionaryQuery(event.target.value)}
              placeholder="예: 안전"
            />
            <button type="button" onClick={requestDictionaryPlan} className="primary-button">
              API 연동 계획 보기
            </button>
            <pre>{dictionaryPlan}</pre>
          </div>
        </section>

        <section className="section-card map-section">
          <h2>07. 안전망 지도</h2>
          <p>생활안전지도 기반 위험 지역 오버레이와 세이프존 정보를 한눈에 확인합니다.</p>
          <div className="map-mock">
            <div className="map-marker safe">세이프존</div>
            <div className="map-marker risk">위험 지역</div>
          </div>
          <div className="zone-list">
            {safetyZones.map((zone) => (
              <article key={zone.id} className={`zone-card ${zone.type}`}>
                <h3>{zone.name}</h3>
                <p>{zone.description}</p>
                <span>{zone.type === 'safe' ? 'SAFE' : 'RISK'}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card accessibility-section">
          <h2>08. 유니버셜 접근성</h2>
          <p>Voice-Call TTS와 하이라이트 터치-풀이 기능으로 누구나 쉽게 이용할 수 있습니다.</p>
          <div className="accessibility-grid">
            <div className="accessibility-card" tabIndex={0} onFocus={() => setHighlighted(2)} onBlur={() => setHighlighted(null)}>
              <h3>음성 안내</h3>
              <p>학습 내용을 즉시 음성으로 설명받으세요.</p>
              <button type="button" onClick={() => speakText('안녕하세요. 오늘은 안전 교육을 시작합니다.')}>음성 재생</button>
              <p className="tts-status">{ttsStatus}</p>
            </div>
            <div className="accessibility-card highlight" tabIndex={0} onFocus={() => setHighlighted(3)} onBlur={() => setHighlighted(null)}>
              <h3>하이라이트 터치</h3>
              <p>터치 시 강조 표시가 활성화되어 집중을 돕습니다.</p>
              <div className="highlight-sample">터치 후 강조</div>
            </div>
          </div>
        </section>

        <section className="section-card technical-section">
          <h2>09. AI 기술 로직</h2>
          <div className="feature-grid">
            {featureCards.map((item) => (
              <article key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="text-block">
            <strong>RAG 시스템:</strong> 공공데이터를 벡터 DB로 색인하고, 질문에 최적화된 패턴으로 검색해 AI 응답의 정확성과 신뢰도를 높입니다.
          </div>
          <div className="text-block">
            <strong>이미지 보조 생성:</strong> 학습 단계별로 시각적 이해를 돕는 일러스트를 자동 생성하여 복합 정보를 부담 없이 전달합니다.
          </div>
        </section>

        <section className="section-card security-section">
          <h2>11. 데이터 보안 및 프라이버시</h2>
          <p>개인정보는 요약 리포트로 처리하며, 가디언 대시보드가 수집 정보 사용을 점검합니다.</p>
          <ul>
            <li>최소 수집 원칙 적용</li>
            <li>비식별화 요약 리포트</li>
            <li>부모/교사 검토용 가디언 대시보드 연동</li>
          </ul>
        </section>

        <section className="section-card data-source-section">
          <h2>12. 활용 공공데이터 리스트</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>데이터셋</th>
                  <th>출처</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                {dataSources.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.source}</td>
                    <td>{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <footer className="footer-bar">
        <p>Didim AI 플래너 v0.1 — GitHub Pages 배포 준비 완료</p>
      </footer>
    </div>
  );
}

export default App;
