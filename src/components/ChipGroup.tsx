import React from 'react';

interface ChipGroupProps {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
}

const ChipGroup: React.FC<ChipGroupProps> = ({ label, options, onSelect }) => {
  return (
    <div className="chip-group" aria-label={label}>
      <strong>{label}</strong>
      <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:6}}>
        {options.map((o) => (
          <button key={o} onClick={() => onSelect(o)} className="chip">{o}</button>
        ))}
      </div>
    </div>
  );
};

export default ChipGroup;
