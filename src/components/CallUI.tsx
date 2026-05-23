import React from 'react';

interface CallUIProps {
  caller?: string;
  onAccept?: () => void;
  onDecline?: () => void;
}

const CallUI: React.FC<CallUIProps> = ({ caller='알림', onAccept, onDecline }) => {
  return (
    <div className="call-ui" role="dialog" aria-label="Incoming call">
      <div className="call-card">
        <h3>{caller}</h3>
        <div style={{display:'flex',gap:8}}>
          <button onClick={onAccept}>수락</button>
          <button onClick={onDecline}>거절</button>
        </div>
      </div>
    </div>
  );
};

export default CallUI;
