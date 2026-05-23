import React from 'react';

interface GuardianDashboardProps {
  guardianId: string;
}

const GuardianDashboard: React.FC<GuardianDashboardProps> = ({ guardianId }) => {
  return (
    <section aria-label="Guardian Dashboard">
      <h3>가디언 대시보드</h3>
      <p>ID: {guardianId}</p>
      <div>연결된 사용자 목록, 알림 설정, 원격 제어 토글 등을 여기에 표시합니다.</div>
    </section>
  );
};

export default GuardianDashboard;
