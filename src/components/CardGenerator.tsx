import React from 'react';

interface CardGeneratorProps {
  topic?: string;
  level?: 'easy'|'normal'|'hard';
  onGenerate?: (cards: any[]) => void;
}

const CardGenerator: React.FC<CardGeneratorProps> = ({ topic, level='easy', onGenerate }) => {
  const generate = async () => {
    // TODO: call /api/card/generate
    const sample = [{title: '샘플 카드', body: '요약 내용'}];
    onGenerate?.(sample);
  };
  return (
    <div>
      <div>주제: {topic}</div>
      <button onClick={generate}>카드 생성</button>
    </div>
  );
};

export default CardGenerator;
