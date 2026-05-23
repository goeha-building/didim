import React, { useState } from 'react';
import ChipGroup from './ChipGroup';
import PromptPreview from './PromptPreview';

interface PromptBuilderProps {
  onSend: (prompt: string) => void;
}

const PromptBuilder: React.FC<PromptBuilderProps> = ({ onSend }) => {
  const [who, setWho] = useState<string | null>(null);
  const [where, setWhere] = useState<string | null>(null);
  const [what, setWhat] = useState<string | null>(null);

  const assembled = [who, where, what].filter(Boolean).join(' ');

  return (
    <section aria-label="Prompt Builder">
      <ChipGroup label="누구에게" onSelect={setWho} options={["학생","보호자","교사"]} />
      <ChipGroup label="어디서" onSelect={setWhere} options={["집","학교","외부"]} />
      <ChipGroup label="무엇을" onSelect={setWhat} options={["설명","도움 요청","요약"]} />
      <PromptPreview prompt={assembled || ''} />
      <div style={{marginTop:8}}>
        <button onClick={() => onSend(assembled)} disabled={!assembled}>실행</button>
      </div>
    </section>
  );
};

export default PromptBuilder;
