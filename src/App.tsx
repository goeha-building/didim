import { useEffect, useMemo, useState } from 'react';
import GeminiChat from './components/GeminiChat';
import { fetchDictionaryEntry, generateAiResponse } from './services/api';
import { initAnalytics } from './services/firebase';

type Theme = 'calm' | 'contrast';
type View = 'home' | 'prompt' | 'chat' | 'explain' | 'voice' | 'map' | 'cards' | 'guardian' | 'apis';

type ChipSet = {
  who: string;
  where: string;
  what: string;
};

const navItems: Array<{ id: View; label: string }> = [
  { id: 'home', label: '요약' },
  { id: 'prompt', label: '질문 조립' },
  { id: 'chat', label: '검증 대화' },
  { id: 'explain', label: '터치 풀이' },
  { id: 'voice', label: '음성 안내' },
  { id: 'map', label: '안전 지도' },
  { id: 'cards', label: '교육 카드' },
  { id: 'guardian', label: '보호자' },
  { id: 'apis', label: 'API 준비' },
];

const chipOptions = {
  who: ['나', '보호자', '선생님', '가게 직원', '집주인'],
  where: ['편의점에서', '계약서를 볼 때', '길을 찾을 때', '은행에서', '병원에서'],
  what: ['쉽게 설명해줘', '해야 할 일을 순서대로 알려줘', '위험한 말인지 확인해줘', '대답 문장을 만들어줘'],
};

const publicSources = [
  ['Google Gemini 1.5 Flash', '대화, 질문 정리, 쉬운 말 변환'],
  ['국립국어원 표준국어대사전', '어려운 단어 뜻 확인'],
  ['법제처 찾기 쉬운 생활법률', '계약/근로/생활 법률 팩트체크'],
  ['Kakao Maps Web SDK', '지도 렌더링과 현재 위치 표시'],
  ['생활안전지도/경찰청 위치 데이터', '위험 구역과 가까운 안전시설 표시'],
  ['Firebase Auth/Firestore', '보호자 연결, 위험 알림, 설정 동기화'],
];

const riskKeywords = ['돈 보내', '계좌번호', '비밀로 해', '사진 보내', '혼자 와', '서명해'];

