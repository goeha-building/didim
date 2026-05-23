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

### 배포 후 확인
- 배포가 완료되면 `https://<your-username>.github.io/<your-repo>/`로 접속하여 앱이 작동하는지 확인합니다.

## 구현 노트

- `src/App.tsx`에 모바일 우선 인터페이스와 주요 섹션을 구성했습니다.
- `src/styles.css`는 iPhone 스타일 위젯 디자인과 반응형 레이아웃을 제공합니다.
- 리드미는 기능과 배포 지침을 한눈에 볼 수 있도록 정리했습니다.
