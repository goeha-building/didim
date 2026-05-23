import React from 'react';

interface PromptPreviewProps {
  prompt: string;
}

const PromptPreview: React.FC<PromptPreviewProps> = ({ prompt }) => {
  return (
    <div className="prompt-preview" style={{padding:8,border:'1px solid var(--muted)'}}>
      <label>미리보기</label>
      <div style={{marginTop:6}}>{prompt || <em>칩을 선택해 프롬프트를 만드세요</em>}</div>
    </div>
  );
};

export default PromptPreview;
