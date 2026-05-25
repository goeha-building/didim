import { useEffect, useRef, useState } from 'react';
import { generateAiResponse } from '../services/api';

type ChatMessage = {
  role: 'user' | 'assistant';
  text: string;
};

const systemInstruction = `너는 디딤돌 앱의 AI 도우미다.
- 초등 고학년도 이해할 수 있는 쉬운 한국어를 쓴다.
- 한 답변에는 핵심 3단계만 먼저 말한다.
- 법률, 계약, 돈, 안전 질문은 "확인해야 할 출처"를 함께 말한다.
- 사용자가 위험한 요구를 받았을 가능성이 있으면 혼자 결정하지 말고 보호자/경찰/공식 기관 확인을 권한다.`;

export default function GeminiChat() {
  const [input, setInput] = useState('계약서에 서명하라고 하는데 무엇을 봐야 해?');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      text: '안녕하세요. 어려운 말은 쉽게 바꾸고, 해야 할 일은 작은 순서로 나눠서 알려드릴게요.',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, loading]);

  const handleSendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setLoading(true);

    try {
      const responseText = await generateAiResponse(`${systemInstruction}\n\n사용자 질문: ${trimmed}`);
      setMessages((prev) => [...prev, { role: 'assistant', text: responseText }]);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: error?.message || '답변을 가져오지 못했습니다. API 키와 서버 프록시 설정을 확인해주세요.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gemini-chat-card">
      <div className="chat-header">
        <h3>팩트체크 AI 대화</h3>
        <p>계약, 돈, 안전 질문은 쉬운 답변과 확인 출처를 함께 보여줍니다.</p>
      </div>
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={`${msg.role}-${idx}`} className={`chat-bubble ${msg.role === 'user' ? 'chat-user' : 'chat-assistant'}`}>
            <p>{msg.text}</p>
          </div>
        ))}
        {loading && <div className="chat-bubble chat-assistant"><p>답변을 만들고 있습니다...</p></div>}
        <div ref={messageEndRef} />
      </div>
      <div className="chat-controls">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => event.key === 'Enter' && handleSendMessage()}
          placeholder="질문을 짧게 입력하세요"
          className="chat-input"
          disabled={loading}
        />
        <button type="button" onClick={handleSendMessage} disabled={loading || !input.trim()}>
          {loading ? '생성 중' : '전송'}
        </button>
      </div>
    </div>
  );
}
