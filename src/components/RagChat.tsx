import React, { useState } from 'react';
import SourcePane from './SourcePane';

interface RagChatProps {
  userId: string;
}

const RagChat: React.FC<RagChatProps> = ({ userId }) => {
  const [messages, setMessages] = useState<Array<{id:string,role:string, text:string}>>([]);
  const [input, setInput] = useState('');
  const [sources, setSources] = useState<any[]>([]);

  const send = async () => {
    // TODO: call /api/rag/query then append messages and sources
    setMessages((m) => [...m, { id: Date.now().toString(), role: 'user', text: input }]);
    setInput('');
  };

  return (
    <section aria-label="RAG Chat">
      <div className="chat-window">
        {messages.map((m) => (
          <div key={m.id} className={`msg ${m.role}`}>{m.text}</div>
        ))}
      </div>
      <div style={{display:'flex',gap:8}}>
        <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="질문을 입력하세요" />
        <button onClick={send}>전송</button>
      </div>
      <SourcePane sources={sources} />
    </section>
  );
};

export default RagChat;
