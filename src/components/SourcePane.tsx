import React from 'react';

interface SourcePaneProps {
  sources: Array<{title?:string, snippet?:string, url?:string}>;
}

const SourcePane: React.FC<SourcePaneProps> = ({ sources }) => {
  if (!sources || sources.length === 0) return null;
  return (
    <aside className="source-pane">
      <h4>출처</h4>
      <ul>
        {sources.map((s, i) => (
          <li key={i}>
            <strong>{s.title}</strong>
            <div>{s.snippet}</div>
            {s.url && <a href={s.url} target="_blank" rel="noreferrer">원문보기</a>}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SourcePane;
