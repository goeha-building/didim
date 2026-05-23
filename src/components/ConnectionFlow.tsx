import React from 'react';

interface ConnectionFlowProps {
  onScanCode?: (code: string) => void;
}

const ConnectionFlow: React.FC<ConnectionFlowProps> = ({ onScanCode }) => {
  return (
    <div>
      <h4>연결 흐름</h4>
      <p>QR 코드 생성/스캔 또는 코드 입력으로 보호자-사용자 연결을 지원합니다.</p>
      <button onClick={() => onScanCode?.('SAMPLECODE')}>테스트 연결</button>
    </div>
  );
};

export default ConnectionFlow;
