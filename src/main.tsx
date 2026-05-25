import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

// Kakao Map SDK를 동적으로 로드하는 함수
function loadKakaoMapScript() {
  const KAKAO_MAP_KEY = import.meta.env.VITE_KAKAO_MAP_KEY;
  if (!KAKAO_MAP_KEY) {
    console.warn("VITE_KAKAO_MAP_KEY 환경 변수가 설정되지 않았습니다. 카카오 지도를 로드할 수 없습니다.");
    return;
  }

  const script = document.createElement('script');
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_KEY}&autoload=false`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    // Kakao Map SDK 로드가 완료되면 지도 라이브러리를 초기화
    window.kakao.maps.load(() => {
      console.log('카카오 지도 SDK 로드 및 초기화 완료');
    });
  };

  script.onerror = (error) => {
    console.error('카카오 지도 SDK 로드 실패:', error);
  };
}

// 앱 시작 시 Kakao Map SDK 로드
loadKakaoMapScript();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(`${import.meta.env.BASE_URL}sw.js`)
      .then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch((error) => {
        console.error('ServiceWorker registration failed:', error);
      });
  });
}
