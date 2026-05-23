# Firestore 스키마 및 보안 규칙 초안

이 문서는 `didim` 앱에서 권장하는 Firestore 컬렉션/문서 스키마와 보안 규칙 초안을 제공합니다.

## 설계 원칙
- 최소 권한 원칙: 클라이언트는 자신과 관련된 데이터만 읽기/쓰기 가능해야 합니다.
- 가디언(guardian)은 연결된 학습자(learner)의 한정된 정보(요약 리포트, 알림, 설정)를 볼 수 있어야 합니다.
- 대화 원문은 기본적으로 저장하지 않습니다. 위험 탐지 시에는 익명화/요약본만 저장합니다.

## 컬렉션 구조

1) `users/{uid}`
- 필드:
  - `uid`: string (문서 id와 동일)
  - `role`: 'learner' | 'guardian'
  - `connectionCodes`: string[] (사용자-보호자 연결용 코드들) — 또는 `connectionCode` 하나
  - `connections`: string[] (연결된 상대의 `uid` 목록) — 권장: 문자열 배열(간단한 규칙 검사 용이)
  - `settings`: map { contrast: 'normal'|'high', fontSize: number, allowedFeatures: {...} }
  - `createdAt`, `lastSeenAt`: timestamp

예시 문서:
```json
{
  "uid": "user123",
  "role": "learner",
  "connectionCode": "AB12CD34",
  "connections": ["guardian456"],
  "settings": { "contrast": "high", "fontSize": 18 },
  "createdAt": "...",
  "lastSeenAt": "..."
}
```

2) `users/{uid}/activityLogs/{logId}`
- 필드:
  - `event`: string (예: 'connect_guardian', 'flagged_message')
  - `details`: map (가능하면 비식별화된 요약만 저장)
  - `createdAt`: timestamp

3) `publicIndexes/{dataset}/{docId}` (서버가 쓰는 RAG 메타데이터용)
- 서버에서만 쓰고 클라이언트는 접근 금지(보안 규칙으로 차단)

## 권장 보안 규칙 요약
- 학습자(learner)는 자신의 `users/{uid}` 및 `activityLogs`를 읽고 쓸 수 있음.
- 가디언(guardian)은 자신이 `connections`에 포함된 사용자의 한정된 `activityLogs`와 요약 리포트만 읽을 수 있음.
- RAG 인덱스, 임베딩 등은 클라이언트 접근 금지(서버 전용).

아래는 `firebase/firestore.rules`에 넣을 수 있는 규칙 초안입니다(이 규칙은 예시이며 프로젝트 요구에 맞춰 테스트 후 배포하세요).

---

## 주의 및 권장 변경
- 현재 코드에서 `connections`를 객체 배열로 저장하면 규칙에서 검사하기가 어렵습니다. 가능한 경우 `connections`는 guardian uid 문자열 배열로 변경하세요. (예: `connections: ['guardianUid1','guardianUid2']`)
- 민감 데이터(생년월일, 금융정보 등)는 절대 Firestore에 평문 저장 금지.
- 로그 보관 정책: 90일 보관 후 자동 삭제 권장.
