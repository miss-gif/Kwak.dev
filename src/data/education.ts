import logo1 from "../assets/images/about/logo1.png";
import logo2 from "../assets/images/about/logo2.png";

const education = [
  {
    institution: "대구가톨릭대학교(4년제)",
    major: "문헌정보학 전공, 일어일문학 복수전공",
    duration: "2010.03 - 2018.02",
  },
  {
    training: [
      {
        logo: logo1,
        institution: "그린컴퓨터아트학원 대구캠퍼스",
        course:
          "기업 요구를 반영한 프로젝트 중심 프론트엔드 React(리액트) 개발자 양성",
        duration: "2024.03 - 2024.09",
        skillsLearned: ["React", "TypeScript", "Redux", "Emotion", "axios"],
        projects: [
          {
            title: "주문이요 (음식주문 플랫폼) 2차 프로젝트",
            role: "Frontend Developer",
            date: "2024-07-23 - 2024-08-24",
            description:
              "주문이요 2차 프로젝트에서 다양한 기능을 구현했습니다. 장바구니 기능을 추가하여 사용자 편의성을 높였으며, 주소 관리 시스템을 통해 사용자의 정보를 효율적으로 관리할 수 있도록 했습니다. 탭 메뉴와 인트로 페이지를 디자인하여 사용자 경험을 향상시키고, 무한 스크롤 기능을 통해 콘텐츠 탐색성을 개선했습니다. 또한, 렌더링 성능을 최적화하여 페이지 로딩 속도를 개선하고, 결제 모듈을 NICE페이먼트로 변경하여 결제 지원 수단을 늘렸습니다.",
            techStack: [
              "React",
              "React Router Dom",
              "axios",
              "Sass",
              "Emotion",
              "Redux Toolkit",
              "MUI",
            ],
          },
          {
            title: "주문이요 (음식주문 플랫폼) 1차 프로젝트",
            role: "Frontend Developer Leader",
            date: "2024-06-23 - 2024-07-23",
            description:
              "주문이요 1차 프로젝트에서 프로젝트 전반을 총괄했습니다. UI/UX 디자인 및 공통 컴포넌트와 레이아웃 설계를 주도하고, 라우터 관리 및 GitHub 관리를 통해 팀원들과의 협업을 이끌었습니다. Redux Toolkit을 사용한 상태 관리 구현 외에도, 로그인 및 로그아웃 기능과 토큰 만료 시 리프레시 토큰을 활용한 재인증 프로세스를 구축했습니다. 또한, 위치 기반 상점 검색 및 조회, 카테고리 검색 및 정렬, 주문 및 결제(PortOne API 연동), 주문 확인 및 주문 취소 기능을 개발하여 사용자의 편의성을 크게 향상시켰습니다.",
            techStack: [
              "React",
              "React Router Dom",
              "axios",
              "Sass",
              "Emotion",
              "Redux Toolkit",
              "MUI",
            ],
          },
          {
            title: "Plant Diary (식물관리 서비스)",
            role: "Frontend Developer",
            date: "2024-05-23 - 2024-06-23",
            description:
              "Plant Diary 프로젝트에서 커뮤니티 페이지의 전체 레이아웃과 기능을 설계 및 구현했습니다. API와 연결하여 게시글 CRUD 기능을 구현했으며, 사용자 친화적인 검색, 정렬, 추천, 댓글 기능 및 페이지네이션을 통해 최적의 사용자 경험을 제공했습니다.",
            techStack: [
              "React",
              "React Router Dom",
              "axios",
              "Sass",
              "Emotion",
            ],
          },
        ],
      },
      {
        logo: logo2,
        institution: "라인컴퓨터아트학원",
        course:
          "[과정평가형]정보처리산업기사(자바(Java)프로그래밍 활용 웹개발)A",
        duration: "2021.12 - 2022.05",
        skillsLearned: [
          "Node.js",
          "Express",
          "MySQL",
          "PHP",
          "HTML",
          "CSS",
          "JavaScript",
        ],
        projects: [
          {
            title: "영화관 키오스크 시스템",
            role: "Frontend Developer",
            date: "2022.04 - 2022.05",
            description:
              "영화 예매, 상영 시간표 조회, 좌석 선택, 결제 기능을 제공하는 키오스크 시스템 구현",
            techStack: ["HTML", "CSS", "JavaScript"],
          },
        ],
      },
    ],
  },
];

export default education;