function App() {
  const [theme, setTheme] = useState<Theme>('calm');
  const [view, setView] = useState<View>('home');
  const [chips, setChips] = useState<ChipSet>({
    who: '나',
    where: '계약서를 볼 때',
    what: '해야 할 일을 순서대로 알려줘',
  });
  const [freeText, setFreeText] = useState('근로계약서에 서명하기 전에 무엇을 확인해야 해?');
  const [dictionaryWord, setDictionaryWord] = useState('계약');
  const [dictionaryResult, setDictionaryResult] = useState('검색하면 쉬운 뜻이 여기에 표시됩니다.');
  const [generatedAnswer, setGeneratedAnswer] = useState('AI 답변이 여기에 표시됩니다.');
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  const [guardianAlerts, setGuardianAlerts] = useState([
    '금융 요구 의심 문장 1건 감지: "계좌번호를 알려줘" -> 보호자에게 순화 요약 알림 예정',
  ]);

  useEffect(() => {
    initAnalytics().catch((error) => {
      console.info('Firebase Analytics 초기화 생략:', error);
    });
  }, []);

  const assembledPrompt = useMemo(() => {
    return `${chips.who}에게 ${chips.where} ${chips.what}. 추가 상황: ${freeText}`;
  }, [chips, freeText]);

  const riskScore = useMemo(() => {
    const source = `${assembledPrompt} ${generatedAnswer}`;
    return riskKeywords.filter((word) => source.includes(word)).length;
  }, [assembledPrompt, generatedAnswer]);

  const updateChip = (group: keyof ChipSet, value: string) => {
    setChips((prev) => ({ ...prev, [group]: value }));
  };

  const runAi = async () => {
    setLoading(true);
    try {
      const answer = await generateAiResponse(
        `너는 느린 학습자와 보호자를 돕는 디딤돌 AI야. 쉬운 한국어로, 한 번에 3단계 이하로 답해줘.\n\n질문: ${assembledPrompt}`,
      );
      setGeneratedAnswer(answer);
    } catch (error: any) {
      setGeneratedAnswer(error?.message || 'AI 응답을 가져오지 못했습니다. API 키 또는 서버 프록시를 확인해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const lookupWord = async () => {
    setLoading(true);
    try {
      const result = await fetchDictionaryEntry(dictionaryWord);
      setDictionaryResult(result);
    } catch {
      setDictionaryResult(`${dictionaryWord}: 지금은 사전 API가 연결되지 않아 데모 뜻을 보여줍니다. 어려운 말을 쉬운 말로 바꾸는 자리입니다.`);
    } finally {
      setLoading(false);
    }
  };

  const speak = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.88;
    window.speechSynthesis.speak(utterance);
  };

  const simulateGuardianAlert = () => {
    setGuardianAlerts((prev) => [
      `위험 문장 감지: "비밀로 하고 돈 보내" -> 보호자에게 "금전 요구 가능성이 있어 확인이 필요합니다"로 알림`,
      ...prev,
    ]);
  };

  return (
    <div className={`app ${theme}`} style={{ fontSize: `${fontScale}rem` }}>
      <header className="app-header">
        <div>
          <p className="eyebrow">Didim Stepping Stone</p>
          <h1>느린 학습자를 위한 AI 생활 안전 도우미</h1>
        </div>
        <div className="header-actions">
          <button type="button" onClick={() => setTheme(theme === 'calm' ? 'contrast' : 'calm')}>
            {theme === 'calm' ? '고대비' : '기본색'}
          </button>
          <button type="button" onClick={() => setFontScale((prev) => Math.min(1.25, prev + 0.05))}>글자 크게</button>
          <button type="button" onClick={() => setFontScale(1)}>초기화</button>
        </div>
      </header>

      <nav className="tab-nav" aria-label="주요 기능">
        {navItems.map((item) => (
          <button key={item.id} type="button" className={view === item.id ? 'active' : ''} onClick={() => setView(item.id)}>
            {item.label}
          </button>
        ))}
      </nav>

      <main>
        {view === 'home' && (
          <section className="hero-panel home-character-view">
            <div className="main-character-placeholder" aria-label="메인 캐릭터">
              <span role="img" aria-label="캐릭터 아이콘">🤖</span> {/* Placeholder character icon */}
            </div>
            <h2>안녕하세요! 무엇을 도와드릴까요?</h2>
            <div className="home-quick-actions">
              <button type="button" onClick={() => setView('prompt')}>
                질문 만들기
              </button>
              <button type="button" onClick={() => {
                setView('explain');
                lookupWord(); // Auto-trigger dictionary lookup for demo
              }}>
                단어 풀이
              </button>
              <button type="button" onClick={() => setView('map')}>
                안전 지도
              </button>
            </div>
          </section>
        )}

        {view === 'prompt' && (
          <section className="work-panel">
            <h2>유니버셜 질문 조립기</h2>
            <p>직접 긴 문장을 쓰지 않아도 칩을 고르면 AI가 이해하기 쉬운 질문으로 바꿉니다.</p>
            <div className="chip-builder">
              {Object.entries(chipOptions).map(([group, options]) => (
                <div key={group} className="chip-row">
                  <strong>{group === 'who' ? '누구에게' : group === 'where' ? '어디서' : '무엇을'}</strong>
                  <div>
                    {options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={chips[group as keyof ChipSet] === option ? 'chip selected' : 'chip'}
                        onClick={() => updateChip(group as keyof ChipSet, option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <label className="field">
              추가 상황
              <textarea value={freeText} onChange={(event) => setFreeText(event.target.value)} />
            </label>
            <div className="prompt-preview">{assembledPrompt}</div>
            <button type="button" onClick={runAi} disabled={loading}>{loading ? '생성 중...' : 'AI로 답변 생성'}</button>
            <pre>{generatedAnswer}</pre>
          </section>
        )}

        {view === 'chat' && (
          <section className="work-panel">
            <h2>이중 검증 RAG 기반 대화창</h2>
            <p>법률/행정 질문은 공공데이터 출처를 먼저 확인한다는 전제로 답변합니다. 현재는 서버 프록시가 있으면 실제 호출, 없으면 데모 응답으로 전환됩니다.</p>
            <GeminiChat />
            <div className="source-strip">
              <span>법제처 생활법률</span>
              <span>표준국어대사전</span>
              <span>고용정보원 SOP</span>
            </div>
          </section>
        )}

        {view === 'explain' && (
          <section className="work-panel">
            <h2>터치-풀이와 마이크로 스텝</h2>
            <p>어려운 단어를 누르면 쉬운 뜻, 행동 순서, 삽화 프롬프트가 함께 나옵니다.</p>
            <div className="touch-sentence">
              근로계약서의 <button type="button" onClick={() => setModalOpen(true)}>임금</button> 과 근무시간을 확인한 뒤 서명하세요.
            </div>
            <div className="lookup-box">
              <input value={dictionaryWord} onChange={(event) => setDictionaryWord(event.target.value)} />
              <button type="button" onClick={lookupWord} disabled={loading}>사전 확인</button>
            </div>
            <pre>{dictionaryResult}</pre>
          </section>
        )}

        {view === 'voice' && (
          <section className="call-screen">
            <div className="call-avatar">AI</div>
            <h2>디딤돌 음성 안내</h2>
            <p>화면을 보기 어려운 상황에서는 전화 수신 화면처럼 크게 안내합니다.</p>
            <div className="call-actions">
              <button type="button" onClick={() => speak('천천히 이동하세요. 가까운 밝은 길로 가고, 필요하면 보호자에게 알림을 보냅니다.')}>안내 듣기</button>
              <button type="button" onClick={() => speak(generatedAnswer)}>최근 답변 읽기</button>
            </div>
          </section>
        )}

        {view === 'map' && (
          <section className="work-panel">
            <h2>위험 지역 오버레이 생활안전지도</h2>
            <p>Kakao Maps 키가 들어오면 실제 지도로 교체하고, 지금은 심사용 오버레이 목업으로 GPS/위험/대피소 흐름을 보여줍니다.</p>
            <div className="map-board">
              <span className="gps-dot">현재 위치</span>
              <span className="risk-zone">위험 구역</span>
              <span className="safe-zone">지구대</span>
              <span className="route-line" />
            </div>
            <div className="status-grid">
              <article><strong>위험도</strong><span>{riskScore > 0 ? '주의 필요' : '보통'}</span></article>
              <article><strong>가까운 안전시설</strong><span>320m · 지구대</span></article>
              <article><strong>자동 행동</strong><span>위험 진입 시 음성 경고</span></article>
            </div>
          </section>
        )}

        {view === 'cards' && (
          <section className="work-panel">
            <h2>맞춤형 AI 교육 카드뉴스</h2>
            <div className="card-news">
              {['계약서 제목을 확인해요', '돈과 시간을 숫자로 봐요', '모르면 바로 도움을 요청해요'].map((title, index) => (
                <article key={title}>
                  <span>{index + 1}</span>
                  <h3>{title}</h3>
                  <p>긴 공공자료를 짧은 문장, 큰 글자, 한 가지 행동으로 바꿔 보여줍니다.</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {view === 'guardian' && (
          <section className="work-panel">
            <h2>프라이버시 엄수형 가디언 대시보드</h2>
            <p>대화 전문은 저장하지 않고 위험 문장만 순화 요약해서 보호자에게 보냅니다.</p>
            <button type="button" onClick={simulateGuardianAlert}>위험 알림 시뮬레이션</button>
            <div className="guardian-grid">
              <article>
                <h3>알림</h3>
                {guardianAlerts.map((alert, index) => <p key={`${alert}-${index}`}>{alert}</p>)}
              </article>
              <article>
                <h3>원격 설정</h3>
                <label><input type="checkbox" defaultChecked /> 고대비 모드 허용</label>
                <label><input type="checkbox" defaultChecked /> 위험 단어 감지</label>
                <label><input type="checkbox" /> 위치 공유는 긴급 시에만</label>
              </article>
            </div>
          </section>
        )}

        {view === 'apis' && (
          <section className="work-panel">
            <h2>필요 API 키와 데이터</h2>
            <p>다음 키를 `.env`에 넣으면 데모 모드에서 실제 연동 모드로 확장할 수 있습니다.</p>
            <div className="api-table">
              {publicSources.map(([name, role]) => (
                <article key={name}>
                  <strong>{name}</strong>
                  <span>{role}</span>
                </article>
              ))}
            </div>
            <pre>{`# frontend .env
VITE_API_BASE_URL=
VITE_KAKAO_MAP_KEY=
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=

# server/.env
GEMINI_API_KEY=
GEMINI_MODEL=gemini-2.5-flash
KOREAN_DICT_KEY=
OPENAI_API_KEY=  # 이미지 생성도 서버 프록시 권장`}</pre>
          </section>
        )}
      </main>

      {modalOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="explain-modal">
            <h2>임금</h2>
            <p>일하고 받는 돈입니다. 계약서에는 얼마를, 언제 받는지 적혀 있어야 합니다.</p>
            <ol>
              <li>시급 또는 월급 숫자를 찾습니다.</li>
              <li>받는 날짜를 확인합니다.</li>
              <li>모르면 바로 서명하지 않고 물어봅니다.</li>
            </ol>
            <div className="image-placeholder">삽화: 계약서의 돈 숫자를 손가락으로 짚는 장면</div>
            <button type="button" onClick={() => setModalOpen(false)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
