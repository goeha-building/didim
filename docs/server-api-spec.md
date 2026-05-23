# Server API 명세 및 Express 스캐폴드 안내

다음은 프로젝트에서 권장하는 서버(Express/TypeScript) 엔드포인트 명세입니다. 서버는 모든 민감 키(Gemini, OpenAI, Pinecone, Twilio 등)를 보관하고 클라이언트 요청을 프록시/정제합니다.

## 공통
- 모든 보호된 엔드포인트는 Firebase ID Token을 검증합니다(헤더: `Authorization: Bearer <idToken>`).
- 응답은 JSON 형식이며 에러는 적절한 HTTP 상태 코드로 반환합니다.

## 엔드포인트 목록

1. POST `/api/prompt/refine`
  - 설명: 조립된 프롬프트(또는 사용자가 입력한 초안)를 Gemini에 보내어 정제된 프롬프트와 난이도 조정 결과를 반환.
  - 바디: { text: string, level?: 'easy'|'normal'|'hard' }
  - 권한: 인증 필요

2. POST `/api/rag/query`
  - 설명: 질의에 대해 Vector DB에서 상위 문서 검색 → Gemini에 문서 포함 프롬프트로 전달 → 응답 및 출처 목록 반환
  - 바디: { q: string, topK?: number }
  - 권한: 인증 필요

3. POST `/api/image/generate`
  - 설명: DALL·E 또는 대체 이미지 API 호출, 결과를 Cloud Storage에 저장 후 서명된 URL 반환
  - 바디: { prompt: string, style?: string }
  - 권한: 인증 필요

4. GET `/api/publicdata/safety?bbox=`
  - 설명: 행안부/경찰청 데이터 집계 후 GeoJSON 반환
  - 권한: 일부 공개(권한 필요 시 토큰 검사)

5. GET `/api/dictionary/define?word=`
  - 설명: 표준국어대사전 프록시(캐시 적용)
  - 권한: 없음(요청 빈도 제한 필요)

6. POST `/api/alerts/ingest`
  - 설명: 클라이언트가 감지한 이벤트(위험 키워드 등)를 서버로 전달하면 리스크 분류, 익명화 요약 후 Firestore에 저장하고 가디언에게 알림 전송
  - 바디: { userId: string, textSnippet: string, metadata?: {} }
  - 권한: 인증 필요

## 간단한 Express 스켈레톤 설명
- 미들웨어: `express.json()`, `cors()`, `verifyFirebaseIdToken`(토큰 검증), `rateLimiter`
- 서비스 레이어: `aiService` (Gemini wrapper), `vectorService` (Pinecone wrapper), `imageService` (OpenAI DALL·E), `publicDataService`(행안부/경찰청)

---

아래는 간단한 서버 스캐폴드(예제) 위치 및 사용 방법입니다: `server/README.md` 참조.
