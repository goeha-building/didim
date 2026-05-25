// src/components/MapView.tsx
import React, { useEffect, useRef, useState } from 'react';
import { initMap, getCurrentLocation } from '../services/map';

const MapView: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // Kakao Map SDK가 로드되었는지 확인 후 지도 초기화
    if (window.kakao && window.kakao.maps && mapContainerRef.current) {
      try {
        const mapInstance = initMap(mapContainerRef.current);
        setMapLoaded(true);

        // 현재 위치 가져오기
        getCurrentLocation(mapInstance)
          .then(() => console.log("현재 위치 표시 완료"))
          .catch((error) => setErrorMessage(error.message));
      } catch (e: any) {
        setErrorMessage(e.message);
      }
    } else {
      // SDK가 아직 로드되지 않았다면, 로드 이벤트를 기다림
      const handleKakaoMapLoad = () => {
        if (mapContainerRef.current) {
          try {
            const mapInstance = initMap(mapContainerRef.current);
            setMapLoaded(true);
            getCurrentLocation(mapInstance)
              .then(() => console.log("현재 위치 표시 완료"))
              .catch((error) => setErrorMessage(error.message));
          } catch (e: any) {
            setErrorMessage(e.message);
          }
        }
      };
      // window.kakao.maps.load 콜백은 main.tsx에서 처리하므로, 여기서는 단순히 존재 여부만 확인
      if (window.kakao && window.kakao.maps && window.kakao.maps.load) {
        window.kakao.maps.load(handleKakaoMapLoad);
      } else {
        setErrorMessage("카카오 지도 SDK 로드 실패 또는 준비 안됨. VITE_KAKAO_MAP_KEY를 확인하세요.");
      }
    }
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '500px', borderRadius: '8px', overflow: 'hidden' }}>
      <div
        id="kakao-map-container"
        ref={mapContainerRef}
        style={{ width: '100%', height: '100%' }}
      >
        {!mapLoaded && !errorMessage && (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            지도 로딩 중...
          </div>
        )}
        {errorMessage && (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            오류: {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default MapView;