# 방화벽 로그 모니터링 시스템 개발 계획

## 📋 프로젝트 개요
- **프로젝트명**: 방화벽 로그 모니터링 웹 어드민 페이지
- **기술 스택**: Next.js, FastAPI, SQLite, Tailwind CSS
- **예상 개발 기간**: 약 15시간 (1시간 단위 feature 기준)

---

## Phase 1: 프로젝트 초기 설정 (2시간)

### Feature 1.1: 백엔드 프로젝트 초기 설정
- [ ] FastAPI 프로젝트 구조 생성
- [ ] requirements.txt 작성 (FastAPI, SQLAlchemy, Uvicorn 등)
- [ ] 디렉토리 구조 생성 (app/api, app/models, app/schemas, app/core)
- [ ] main.py 기본 설정 (CORS, 미들웨어 등)
- [ ] 환경 변수 설정 (.env 파일)

### Feature 1.2: 프론트엔드 프로젝트 초기 설정
- [ ] Next.js 프로젝트 생성 (App Router)
- [ ] Tailwind CSS 설정
- [ ] 기본 레이아웃 컴포넌트 작성
- [ ] API 클라이언트 유틸리티 작성 (lib/api.js)
- [ ] 환경 변수 설정 (.env.local)

---

## Phase 2: 데이터베이스 및 인증 (3시간)

### Feature 2.1: 데이터베이스 모델 설계 및 구현
- [ ] SQLite 데이터베이스 초기화 설정
- [ ] User 모델 정의 (사용자 정보)
- [ ] Log 모델 정의 (방화벽 로그)
- [ ] Alert 모델 정의 (알림 설정)
- [ ] 데이터베이스 마이그레이션 스크립트

### Feature 2.2: 사용자 인증 API 구현
- [ ] JWT 토큰 기반 인증 구현
- [ ] 회원가입 API (/api/v1/users/register)
- [ ] 로그인 API (/api/v1/users/login)
- [ ] 사용자 정보 조회 API (/api/v1/users/me)
- [ ] 비밀번호 암호화 처리

### Feature 2.3: 로그인/회원가입 UI 구현
- [ ] 로그인 페이지 작성 (app/login/page.js)
- [ ] 회원가입 페이지 작성 (app/register/page.js)
- [ ] 인증 상태 관리 구현
- [ ] 보호된 라우트 설정 (미들웨어)
- [ ] 로그아웃 기능 구현

---

## Phase 3: 방화벽 로그 관리 (4시간)

### Feature 3.1: 로그 CRUD API 구현
- [ ] 로그 생성 API (/api/v1/logs - POST)
- [ ] 로그 목록 조회 API (/api/v1/logs - GET)
- [ ] 로그 상세 조회 API (/api/v1/logs/{id} - GET)
- [ ] 로그 삭제 API (/api/v1/logs/{id} - DELETE)
- [ ] 페이지네이션 구현

### Feature 3.2: 로그 필터링 및 검색 API
- [ ] 날짜 범위 필터링
- [ ] IP 주소 검색
- [ ] 로그 레벨 필터링 (INFO, WARNING, ERROR, CRITICAL)
- [ ] 프로토콜 타입 필터링 (TCP, UDP, ICMP)
- [ ] 복합 검색 쿼리 구현

### Feature 3.3: 로그 목록 페이지 UI
- [ ] 로그 테이블 컴포넌트 작성
- [ ] 페이지네이션 UI 구현
- [ ] 검색 및 필터 입력 폼
- [ ] 로그 레벨별 색상 표시
- [ ] 반응형 디자인 적용

### Feature 3.4: 로그 상세 페이지 UI
- [ ] 로그 상세 정보 표시
- [ ] 관련 로그 목록 표시
- [ ] 로그 삭제 기능
- [ ] JSON 형식 로그 데이터 뷰어
- [ ] 이전/다음 로그 네비게이션

---

## Phase 4: 로그 분석 및 통계 (3시간)

### Feature 4.1: 로그 통계 API 구현
- [ ] 시간대별 로그 집계 API
- [ ] IP별 로그 집계 API
- [ ] 로그 레벨별 통계 API
- [ ] 프로토콜별 통계 API
- [ ] 일일/주간/월간 트렌드 API

### Feature 4.2: 대시보드 페이지 구현
- [ ] 대시보드 레이아웃 작성
- [ ] 주요 지표 카드 컴포넌트 (총 로그 수, 오늘의 로그 등)
- [ ] 실시간 로그 피드
- [ ] 최근 경고 로그 목록
- [ ] 빠른 필터링 버튼

### Feature 4.3: 로그 통계 시각화 UI
- [ ] 차트 라이브러리 설치 (recharts 또는 chart.js)
- [ ] 시간대별 로그 그래프
- [ ] 로그 레벨별 파이 차트
- [ ] 상위 IP 주소 막대 그래프
- [ ] 날짜 범위 선택 기능

---

## Phase 5: 알림 및 설정 (2시간)

### Feature 5.1: 알림 설정 API 구현
- [ ] 알림 규칙 생성 API (/api/v1/alerts - POST)
- [ ] 알림 규칙 목록 조회 API (/api/v1/alerts - GET)
- [ ] 알림 규칙 수정 API (/api/v1/alerts/{id} - PUT)
- [ ] 알림 규칙 삭제 API (/api/v1/alerts/{id} - DELETE)
- [ ] 알림 트리거 조건 로직 구현

### Feature 5.2: 알림 설정 UI 구현
- [ ] 알림 설정 페이지 작성
- [ ] 알림 규칙 추가 폼
- [ ] 알림 규칙 목록 테이블
- [ ] 알림 규칙 수정/삭제 기능
- [ ] 알림 활성화/비활성화 토글

---

## Phase 6: 실시간 모니터링 및 사용자 관리 (2시간)

### Feature 6.1: 실시간 로그 모니터링
- [ ] WebSocket 또는 Server-Sent Events 설정
- [ ] 실시간 로그 스트림 API
- [ ] 실시간 로그 표시 컴포넌트
- [ ] 자동 스크롤 및 일시정지 기능
- [ ] 실시간 알림 팝업

### Feature 6.2: 사용자 관리 기능
- [ ] 사용자 목록 조회 API (관리자 전용)
- [ ] 사용자 권한 관리 API
- [ ] 사용자 관리 페이지 UI
- [ ] 사용자 생성/수정/삭제 기능
- [ ] 권한 레벨 표시 (관리자, 일반 사용자)

---

## Phase 7: 마무리 및 배포 (1시간)

### Feature 7.1: 테스트 및 배포 준비
- [ ] API 엔드포인트 테스트
- [ ] UI 기능 테스트
- [ ] 보안 취약점 점검
- [ ] 프로덕션 빌드 설정
- [ ] README.md 작성 및 문서화

---

## 📌 우선순위 표시
- 🔴 **높음**: Phase 1, 2 (프로젝트 기반 설정 및 인증)
- 🟡 **중간**: Phase 3, 4 (핵심 기능 구현)
- 🟢 **낮음**: Phase 5, 6, 7 (부가 기능 및 최적화)

---

## 📝 참고 사항
- 각 feature는 약 1시간 개발 분량으로 설계됨
- 실제 개발 시 복잡도에 따라 시간 조정 가능
- 테스트 코드 작성은 각 feature 개발 시 함께 진행 권장
- Git 커밋은 feature 단위로 수행
