import React from 'react';

interface SafetyMapProps {
  center?: { lat:number, lng:number };
}

const SafetyMap: React.FC<SafetyMapProps> = ({ center }) => {
  return (
    <div className="safety-map" style={{height:300,background:'#eef'}}>
      <p>지도 컴포넌트 자리표시자 (center: {center?.lat},{center?.lng})</p>
    </div>
  );
};

export default SafetyMap;
