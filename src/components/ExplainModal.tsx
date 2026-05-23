import React from 'react';

interface ExplainModalProps {
  open: boolean;
  word?: string;
  onClose: () => void;
  onGenerateImage?: (prompt: string) => void;
}

const ExplainModal: React.FC<ExplainModalProps> = ({ open, word, onClose, onGenerateImage }) => {
  if (!open) return null;
  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal-content">
        <h3>{word} — 쉬운 설명</h3>
        <p>간단한 뜻과 마이크로 스텝 안내를 여기에 표시합니다.</p>
        <div style={{display:'flex',gap:8}}>
          <button onClick={() => onGenerateImage?.(`Illustration of ${word}`)}>삽화 생성</button>
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
};

export default ExplainModal;
