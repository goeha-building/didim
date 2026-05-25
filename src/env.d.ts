/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_KAKAO_MAP_KEY?: string;
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_FIREBASE_APP_ID: string;
  readonly VITE_FIREBASE_MEASUREMENT_ID?: string;
  readonly VITE_CLOUDFLARE_WORKER_URL?: string; // Cloudflare Worker URL 추가
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Kakao Map SDK 전역 객체 타입 선언
declare global {
  interface Window {
    kakao: any; // 더 상세한 타입 정의가 필요할 수 있지만, 일단 any로 처리
  }
}

