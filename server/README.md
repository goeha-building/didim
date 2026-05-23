# didim Server (Scaffold)

간단한 Express + TypeScript 서버 스캐폴드입니다. 서버는 민감 키를 보관하고 AI/공공데이터/이미지 API를 프록시합니다.

로컬 개발

1. 환경변수 설정(`.env` 또는 CI secrets):
```
GOOGLE_APPLICATION_CREDENTIALS_JSON='{"type":...,"project_id":...,"private_key":...}'
PORT=8080
```
2. 의존성 설치
```bash
cd server
npm install
npm run dev
```

참고: 실제 배포 시 서비스 계정 JSON은 GCP Secret Manager 또는 GitHub Actions Secret에 보관하세요.
