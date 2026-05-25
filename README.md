# Didim AI 학습 플래너

느린학습자를 위한 모바일 우선 React TypeScript 웹앱입니다. iPhone 위젯 스타일 UI와 유니버셜 디자인을 기반으로 학습 안내, 안전망 지도, 접근성 기능, AI 기술 로직을 통합합니다.

## 주요 기능

- **질문 조립기**: 비계 설정(Scaffolding) 기반의 조립식 프롬프트 가이드 UI
- **표준국어대사전 API 연동 계획**: 사전 검색어 기반으로 프롬프트 보강 계획 표시
- **안전망 지도**: 경찰청/생활안전 데이터를 활용한 위험 지역 및 세이프존 매핑 UI
- **유니버셜 접근성**: Voice-Call TTS 인터페이스, 하이라이트 터치-풀이 기능
- **AI 기술 로직 설명**: RAG 시스템, 멀티모달 이미지 보조 생성, 데이터 보안/프라이버시
- **공공데이터 리스트**: 사용된 API 및 데이터셋 명칭과 출처 정리

## 기술 스택

- React 18
- TypeScript
- Vite
- GitHub Pages 배포 지원

## 실행 방법

```bash
npm install
npm run dev
```

## GitHub Pages 배포

1. GitHub에 새 저장소를 만듭니다. 예: `didim-mobile-ai-planner`
2. 로컬 프로젝트를 git으로 초기화하고 원격 저장소를 연결합니다.

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

3. `package.json`에 이미 `deploy` 스크립트가 포함되어 있습니다.

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "deploy": "npm run build && gh-pages -d dist"
}
```

4. `gh-pages` 모듈을 사용해 배포합니다.

```bash
npm run deploy
```

5. GitHub 저장소의 `Settings > Pages`에서 배포 브랜치가 `gh-pages`로 설정되었는지 확인합니다.

### 추가 설정
- 프로젝트 페이지를 사용하는 경우 `homepage` 항목을 `package.json`에 추가할 수 있습니다:

```json
"homepage": "https://<your-username>.github.io/<your-repo>"
```

- 사용자 또는 조직 페이지(`<your-username>.github.io`)인 경우 `homepage`는 생략하거나 `"homepage": "https://<your-username>.github.io"`로 설정합니다.
- `vite.config.ts`는 이미 `base: './'`로 설정돼 있어 상대 경로 배포에 적합합니다.

## API 키 설정

앱은 다음 환경 변수를 사용하여 API 키를 로드합니다.

```bash
VITE_GEMINI_API_KEY=YOUR_GOOGLE_GEMINI_API_KEY
VITE_GEMINI_MODEL=chat-bison-001
VITE_KOREAN_DICT_KEY=YOUR_KOREAN_DICTIONARY_API_KEY
VITE_KOREAN_DICT_CERTKEY=YOUR_OPTIONAL_DICT_CERTKEY
```

`.env` 파일을 프로젝트 루트에 만들어서 설정하세요.

```bash
cp .env.example .env
```

`VITE_KOREAN_DICT_CERTKEY`는 필요할 경우 추가합니다.

## 다음 기능 요구 사항: 위험지역 지도 및 알림

이 프로젝트의 다음 단계는 다음 공식 기관 공공데이터를 활용한 위험 지역 맵핑과 PWA 기반 알림입니다.

### 1) 지도 기반 공간 데이터
- **VWorld (국토교통부 / 국토지리정보원)**
  - 지도 타일 서비스
  - 좌표 변환 및 주소 검색
  - 공식 한국 지도 API로, 국민들이 사용할 수 있는 정부 지원 지도 플랫폼입니다.
  - 관련 문서: VWorld Open API

### 2) 경찰청 / 공공데이터포털 위험지역 데이터
- **경찰청 공공데이터**
  - `112 신고 현황`, `범죄 발생 위치`, `치안 정보` 등 위치 기반 위험 지역 데이터를 제공합니다.
  - 공공데이터포털에서 제공하는 공식 경찰청 OpenAPI를 사용해야 합니다.
  - 예시 데이터셋: `경찰청 112 신고접수 정보`, `경찰청 범죄발생 현황`, `경찰청 치안상황 지도` 등.

### 3) 보완 가능한 정부 안전 데이터
- **행정안전부 생활안전지도 / 재난안전지도**
  - 세이프존, 취약지역, 안전시설 위치 등을 추가로 보강할 수 있는 공공데이터입니다.
  - 국민 안전과 관련된 공식 정부 데이터로, 경찰청 정보와 함께 사용하면 경로 위험 평가가 강화됩니다.

### 4) PWA 및 알림 기술 도입
- 이미 앱에 PWA 기본 요소를 추가했습니다:
  - `public/manifest.webmanifest`
  - `public/sw.js` 서비스 워커
  - `index.html`에 매니페스트 연결
  - `src/main.tsx`에서 서비스 워커 등록
- 알림 기능 구성 요소
  - 브라우저 `Notification API`를 통해 위치 기반 경고를 표시
  - 브라우저 `Geolocation API`로 사용자 위치를 추적
  - 지오펜싱은 네이티브 API 지원이 제한적이므로, 앱에서 위험 영역 폴리곤/버퍼와 현재 위치를 직접 비교하는 방식으로 구현합니다.
  - 추가로 푸시 알림이 필요하면 `Push API` / 서버 푸시 엔드포인트를 확장할 수 있습니다.

### 5) 구현 순서 제안
1. 지도 화면 구성: VWorld 지도 타일 + 위험 지역 오버레이
2. 경찰청 위험지역 데이터 수집 및 좌표/폴리곤 변환
3. 위치 추적 및 영역 진입 감지(클라이언트 측 폴리곤 포함)
4. 진입 시 `Notification.requestPermission()`과 `new Notification()`으로 알림 표시
5. PWA 설치 지원과 오프라인 캐시를 다듬어 모바일 앱처럼 동작하도록 개선

## 배포 후 확인
- 배포가 완료되면 `https://<your-username>.github.io/<your-repo>/`로 접속하여 앱이 작동하는지 확인합니다.

## 구현 노트

- `src/App.tsx`에 모바일 우선 인터페이스와 주요 섹션을 구성했습니다.
- `src/styles.css`는 iPhone 스타일 위젯 디자인과 반응형 레이아웃을 제공합니다.
- 리드미는 기능과 배포 지침을 한눈에 볼 수 있도록 정리했습니다.
