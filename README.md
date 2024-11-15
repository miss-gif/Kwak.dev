- react-router-dom
- tailwindcss
- postcss
- autoprefixer
- mui/material
- mui/icons-material

- react-select
- fuse.js
- framer-motion
- zod
- react-toastify
- react-hook-form
- @hookform/resolvers

- classnames

- prettier-plugin-tailwindcss

- zustand

- fast-xml-parser

https://www.data.go.kr/data/15012690/openapi.do

페이지 헤딩 h2 7xl 볼드
섹션 헤딩 h3 6xl 세미볼드

### 파이어베이스

#### 로그인/회원가입 구현

#### 데이터베이스 설계

##### Firestore 컬렉션 구조 정의

- posts: 게시글 정보 (제목, 내용, 작성자 ID, 카테고리, 태그, 작성일, 좋아요/싫어요 수 등)
- comments: 댓글 정보 (게시글 ID, 내용, 작성자 ID, 작성일, 상위 댓글 ID 등)
- notifications: 알림 정보 (관련 게시글 ID, 댓글 ID, 수신자 ID, 읽음 여부 등)
- users: 사용자 프로필 정보 (닉네임, 프로필 사진, 신고 횟수 등)

- Firestore 규칙 설정: Firestore의 읽기/쓰기 권한을 게시글 작성자 및 특정 권한이 있는 사용자로 제한하도록 규칙을 설정합니다.

#### 게시글 CRUD (쓰기, 수정, 삭제) 기능 개발

게시글 작성: 사용자 인증을 확인하고, 작성된 게시글을 posts 컬렉션에 저장하는 기능을 구현합니다.
게시글 수정: 해당 게시글의 작성자만 게시글을 수정할 수 있도록 Firestore 규칙과 UI를 구성합니다.
게시글 삭제: 작성자가 게시글을 삭제하면 관련된 모든 댓글도 함께 삭제되도록 Firebase Cloud Functions를 사용할 수 있습니다.

#### 댓글 CRUD 및 답글 기능 개발

댓글 작성: 특정 게시글에 댓글을 작성하고 comments 컬렉션에 저장합니다.
댓글 수정 및 삭제: 작성자만 자신의 댓글을 수정하거나 삭제할 수 있도록 Firestore 규칙을 설정합니다.
답글 기능: 댓글에 대한 답글을 작성할 때, 부모 댓글 ID를 저장해 계층 구조를 구성합니다. UI에서 트리 형태로 댓글과 답글을 표시합니다.

#### 알림 기능 구현 (Firebase Cloud Functions 사용)

새로운 댓글 알림: 새로운 댓글이 추가될 때 Firebase Cloud Functions를 트리거하여 게시글 작성자에게 실시간 알림을 생성합니다.
알림 실시간 업데이트: Firestore notifications 컬렉션을 구독하여 사용자가 새 알림을 받으면 UI에 표시됩니다.

#### 카테고리 및 태그 기능

카테고리 및 태그 UI 구성: 게시글 작성 시 카테고리 및 태그를 선택할 수 있는 UI를 만듭니다.
데이터 구조 설계: 각 게시글 문서에 category 및 tags 필드를 추가하여 게시글을 필터링할 수 있도록 합니다.
카테고리 및 태그 필터 기능 구현: Firestore 쿼리를 사용해 카테고리 및 태그로 필터링할 수 있도록 합니다.

#### 검색 기능

Firestore 쿼리 사용: Firestore의 쿼리 기능을 활용해 제목 또는 내용에서 특정 키워드를 검색할 수 있도록 구현합니다.
전문 검색 서비스 고려: Firestore의 검색 기능이 제한적이므로, 복잡한 검색 기능이 필요할 경우 Algolia와 같은 외부 검색 서비스를 사용할 수 있습니다.

#### 페이징 및 정렬

Firestore 페이징 구현: Firestore의 limit와 startAfter 메서드를 사용해 무한 스크롤 또는 페이지네이션을 구현합니다.
정렬 기능: Firestore 쿼리의 orderBy를 이용해 게시글을 최신순, 인기순으로 정렬할 수 있도록 합니다.

#### 좋아요/싫어요 기능

좋아요/싫어요 버튼 구현: 게시글에 좋아요/싫어요 버튼을 추가하고 사용자 ID를 기준으로 각 게시글에 좋아요/싫어요 상태를 저장합니다.
트랜잭션 사용: Firestore의 트랜잭션 기능을 사용해 다수의 사용자가 동시에 좋아요/싫어요를 클릭해도 데이터가 정확하게 업데이트되도록 합니다.

#### 신고 기능

신고 버튼 구현: 게시글 및 댓글에 신고 버튼을 추가하여 특정 사용자가 반복적으로 부적절한 내용을 게시할 경우, Cloud Functions를 사용해 자동으로 차단하도록 할 수 있습니다.
신고 횟수 저장 및 관리자 대시보드 구성: users 컬렉션에 신고 횟수를 기록하고, 일정 횟수 이상 신고된 사용자는 관리자 대시보드에서 관리할 수 있도록 구성합니다.
