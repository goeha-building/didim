import React from 'react';

interface TextWithAnnotationsProps {
  text: string;
  onLongPress?: (word: string, index: number) => void;
}

const TextWithAnnotations: React.FC<TextWithAnnotationsProps> = ({ text, onLongPress }) => {
  const words = text.split(/(\s+)/);
  return (
    <p>
      {words.map((w, i) => (
        <span
          key={i}
          onContextMenu={(e) => { e.preventDefault(); onLongPress?.(w, i); }}
          style={{padding:2, borderRadius:4}}
        >
          {w}
        </span>
      ))}
    </p>
  );
};

export default TextWithAnnotations;
