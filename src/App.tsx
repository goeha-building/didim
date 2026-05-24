import { useEffect, useMemo, useRef, useState } from 'react';
import { fetchDictionaryEntry, generateAiResponse } from './services/api';
import { QRCodeCanvas } from 'qrcode.react';
import {
  initFirebase,
  signInUserAnonymously,
  signOutUser,
  onAuthStateChangedListener,
  createUserProfile,
  connectGuardian,
  saveActivity,
  getActivityLogs,
} from './services/firebase';
import { Html5QrcodeScanner } from 'html5-qrcode';

type Zone = {
  id: number;
  name: string;
  type: 'safe' | 'risk';
  description: string;
};

type ScaffoldField = {
  id: string;
  label: string;
  placeholder: string;
  help: string;
};

const scaffoldFields: ScaffoldField[] = [
  {
    id: 'what',
    label: '무엇을 도와줄까요?',
    placeholder: '예: 안전한 길 찾기, 생활 규칙 정리',
    help: 'AI가 해결해야 할 핵심 과제를 쉽게 적어주세요.',
  },
  {
    id: 'why',
    label: '왜 필요한가요?',
    placeholder: '예: 혼자서 길 찾기가 부담스러워서',
    help: '이 작업이 중요한 이유를 간단히 적어주세요.',
  },
  {
    id: 'when',
    label: '언제/어떤 상황에서?',
    placeholder: '예: 집에서 학교 가는 길, 시장 갈 때',
    help: '상황을 설명하면 AI가 더 정확히 도와줄 수 있어요.',
  },
  {
    id: 'how',
    label: '어떤 방식으로 알려줄까요?',
    placeholder: '예: 쉬운 문장으로, 표와 예시로',
    help: '설명 방식이나 형식을 선택하세요.',
  },
  {
    id: 'who',
    label: '누구를 위해서인가요?',
    placeholder: '예: 경계성 지능 어르신, 느린 학습자',
    help: '대상에 맞춘 설명을 만들어줍니다.',
  },
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
  const [theme, setTheme] = useState<'dark' | 'light'>(() => (localStorage.getItem('didim_theme') as 'dark' | 'light') || 'dark');
  const [currentView, setCurrentView] = useState<string>('home');
  const [scaffoldValues, setScaffoldValues] = useState<Record<string, string>>({
    what: '',
    why: '',
    when: '',
    how: '',
    who: '경계성 지능 어르신',
  });
  const [assembledPrompt, setAssembledPrompt] = useState('아직 내용을 입력하지 않았습니다.');
  const [dictionaryQuery, setDictionaryQuery] = useState('안전');
  const [dictionaryPlan, setDictionaryPlan] = useState('표준국어대사전 API 연동 계획을 준비 중입니다.');
  const [dictionaryResult, setDictionaryResult] = useState<string>('');
  const [aiResponse, setAiResponse] = useState<string>('AI 답변을 생성하면 여기에 표시됩니다.');
  const [aiLoading, setAiLoading] = useState(false);
  const [dictLoading, setDictLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [ttsStatus, setTtsStatus] = useState('TTS 준비 완료');
  const [highlighted, setHighlighted] = useState<number | null>(null);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [miniBarRect, setMiniBarRect] = useState<DOMRect | null>(null);
  const [miniBarVisible, setMiniBarVisible] = useState(false);
  const [wordExplanation, setWordExplanation] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<{ connectionCode: string; connections: Array<{ uid: string }> } | null>(null);
  const [guardianCodeInput, setGuardianCodeInput] = useState('');
  const [guardianMessage, setGuardianMessage] = useState('');
  const [activityMessage, setActivityMessage] = useState('');
  const [activityLogs, setActivityLogs] = useState<Array<{ id: string; event: string; details: Record<string, any>; createdAt: any }>>([]);
  const [scanMode, setScanMode] = useState(false);
  const [scanError, setScanError] = useState('');
  const [scanResult, setScanResult] = useState('');
  const scanContainerRef = useRef<HTMLDivElement | null>(null);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try { localStorage.setItem('didim_theme', theme); } catch {}
  }, [theme]);

  useEffect(() => {
    initFirebase();
    const unsubscribe = onAuthStateChangedListener(async (currentUser) => {
      if (!currentUser) {
        try {
          setAuthLoading(true);
          await signInUserAnonymously();
          return;
        } catch (err) {
          setAuthLoading(false);
          setGuardianMessage('Firebase 익명 로그인에 실패했습니다. 다시 시도해 주세요.');
          return;
        }
      }

      setUser(currentUser);
      const profileData = await createUserProfile(currentUser);
      setProfile(profileData);
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const viewLabels: Record<string, string> = {
    home: '홈',
    scaffold: '질문 조립기',
    map: '안전망 지도',
    accessibility: '유니버셜 접근성',
    ai: 'AI 답변',
    data: '공공데이터',
    dashboard: '활동 대시보드',
  };

  const navigateTo = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const prompt = `당신은 느린 학습자를 돕는 친절한 AI 선생님입니다.

- 무엇을: ${scaffoldValues.what || '...'}
- 왜: ${scaffoldValues.why || '...'}
- 언제/어디서: ${scaffoldValues.when || '...'}
- 어떻게: ${scaffoldValues.how || '...'}
- 누구를 위해: ${scaffoldValues.who || '...'}`;
    setAssembledPrompt(prompt);
  }, [scaffoldValues]);

  const promptOptions = useMemo(
    () => scaffoldFields.map((item) => ({ ...item })),
    [],
  );

  const updateScaffold = (id: string, value: string) => {
    setScaffoldValues((prev) => ({ ...prev, [id]: value }));
  };

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(assembledPrompt);
      alert('프롬프트가 복사되었습니다.');
    } catch {
      alert('프롬프트 복사에 실패했습니다. 브라우저 권한을 확인하세요.');
    }
  };

  // double-click / double-tap handler for word selection
  useEffect(() => {
    const handler = async (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.tagName === 'BUTTON' || target.closest('button')) return;

      const sel = window.getSelection();
      const word = sel?.toString().trim();
      if (!word) return;

      const range = sel?.getRangeAt(0);
      if (!range) return;
      const rect = range.getBoundingClientRect();

      // clear previous highlight
      const prev = document.querySelectorAll('.word-selected');
      prev.forEach((n) => {
        const parent = n.parentNode;
        if (!parent) return;
        while (n.firstChild) parent.insertBefore(n.firstChild, n);
        parent.removeChild(n);
        parent.normalize();
      });

      // surround selection with span
      try {
        const span = document.createElement('span');
        span.className = 'word-selected';
        span.setAttribute('data-word', word);
        range.surroundContents(span);
      } catch (err) {
        // fallback: don't break if surroundContents fails
      }

      setSelectedWord(word);
      setMiniBarRect(rect);
      setMiniBarVisible(true);
      setWordExplanation(null);
    };

    document.addEventListener('dblclick', handler);
    return () => document.removeEventListener('dblclick', handler);
  }, []);

  const closeMiniBar = () => {
    setMiniBarVisible(false);
    setSelectedWord(null);
    setWordExplanation(null);
    // remove highlight
    const prev = document.querySelectorAll('.word-selected');
    prev.forEach((n) => {
      const parent = n.parentNode;
      if (!parent) return;
      while (n.firstChild) parent.insertBefore(n.firstChild, n);
      parent.removeChild(n);
      parent.normalize();
    });
  };

  const miniExplain = async () => {
    if (!selectedWord) return;
    try {
      const def = await fetchDictionaryEntry(selectedWord);
      setWordExplanation(def);
    } catch (err: any) {
      setWordExplanation(err?.message || '사전 검색 실패');
    }
  };

  const miniReplace = () => {
    const replacement = prompt(`${selectedWord}의 대체어를 입력하세요. (비워두면 취소)`);
    if (!replacement) return;
    // replace first highlighted span content
    const span = document.querySelector('.word-selected');
    if (span) span.textContent = replacement;
    closeMiniBar();
  };

  const miniTts = () => {
    if (!selectedWord) return;
    speakText(selectedWord);
    closeMiniBar();
  };

  const handleSignOut = async () => {
    setAuthLoading(true);
    try {
      await signOutUser();
      setUser(null);
      setProfile(null);
      setGuardianMessage('로그아웃되었습니다.');
    } catch (err: any) {
      setGuardianMessage(err?.message || '로그아웃 중 오류가 발생했습니다.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleConnectGuardian = async () => {
    if (!user || !guardianCodeInput.trim()) {
      setGuardianMessage('보호자 코드를 입력하세요.');
      return;
    }

    try {
      const result = await connectGuardian(user.uid, guardianCodeInput.trim());
      setGuardianMessage(`보호자 연결이 완료되었습니다.`);
      if (user) {
        const profileData = await createUserProfile(user);
        setProfile(profileData);
        saveActivity(user.uid, 'connect_guardian', { guardianCode: result.guardianCode });
      }
    } catch (err: any) {
      setGuardianMessage(err?.message || '보호자 연결에 실패했습니다.');
    }
  };

  const parseConnectCode = (text: string) => {
    const urlMatch = text.match(/connectCode=([A-Za-z0-9-]+)/);
    if (urlMatch?.[1]) return urlMatch[1];
    const codeMatch = text.trim().match(/^[A-Z0-9]{6,12}$/i);
    return codeMatch?.[0] || null;
  };

  const handleScanResult = async (decodedText: string) => {
    const code = parseConnectCode(decodedText);
    setScanResult(decodedText);
    if (code) {
      setGuardianCodeInput(code);
      setGuardianMessage(`QR에서 보호자 코드가 감지되었습니다: ${code}`);
      if (user) {
        try {
          await connectGuardian(user.uid, code);
          const profileData = await createUserProfile(user);
          setProfile(profileData);
          setGuardianMessage('QR로 보호자 연결이 완료되었습니다.');
          saveActivity(user.uid, 'connect_guardian_scan', { guardianCode: code });
        } catch (err: any) {
          setGuardianMessage(err?.message || 'QR 보호자 연결에 실패했습니다.');
        }
      }
    }
    stopQrScanner();
  };

  const stopQrScanner = async () => {
    setScanMode(false);
    if (scannerRef.current) {
      try {
        await scannerRef.current.clear();
      } catch {
        // ignore
      }
      scannerRef.current = null;
    }
  };

  useEffect(() => {
    if (!scanMode || !scanContainerRef.current) return;
    setScanError('');
    const elementId = scanContainerRef.current.id || 'qr-scanner';
    const scanner = new Html5QrcodeScanner(elementId, { fps: 10, qrbox: 250 }, false);
    scannerRef.current = scanner;
    scanner.render(
      (decodedText) => {
        handleScanResult(decodedText);
      },
      (errorMessage) => {
        setScanError(errorMessage);
      },
    );
    return () => {
      scanner.clear().catch(() => undefined);
      scannerRef.current = null;
    };
  }, [scanMode]);

  useEffect(() => {
    if (currentView !== 'dashboard' || !user) return;
    const loadLogs = async () => {
      setActivityMessage('활동 로그를 불러오는 중입니다...');
      try {
        const logs = await getActivityLogs(user.uid);
        setActivityLogs(logs);
        setActivityMessage('최근 활동 로그를 불러왔습니다.');
      } catch (err: any) {
        setActivityMessage(err?.message || '활동 로그를 불러오지 못했습니다.');
      }
    };
    loadLogs();
  }, [currentView, user]);

  const handleGenerateAi = async () => {
    setApiError(null);
    setAiLoading(true);
    try {
      const answer = await generateAiResponse(assembledPrompt);
      setAiResponse(answer);
      if (user) {
        saveActivity(user.uid, 'generate_ai', { prompt: assembledPrompt });
      }
    } catch (error: any) {
      setApiError(error?.message || 'AI 생성 중 오류가 발생했습니다.');
    } finally {
      setAiLoading(false);
    }
  };

  const handleFetchDictionary = async () => {
    setApiError(null);
    setDictLoading(true);
    try {
      const result = await fetchDictionaryEntry(dictionaryQuery);
      setDictionaryResult(result);
      if (user) {
        saveActivity(user.uid, 'dictionary_lookup', { query: dictionaryQuery });
      }
    } catch (error: any) {
      setApiError(error?.message || '사전 검색 중 오류가 발생했습니다.');
    } finally {
      setDictLoading(false);
    }
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
      <header className="top-nav" role="banner">
        <div className="nav-container flex items-center justify-between px-4 py-3 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 sticky top-0 z-50">
          <div className="nav-left flex items-center gap-2">
            {currentView !== 'home' ? (
              <button className="px-3 py-2 hover:bg-slate-700 rounded-lg transition" onClick={() => setCurrentView('home')} aria-label="뒤로가기">← 뒤로</button>
            ) : (
              <div className="text-xl font-bold text-cyan-400">Didim</div>
            )}
          </div>
          <nav className="nav-actions hidden sm:flex gap-1" role="navigation" aria-label="주요 기능">
            {['scaffold', 'map', 'accessibility', 'ai', 'data', 'dashboard'].map((view) => (
              <button key={view} onClick={() => setCurrentView(view)} className={`px-3 py-2 rounded-lg text-sm transition ${currentView === view ? 'bg-cyan-500 text-slate-900 font-semibold' : 'text-slate-300 hover:bg-slate-700'}`}>
                {view === 'scaffold' ? '질문 조립기' : view === 'map' ? '안전지도' : view === 'accessibility' ? '접근성' : view === 'ai' ? 'AI' : view === 'data' ? '데이터' : '대시보드'}
              </button>
            ))}
          </nav>
          <div className="nav-right flex items-center gap-3">
            <button className="px-3 py-2 text-sm border border-slate-600 rounded-lg hover:bg-slate-700 transition" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-pressed={theme === 'light'}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      <main className="page-shell max-w-5xl mx-auto px-4 py-6 md:px-6">
        {currentView !== 'home' && (
          <div className="breadcrumb" aria-hidden={false}>
            <button className="crumb-home" onClick={() => setCurrentView('home')}>홈</button>
            <span className="crumb-sep">›</span>
            <span className="crumb-current">{viewLabels[currentView] || currentView}</span>
          </div>
        )}
        {currentView === 'home' && (
        <section className="hero-card widget-style bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/20 rounded-2xl p-8 md:p-10 mb-8">
          <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-semibold rounded-full mb-4">Didim v0.1</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-4">
            느린학습자를 위한<br />AI 학습 플래너
          </h1>
          <p className="max-w-2xl text-slate-300 leading-relaxed">
            iPhone 위젯처럼 직관적인 모바일 UI로, AI 질문 조립기와 안전망 지도를 함께 제공합니다. 장애인과 느린 학습자를 위한 맞춤형 접근성 설계를 포함합니다.
          </p>
          <div className="hero-grid mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-700 bg-slate-700/40 p-5">
              <strong className="text-cyan-300 text-sm uppercase tracking-[0.24em]">핵심 기능</strong>
              <p className="mt-3 text-slate-300">질문 조립기, 안전망 지도, 유니버설 접근성, RAG 기반 답변을 통합하여 사용자 맞춤형 학습 경험을 제공합니다.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-700/40 p-5">
              <strong className="text-cyan-300 text-sm uppercase tracking-[0.24em]">배포</strong>
              <p className="mt-3 text-slate-300">GitHub Pages 배포용 Vite + React + TypeScript 설정을 포함합니다. 향후 서버리스 API 연동으로 확장 가능합니다.</p>
            </div>
          </div>
        </section>
        )}

        {(currentView === 'home' || !currentView) && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-2xl border border-slate-700 bg-slate-800/80 p-6 hover:border-cyan-400/50 transition shadow-lg">
              <div className="text-3xl mb-3">🧩</div>
              <h3 className="text-xl font-semibold text-white mb-2">질문 조립기</h3>
              <p className="text-slate-300 text-sm">다중선택형 칩으로 프롬프트를 쉽게 조립하고 AI에게 명확한 질문을 전달합니다.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-800/80 p-6 hover:border-cyan-400/50 transition shadow-lg">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="text-xl font-semibold text-white mb-2">안전지도</h3>
              <p className="text-slate-300 text-sm">실시간 위치 추적과 위험 지역 오버레이로 생활 안전망을 시각화합니다.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-800/80 p-6 hover:border-cyan-400/50 transition shadow-lg">
              <div className="text-3xl mb-3">🎤</div>
              <h3 className="text-xl font-semibold text-white mb-2">음성 지원</h3>
              <p className="text-slate-300 text-sm">STT/TTS 기반 음성 인터페이스로 손-눈 사용이 어려운 상황에서도 접근성을 제공합니다.</p>
            </div>
          </div>
        )}

        {currentView === 'home' && (
          <section className="section-card firebase-section bg-slate-800 border border-slate-700 rounded-2xl p-8 mb-8">
            <h2>Firebase 사용자 연결</h2>
            <p>Firebase 인증으로 사용자 식별을 하고, 보호자와 상태를 공유할 수 있습니다.</p>
            {authLoading ? (
              <p>Firebase 로그인 중입니다...</p>
            ) : user ? (
              <div className="firebase-card">
                <p><strong>사용자 UID:</strong> {user.uid}</p>
                <p><strong>연결 코드:</strong> {profile?.connectionCode || '생성 중...'}</p>
                {profile?.connectionCode && (
                  <div className="qr-block">
                    <QRCodeCanvas value={`${window.location.origin}/?connectCode=${profile.connectionCode}`} size={120} />
                    <small>이 QR 코드를 보호자에게 보여주세요.</small>
                  </div>
                )}
                <div className="guardian-connect">
                  <label htmlFor="guardianCodeInput">보호자 코드 입력</label>
                  <input
                    id="guardianCodeInput"
                    type="text"
                    placeholder="보호자 연결 코드"
                    value={guardianCodeInput}
                    onChange={(event) => setGuardianCodeInput(event.target.value)}
                  />
                  <button type="button" onClick={handleConnectGuardian} className="primary-button">
                    보호자 연결하기
                  </button>
                </div>
                {guardianMessage && <div className="helper-text">{guardianMessage}</div>}
                <div className="connection-list">
                  <strong>연결된 보호자</strong>
                  {profile?.connections?.length ? (
                    <ul>
                      {profile.connections.map((conn) => (
                        <li key={conn.uid}>{conn.uid}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>아직 연결된 보호자가 없습니다.</p>
                  )}
                </div>
                <button type="button" onClick={handleSignOut} className="secondary-button">
                  로그아웃
                </button>
              </div>
            ) : (
              <p>Firebase 연결을 준비 중입니다. 잠시만 기다려주세요.</p>
            )}
          </section>
        )}

        {(currentView === 'home' || currentView === 'scaffold') && (
        <section className="section-card">
          <h2>06. 질문 조립기</h2>
          <p>
            무엇을, 왜, 어떤 상황에서, 어떻게, 누구를 위해서인지 직관적으로 채워서 AI가 쉽게 이해할 수 있는 프롬프트를 만듭니다.
          </p>
          <div className="scaffold-grid">
            {promptOptions.map((field) => (
              <label key={field.id} className="scaffold-card">
                <strong>{field.label}</strong>
                <input
                  type="text"
                  value={scaffoldValues[field.id]}
                  placeholder={field.placeholder}
                  onChange={(event) => updateScaffold(field.id, event.target.value)}
                />
                <small>{field.help}</small>
              </label>
            ))}
          </div>
          <div className="assembly-box" data-highlighted={highlighted === 1} tabIndex={0} onFocus={() => setHighlighted(1)} onBlur={() => setHighlighted(null)}>
            <div className="assembly-header">
              <h3>완성된 프롬프트</h3>
              <button type="button" className="copy-button" onClick={copyPrompt}>
                복사하기
              </button>
            </div>
            <pre>{assembledPrompt}</pre>
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
            <div className="dictionary-actions">
              <button type="button" onClick={handleFetchDictionary} className="primary-button" disabled={dictLoading}>
                {dictLoading ? '검색 중...' : '사전 검색 실행'}
              </button>
              <button type="button" onClick={requestDictionaryPlan} className="secondary-button">
                API 연동 계획 보기
              </button>
            </div>
            <div className="dictionary-result">
              <strong>사전 결과</strong>
              <pre>{dictionaryResult || '검색 결과가 여기에 표시됩니다.'}</pre>
            </div>
            <pre>{dictionaryPlan}</pre>
          </div>
          <div className="ai-panel">
            <div className="ai-panel-header">
              <h3>질문 조립기 기반 AI 답변</h3>
              <button type="button" onClick={handleGenerateAi} className="primary-button" disabled={aiLoading}>
                {aiLoading ? 'AI 생성 중...' : 'AI 답변 생성'}
              </button>
            </div>
            <pre>{aiResponse}</pre>
          </div>
          {apiError ? <div className="api-error">{apiError}</div> : null}
        </section>
        )}

        {(currentView === 'home' || currentView === 'map') && (
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
        )}

        {currentView === 'dashboard' && (
        <section className="section-card dashboard-section">
          <h2>활동 대시보드 / QR 스캔</h2>
          <p>활동 기록과 보호자 QR 연결 상태를 확인하고 실시간 스캔을 진행합니다.</p>
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>QR 코드 스캔</h3>
              <button type="button" onClick={() => setScanMode((prev) => !prev)} className="primary-button">
                {scanMode ? '스캔 중지' : 'QR 스캔 시작'}
              </button>
              {scanMode && <div id="qr-scanner" ref={scanContainerRef} className="qr-scanner" />}
              {scanError && <div className="api-error">{scanError}</div>}
              {scanResult && (
                <div className="helper-text">
                  스캔 결과: <pre>{scanResult}</pre>
                </div>
              )}
            </div>
            <div className="dashboard-card">
              <h3>활동 로그</h3>
              <p>{activityMessage}</p>
              {activityLogs.length ? (
                <ul className="activity-log-list">
                  {activityLogs.map((log) => (
                    <li key={log.id}>
                      <strong>{log.event}</strong>
                      <div>{JSON.stringify(log.details)}</div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>활동 로그가 없습니다.</p>
              )}
            </div>
          </div>
        </section>
        )}

        {(currentView === 'home' || currentView === 'accessibility') && (
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
        )}

        {(currentView === 'home' || currentView === 'ai') && (
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
        )}

        {(currentView === 'home' || currentView === 'data') && (
        <section className="section-card security-section">
          <h2>11. 데이터 보안 및 프라이버시</h2>
          <p>개인정보는 요약 리포트로 처리하며, 가디언 대시보드가 수집 정보 사용을 점검합니다.</p>
          <ul>
            <li>최소 수집 원칙 적용</li>
            <li>비식별화 요약 리포트</li>
            <li>부모/교사 검토용 가디언 대시보드 연동</li>
          </ul>
        </section>
        )}

        {(currentView === 'home' || currentView === 'data') && (
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
        )}
      </main>
      {miniBarVisible && miniBarRect && (
        <div
          className="mini-bar"
          style={{
            position: 'fixed',
            left: Math.min(window.innerWidth - 260, Math.max(8, miniBarRect.left)),
            top: Math.max(64, miniBarRect.bottom + 8),
            zIndex: 120,
          }}
          role="dialog"
          aria-label="단어 도구"
        >
          <div className="mini-bar-header">
            <strong>{selectedWord}</strong>
            <button onClick={closeMiniBar} aria-label="닫기">✕</button>
          </div>
          <div className="mini-bar-actions">
            <button onClick={miniExplain}>해설 보기</button>
            <button onClick={miniReplace}>대체어로 바꾸기</button>
            <button onClick={miniTts}>음성 듣기</button>
          </div>
          {wordExplanation && (
            <div className="mini-bar-explain">
              <pre>{wordExplanation}</pre>
            </div>
          )}
        </div>
      )}
      <footer className="footer-bar">
        <p>Didim AI 플래너 v0.1 — GitHub Pages 배포 준비 완료</p>
      </footer>
    </div>
  );
}

export default App;
