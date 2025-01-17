const skills = [
  {
    img: "../../assets/skill_icons/html.svg",
    id: 1,
    name: "HTML",
    percentage: 88,
    description: [
      "W3C 웹 표준 태그 작성 가능",
      "시맨틱 태그와 ARIA를 사용한 접근성 구현 가능",
      "meta 태그 활용 및 SEO 최적화 마크업 가능",
    ],
  },
  {
    img: "../../assets/skill_icons/css.svg",
    id: 2,
    name: "CSS",
    percentage: 92,
    description: [
      "Flex와 Grid를 활용한 레이아웃 구현 가능",
      "반응형 디자인 구현 가능",
      "CSS 우선순위 이해 및 활용 가능",
      "Transitions & Animations 활용 가능",
      "CSS Variables를 사용한 동적 스타일링 가능",
    ],
  },
  {
    img: "../../assets/skill_icons/javascript.svg",
    id: 3,
    name: "JavaScript",
    percentage: 85,
    description: [
      "ES6+ 문법에 대한 이해 및 활용 가능",
      "Promises, async/await 활용 가능",
    ],
  },
  {
    img: "../../assets/skill_icons/react.svg",
    id: 4,
    name: "React",
    percentage: 80,
    description: [
      "React Hooks 사용 가능",
      "커스텀 훅 개발 가능",
      "컴포넌트 성능 최적화 가능",
    ],
  },
  {
    img: "../../assets/skill_icons/typescript.svg",
    id: 5,
    name: "TypeScript",
    percentage: 30,
    description: [
      "기본 타입 및 배열, 객체의 타입 지정 가능.",
      "함수 파라미터와 리턴 타입 지정 가능",
      "타입 추론(Type Inference)을 이해하고 활용 가능",
      "인터페이스와 Type Alias를 사용한 타입 구조 정의 가능",
    ],
  },
  {
    img: "../../assets/skill_icons/redux.svg",
    id: 6,
    name: "Redux",
    percentage: 50,
    description: [
      "Redux Toolkit을 사용하여 상태 관리 가능",
      "간단한 비동기 로직 관리 가능",
    ],
  },
  {
    img: "../../assets/skill_icons/zustand.svg",
    id: 7,
    name: "Zustand",
    percentage: 40,
    description: [
      "간단한 상태 관리 기능 구현 가능",
      "최소한의 코드로 상태 관리 구성 가능",
    ],
  },
  {
    img: "../../assets/skill_icons/axios.svg",
    id: 8,
    name: "Axios",
    percentage: 60,
    description: [
      "API 요청 및 응답 처리 가능",
      "요청 설정(예: baseURL, timeout) 및 에러 핸들링 가능",
      "요청/응답 인터셉터를 설정 가능",
      "쿼리 파라미터 및 헤더를 설정 가능",
    ],
  },
  {
    img: "../../assets/skill_icons/react-query.svg",
    id: 9,
    name: "React Query",
    percentage: 50,
    description: [
      "간단한 데이터 패칭 및 캐싱 처리 가능",
      "쿼리와 뮤테이션을 사용한 데이터 관리 가능",
    ],
  },
  {
    img: "../../assets/skill_icons/figma-Light.svg",
    id: 10,
    name: "Figma",
    percentage: 50,
    description: [
      "디자이너와의 협업 가능",
      "간단한 UI 디자인 및 프로토타이핑 가능",
    ],
  },
  {
    img: "../../assets/skill_icons/sass.svg",
    id: 11,
    name: "Sass",
    percentage: 83,
    description: [
      "중첩을 활용한 구조적 스타일링 가능",
      "믹스인(Mixin)을 통한 코드 재사용 가능",
      "확장(Extend)과 상속을 활용한 스타일 확장 가능",
      "변수를 사용한 일관된 스타일 관리 가능",
      "조건문을 활용한 동적 스타일 적용 가능",
    ],
  },
  {
    img: "../../assets/skill_icons/emotion-Light.svg",
    id: 12,
    name: "Emotion",
    percentage: 72,
    description: [
      "CSS-in-JS 스타일링 적용 가능",
      "동적 스타일링 및 간단한 테마 관리 가능",
    ],
  },
  {
    img: "../../assets/skill_icons/swagger.svg",
    id: 13,
    name: "Swagger",
    percentage: 50,
    description: [
      "Swagger UI를 통해 API 문서 확인 및 테스트 가능",
      "요청을 보내고 응답을 검토하여 API의 동작 가능",
    ],
  },
  {
    img: "../../assets/skill_icons/materialUI-Light.svg",
    id: 14,
    name: "Material UI",
    percentage: 72,
    description: [
      "컴포넌트 활용 및 스타일링 가능",
      "테마 설정 및 커스터마이징 가능.",
    ],
  },
  {
    img: "../../assets/skill_icons/react-router.svg",
    id: 15,
    name: "React Router",
    percentage: 68,
    description: [
      "라우팅 설정 및 관리 가능",
      "동적 라우팅(파리미터, 쿼리스트링) 가능",
      "코드 스플리팅 및 라우터 기반의 코드 로딩 가능",
    ],
  },
  {
    img: "../../assets/skill_icons/tailwindCSS-Light.svg",
    id: 16,
    name: "Tailwind CSS",
    percentage: 68,
    description: [
      "신속한 스타일링 및 컴포넌트 기반 설계 가능",
      "반응형 디자인과 커스터마이징을 적용 가능",
    ],
  },
  {
    img: "../../assets/skill_icons/firebase-Light.svg",
    id: 17,
    name: "Firebase",
    percentage: 68,
    description: [
      "실시간 데이터베이스 및 Firestore 활용 가능",
      "인증(Authentication) 기능을 통한 사용자 관리 가능",
      "Firebase Hosting을 이용한 애플리케이션 배포 가능",
    ],
  },
  {
    img: "../../assets/skill_icons/react-hook-form.svg",
    id: 18,
    name: "React Hook Form",
    percentage: 68,
    description: [
      "효율적인 폼 상태 관리 가능",
      "커스텀 입력 컴포넌트와 통합 가능",
      "성능 최적화를 위한 렌더링 최소화 가능",
      "비동기 유효성 검사 및 에러 처리 가능",
    ],
  },
  {
    img: "../../assets/skill_icons/zod.svg",
    id: 19,
    name: "Zod",
    percentage: 68,
    description: ["간단한 API로 데이터 유효성 검증 및 타입 추론 가능"],
  },
];

export default skills;
