import { ProjectData } from "@/types/projectData";

export const projectData: ProjectData[] = [
  {
    id: 1,
    card: {
      title: "주문이요 (음식주문 플랫폼)",
      badge: ["코딩", "기술", "협업"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/1-f857b189.png",
      duration: {
        startDate: new Date("2024-07-24"),
        endDate: new Date("2024-08-23"),
      },
      keywords: ["2024"],
      teamSize: "FE 3명 BE 5",
      description:
        "1차적으로 완성한 서비스를 성능을 개선하고, 사용자 피드백을 반영하여 기능을 추가하며 지속적으로 서비스를 완성했습니다.",
      techStack: [
        "React",
        "React Router",
        "Redux",
        "Axios",
        "Sass",
        "Emotion",
        "MUI",
      ],
      links: {
        demoUrl: "https://jumuniyo.gybproject.com/",
        githubUrl: "https://github.com/miss-gif/jumunyo",
        additionalUrls: [
          {
            name: "Canva",
            url: "https://www.canva.com/design/DAGOX4a8SaE/F06Qj7PFzV0Ck796fnsNLA/edit",
          },
          {
            name: "Figma",
            url: "https://www.figma.com/design/wo9ijijb6eANcrwEzBAFQA/%EC%A3%BC%EB%AC%B8%EC%9D%B4%EC%9A%94-(%EA%B0%80%EC%B9%AD)?node-id=25-2&t=KnhWp6vxL0mDpwiK-1",
          },
        ],
      },
      client: "협업 프로젝트",
      team: {
        planner: "본인",
        designer: "본인",
        publisher: "본인 외 2명",
        developer: "본인 외 2명",
      },
    },
    detail: {
      goal: [
        {
          title: "기간 내 최대한 많은 기능을 구현하는 것",
          details: ["To showcase development skills"],
        },
      ],
      features: [
        {
          title: "회원 관리",
          details: [
            "회원가입 (일반 사용자, 사업자) 및 소셜 로그인(카카오, 네이버, 구글)",
            "아이디, 비밀번호 찾기",
            "사용자 정보 수정",
            "주소관리",
            "상점 즐겨찾기",
            "회원탈퇴",
          ],
        },
        {
          title: "사용자 기능",
          details: [
            "주문내역 조회",
            "리뷰관리 (리뷰 작성, 수정, 삭제)",
            "쿠폰확인 및 내역조회",
            "상점 검색(주소 기반)",
            "상점 카테고리 필터",
            "메뉴 장바구니",
            "메뉴 주문 및 결제(NicePay)",
            "주문 확인 및 주문 취소",
            "리뷰 신고",
          ],
        },
        {
          title: "사업자 기능",
          details: [
            "사업장 관리",
            "메뉴등록 및 수정",
            "주문접수",
            "리뷰관리",
            "주문접수 내역조회",
            "매장쿠폰 발급",
            "매출 통계",
          ],
        },
        {
          title: "관리자 기능",
          details: [
            "사업자 회원가입 시 승인 관리",
            "사이트 메뉴 카테고리 관리",
            "고객센터 문의 내용 관리",
            "리뷰 신고 내용 관리",
            "가입자, 탈퇴 통계",
            "전체 상점 매출, 주문 수 관리",
          ],
        },
      ],
      technology: [
        {
          title: "React",
          details: [
            "UI 개발을 위한 JavaScript 라이브러리. 가상 DOM을 활용하여 효율적인 렌더링을 제공하며, 컴포넌트 기반 개발 방식을 지원합니다.",
          ],
        },
        {
          title: "React Router",
          details: [
            "React 애플리케이션에서 라우팅을 관리하는 라이브러리. URL에 따라 다른 컴포넌트를 렌더링하고, 깊이 링크를 지원합니다.",
          ],
        },
        {
          title: "Redux",
          details: [
            "JavaScript 애플리케이션의 상태 관리를 위한 예측 가능한 상태 컨테이너입니다. 컴포넌트 간 데이터 흐름을 관리하고, 복잡한 애플리케이션의 상태를 효율적으로 관리합니다.",
          ],
        },
        {
          title: "Axios",
          details: [
            "브라우저와 Node.js에서 사용할 수 있는 Promise 기반 HTTP 클라이언트입니다. 서버와의 통신을 간편하게 처리합니다.",
          ],
        },
        {
          title: "Sass",
          details: [
            "CSS 확장 언어로, 변수, 함수, 중첩 등의 기능을 제공하여 CSS 작성을 효율적으로 만들어줍니다.",
          ],
        },
        {
          title: "Emotion",
          details: [
            "JavaScript에서 바로 CSS를 작성할 수 있도록 지원하는 스타일링 라이브러리입니다. 동적인 스타일링과 서버 사이드 렌더링을 지원합니다.",
          ],
        },
        {
          title: "MUI",
          details: [
            "React용 UI 컴포넌트 라이브러리입니다. Material Design 기반의 다양한 컴포넌트를 제공하며, 커스터마이징이 용이합니다.",
          ],
        },
      ],
      result: [
        {
          title: "Increased engagement",
          details: ["Received positive feedback on usability and design"],
        },
      ],
      achievement: [
        {
          title: "Skill improvement",
          details: ["Gained experience with React and TypeScript"],
        },
      ],
    },
  },
  {
    id: 2,
    card: {
      title: "주문이요 (음식주문 플랫폼)",
      badge: ["코딩", "기술", "협업"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/1-d57eef54.png",
      duration: {
        startDate: new Date("2024-07-24"),
        endDate: new Date("2024-08-23"),
      },
      keywords: ["2024", "반응형"],
      teamSize: "FE 3명 BE 5",
      description:
        "1차적으로 완성한 서비스를 성능을 개선하고, 사용자 피드백을 반영하여 기능을 추가하며 지속적으로 서비스를 완성했습니다.",
      techStack: [
        "React",
        "React Router",
        "Redux",
        "Axios",
        "Sass",
        "Emotion",
        "MUI",
      ],
      links: {
        demoUrl: "https://jumuniyo.gybproject.com/",
        githubUrl: "https://github.com/miss-gif/jumunyo",
        additionalUrls: [
          {
            name: "Canva",
            url: "https://www.canva.com/design/DAGOX4a8SaE/F06Qj7PFzV0Ck796fnsNLA/edit",
          },
          {
            name: "Figma",
            url: "https://www.figma.com/design/wo9ijijb6eANcrwEzBAFQA/%EC%A3%BC%EB%AC%B8%EC%9D%B4%EC%9A%94-(%EA%B0%80%EC%B9%AD)?node-id=25-2&t=KnhWp6vxL0mDpwiK-1",
          },
        ],
      },
      client: "협업 프로젝트",
      team: {
        planner: "본인",
        designer: "본인",
        publisher: "본인 외 2명",
        developer: "본인 외 2명",
      },
    },
    detail: {
      goal: [
        {
          title: "기간 내 최대한 많은 기능을 구현하는 것",
          details: ["To showcase development skills"],
        },
      ],
      features: [
        {
          title: "회원 관리",
          details: [
            "회원가입 (일반 사용자, 사업자) 및 소셜 로그인(카카오, 네이버, 구글)",
            "아이디, 비밀번호 찾기",
            "사용자 정보 수정",
            "주소관리",
            "상점 즐겨찾기",
            "회원탈퇴",
          ],
        },
        {
          title: "사용자 기능",
          details: [
            "주문내역 조회",
            "리뷰관리 (리뷰 작성, 수정, 삭제)",
            "쿠폰확인 및 내역조회",
            "상점 검색(주소 기반)",
            "상점 카테고리 필터",
            "메뉴 장바구니",
            "메뉴 주문 및 결제(NicePay)",
            "주문 확인 및 주문 취소",
            "리뷰 신고",
          ],
        },
        {
          title: "사업자 기능",
          details: [
            "사업장 관리",
            "메뉴등록 및 수정",
            "주문접수",
            "리뷰관리",
            "주문접수 내역조회",
            "매장쿠폰 발급",
            "매출 통계",
          ],
        },
        {
          title: "관리자 기능",
          details: [
            "사업자 회원가입 시 승인 관리",
            "사이트 메뉴 카테고리 관리",
            "고객센터 문의 내용 관리",
            "리뷰 신고 내용 관리",
            "가입자, 탈퇴 통계",
            "전체 상점 매출, 주문 수 관리",
          ],
        },
      ],
      technology: [
        {
          title: "React",
          details: [
            "UI 개발을 위한 JavaScript 라이브러리. 가상 DOM을 활용하여 효율적인 렌더링을 제공하며, 컴포넌트 기반 개발 방식을 지원합니다.",
          ],
        },
        {
          title: "React Router",
          details: [
            "React 애플리케이션에서 라우팅을 관리하는 라이브러리. URL에 따라 다른 컴포넌트를 렌더링하고, 깊이 링크를 지원합니다.",
          ],
        },
        {
          title: "Redux",
          details: [
            "JavaScript 애플리케이션의 상태 관리를 위한 예측 가능한 상태 컨테이너입니다. 컴포넌트 간 데이터 흐름을 관리하고, 복잡한 애플리케이션의 상태를 효율적으로 관리합니다.",
          ],
        },
        {
          title: "Axios",
          details: [
            "브라우저와 Node.js에서 사용할 수 있는 Promise 기반 HTTP 클라이언트입니다. 서버와의 통신을 간편하게 처리합니다.",
          ],
        },
        {
          title: "Sass",
          details: [
            "CSS 확장 언어로, 변수, 함수, 중첩 등의 기능을 제공하여 CSS 작성을 효율적으로 만들어줍니다.",
          ],
        },
        {
          title: "Emotion",
          details: [
            "JavaScript에서 바로 CSS를 작성할 수 있도록 지원하는 스타일링 라이브러리입니다. 동적인 스타일링과 서버 사이드 렌더링을 지원합니다.",
          ],
        },
        {
          title: "MUI",
          details: [
            "React용 UI 컴포넌트 라이브러리입니다. Material Design 기반의 다양한 컴포넌트를 제공하며, 커스터마이징이 용이합니다.",
          ],
        },
      ],
      result: [
        {
          title: "Increased engagement",
          details: ["Received positive feedback on usability and design"],
        },
      ],
      achievement: [
        {
          title: "Skill improvement",
          details: ["Gained experience with React and TypeScript"],
        },
      ],
    },
  },
  {
    id: 3,
    card: {
      title: "Plant Diary (식물관리 서비스)",
      badge: ["코딩", "기술", "협업"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/1-8411f5ca.png", // 대표 이미지로 수정한 예시
      duration: {
        startDate: new Date("2024-05-24"),
        endDate: new Date("2024-06-23"),
      },
      keywords: ["1"],
      teamSize: 3,
      description:
        "식물을 사랑하는 사용자들이 자신의 반려식물을 더욱 건강하고 아름답게 키울 수 있도록 돕는 웹 애플리케이션입니다. 사용자는 식물 등록, 물주기, 분갈이, 비료 주기 등 관리 일정을 쉽게 기록하고 알림을 받을 수 있으며, 다른 사용자들과 식물 관리 노하우를 공유하고 소통할 수 있는 커뮤니티 기능을 제공합니다.",
      techStack: ["React", "React Router", "Axios", "Sass", "Emotion"],
      links: {
        demoUrl: "https://green-01prj.vercel.app/",
        githubUrl: "https://github.com/miss-gif/green-01prj",
        additionalUrls: [
          {
            name: "Canva",
            url: "https://www.canva.com/design/DAGLYEhJ6nk/gAYEVyu2zAcb906KrDz7Hw/edit",
          },
          {
            name: "Figma",
            url: "https://www.figma.com/design/wo9ijijb6eANcrwEzBAFQA/%EC%A3%BC%EB%AC%B8%EC%9D%B4%EC%9A%94-(%EA%B0%80%EC%B9%AD)?node-id=25-2&t=KnhWp6vxL0mDpwiK-1",
          },
        ],
      },
      client: "Personal Project",
      team: {
        planner: "John Doe",
        designer: "Jane Smith",
        publisher: "Alice Brown",
        developer: "Bob White",
      },
    },
    detail: {
      goal: [
        {
          title: "Provide an intuitive plant management service",
          details: [
            "Enable users to easily track and manage their plants' needs",
          ],
        },
      ],
      features: [
        {
          title: "Plant management",
          details: [
            "Register plants with detailed information",
            "Set and track care schedules (watering, replanting, fertilizing)",
          ],
        },
        {
          title: "Community features",
          details: [
            "Create and manage posts about plant care",
            "Comment and interact with other users' posts",
            "Search, filter, and sort posts",
            "Pagination for browsing large numbers of posts",
          ],
        },
      ],
      technology: [
        {
          title: "React + Axios",
          details: ["Used for building the UI and handling API calls"],
        },
      ],
      result: [
        {
          title: "Enhanced user engagement",
          details: ["Increased user interaction through community features"],
        },
      ],
      achievement: [
        {
          title: "Developed a full-stack application",
          details: [
            "Implemented a full plant management system with backend integration",
          ],
        },
      ],
    },
  },
  {
    id: 4,
    card: {
      title: "string",
      badge: ["코딩", "기술"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/project0-1f38df16.png",
      duration: {
        startDate: new Date("string"),
        endDate: new Date("string"),
      },
      keywords: ["1"],
      teamSize: 0,
      description: "string",
      techStack: ["string"],
      links: {
        demoUrl: "string",
        githubUrl: "string",
        additionalUrls: [
          {
            name: "string",
            url: "string",
          },
        ],
      },
      client: "string",
      team: {
        planner: "string",
        designer: "string",
        publisher: "string",
        developer: "string",
      },
    },
    detail: {
      goal: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      features: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      technology: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      result: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      achievement: [
        {
          title: "string",
          details: ["string"],
        },
      ],
    },
  },
  {
    id: 6,
    card: {
      title: "string",
      badge: ["코딩", "기술"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/project2-11324ba4.png",
      duration: {
        startDate: new Date("string"),
        endDate: new Date("string"),
      },
      keywords: ["1"],
      teamSize: 0,
      description: "string",
      techStack: ["string"],
      links: {
        demoUrl: "string",
        githubUrl: "string",
        additionalUrls: [
          {
            name: "string",
            url: "string",
          },
        ],
      },
      client: "string",
      team: {
        planner: "string",
        designer: "string",
        publisher: "string",
        developer: "string",
      },
    },
    detail: {
      goal: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      features: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      technology: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      result: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      achievement: [
        {
          title: "string",
          details: ["string"],
        },
      ],
    },
  },
  {
    id: 7,
    card: {
      title: "string",
      badge: ["코딩", "기술"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/project3%20(1)-ceae5a14.png",
      duration: {
        startDate: new Date("string"),
        endDate: new Date("string"),
      },
      keywords: ["1"],
      teamSize: 0,
      description: "string",
      techStack: ["string"],
      links: {
        demoUrl: "string",
        githubUrl: "string",
        additionalUrls: [
          {
            name: "string",
            url: "string",
          },
        ],
      },
      client: "string",
      team: {
        planner: "string",
        designer: "string",
        publisher: "string",
        developer: "string",
      },
    },
    detail: {
      goal: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      features: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      technology: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      result: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      achievement: [
        {
          title: "string",
          details: ["string"],
        },
      ],
    },
  },
  {
    id: 8,
    card: {
      title: "string",
      badge: ["코딩", "기술"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/project4-2b8de26a.png",
      duration: {
        startDate: new Date("string"),
        endDate: new Date("string"),
      },
      keywords: ["1"],
      teamSize: 0,
      description: "string",
      techStack: ["string"],
      links: {
        demoUrl: "string",
        githubUrl: "string",
        additionalUrls: [
          {
            name: "string",
            url: "string",
          },
        ],
      },
      client: "string",
      team: {
        planner: "string",
        designer: "string",
        publisher: "string",
        developer: "string",
      },
    },
    detail: {
      goal: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      features: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      technology: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      result: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      achievement: [
        {
          title: "string",
          details: ["string"],
        },
      ],
    },
  },
  {
    id: 9,
    card: {
      title: "string",
      badge: ["코딩", "기술"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/project5-e80fe106.png",
      duration: {
        startDate: new Date("string"),
        endDate: new Date("string"),
      },
      keywords: ["1"],
      teamSize: 0,
      description: "string",
      techStack: ["string"],
      links: {
        demoUrl: "string",
        githubUrl: "string",
        additionalUrls: [
          {
            name: "string",
            url: "string",
          },
        ],
      },
      client: "string",
      team: {
        planner: "string",
        designer: "string",
        publisher: "string",
        developer: "string",
      },
    },
    detail: {
      goal: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      features: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      technology: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      result: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      achievement: [
        {
          title: "string",
          details: ["string"],
        },
      ],
    },
  },
  {
    id: 10,
    card: {
      title: "string",
      badge: ["코딩", "기술"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/project6-701189e4.png",
      duration: {
        startDate: new Date("string"),
        endDate: new Date("string"),
      },
      keywords: ["1"],
      teamSize: 0,
      description: "string",
      techStack: ["string"],
      links: {
        demoUrl: "string",
        githubUrl: "string",
        additionalUrls: [
          {
            name: "string",
            url: "string",
          },
        ],
      },
      client: "string",
      team: {
        planner: "string",
        designer: "string",
        publisher: "string",
        developer: "string",
      },
    },
    detail: {
      goal: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      features: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      technology: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      result: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      achievement: [
        {
          title: "string",
          details: ["string"],
        },
      ],
    },
  },
  {
    id: 11,
    card: {
      title: "string",
      badge: ["코딩", "기술"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/project7-6ac0c0f9.png",
      duration: {
        startDate: new Date("string"),
        endDate: new Date("string"),
      },
      keywords: ["1"],
      teamSize: 0,
      description: "string",
      techStack: ["string"],
      links: {
        demoUrl: "string",
        githubUrl: "string",
        additionalUrls: [
          {
            name: "string",
            url: "string",
          },
        ],
      },
      client: "string",
      team: {
        planner: "string",
        designer: "string",
        publisher: "string",
        developer: "string",
      },
    },
    detail: {
      goal: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      features: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      technology: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      result: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      achievement: [
        {
          title: "string",
          details: ["string"],
        },
      ],
    },
  },
  {
    id: 12,
    card: {
      title: "string",
      badge: ["코딩", "기술"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/project8-1cb1e981.png",
      duration: {
        startDate: new Date("string"),
        endDate: new Date("string"),
      },
      keywords: ["1"],
      teamSize: 0,
      description: "string",
      techStack: ["string"],
      links: {
        demoUrl: "string",
        githubUrl: "string",
        additionalUrls: [
          {
            name: "string",
            url: "string",
          },
        ],
      },
      client: "string",
      team: {
        planner: "string",
        designer: "string",
        publisher: "string",
        developer: "string",
      },
    },
    detail: {
      goal: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      features: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      technology: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      result: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      achievement: [
        {
          title: "string",
          details: ["string"],
        },
      ],
    },
  },
  {
    id: 13,
    card: {
      title: "string",
      badge: ["코딩", "기술"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/project9-cabaf961.png",
      duration: {
        startDate: new Date("string"),
        endDate: new Date("string"),
      },
      keywords: ["1"],
      teamSize: 0,
      description: "string",
      techStack: ["string"],
      links: {
        demoUrl: "string",
        githubUrl: "string",
        additionalUrls: [
          {
            name: "string",
            url: "string",
          },
        ],
      },
      client: "string",
      team: {
        planner: "string",
        designer: "string",
        publisher: "string",
        developer: "string",
      },
    },
    detail: {
      goal: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      features: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      technology: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      result: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      achievement: [
        {
          title: "string",
          details: ["string"],
        },
      ],
    },
  },
  {
    id: 14,
    card: {
      title: "string",
      badge: ["코딩", "기술"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/project10-102b3371.png",
      duration: {
        startDate: new Date("string"),
        endDate: new Date("string"),
      },
      keywords: ["1"],
      teamSize: 0,
      description: "string",
      techStack: ["string"],
      links: {
        demoUrl: "string",
        githubUrl: "string",
        additionalUrls: [
          {
            name: "string",
            url: "string",
          },
        ],
      },
      client: "string",
      team: {
        planner: "string",
        designer: "string",
        publisher: "string",
        developer: "string",
      },
    },
    detail: {
      goal: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      features: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      technology: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      result: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      achievement: [
        {
          title: "string",
          details: ["string"],
        },
      ],
    },
  },
  {
    id: 15,
    card: {
      title: "string",
      badge: ["코딩", "기술"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/project11-92232536.png",
      duration: {
        startDate: new Date("string"),
        endDate: new Date("string"),
      },
      keywords: ["1"],
      teamSize: 0,
      description: "string",
      techStack: ["string"],
      links: {
        demoUrl: "string",
        githubUrl: "string",
        additionalUrls: [
          {
            name: "string",
            url: "string",
          },
        ],
      },
      client: "string",
      team: {
        planner: "string",
        designer: "string",
        publisher: "string",
        developer: "string",
      },
    },
    detail: {
      goal: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      features: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      technology: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      result: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      achievement: [
        {
          title: "string",
          details: ["string"],
        },
      ],
    },
  },
  {
    id: 16,
    card: {
      title: "string",
      badge: ["코딩", "기술"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/project1-8dca5466.png",
      duration: {
        startDate: new Date("string"),
        endDate: new Date("string"),
      },
      keywords: ["1"],
      teamSize: 0,
      description: "string",
      techStack: ["string"],
      links: {
        demoUrl: "string",
        githubUrl: "string",
        additionalUrls: [
          {
            name: "string",
            url: "string",
          },
        ],
      },
      client: "string",
      team: {
        planner: "string",
        designer: "string",
        publisher: "string",
        developer: "string",
      },
    },
    detail: {
      goal: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      features: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      technology: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      result: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      achievement: [
        {
          title: "string",
          details: ["string"],
        },
      ],
    },
  },
  {
    id: 16,
    card: {
      title: "string",
      badge: ["코딩", "기술"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/project1-8dca5466.png",
      duration: {
        startDate: new Date("string"),
        endDate: new Date("string"),
      },
      keywords: ["1"],
      teamSize: 0,
      description: "string",
      techStack: ["string"],
      links: {
        demoUrl: "string",
        githubUrl: "string",
        additionalUrls: [
          {
            name: "string",
            url: "string",
          },
        ],
      },
      client: "string",
      team: {
        planner: "string",
        designer: "string",
        publisher: "string",
        developer: "string",
      },
    },
    detail: {
      goal: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      features: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      technology: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      result: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      achievement: [
        {
          title: "string",
          details: ["string"],
        },
      ],
    },
  },
  {
    id: 16,
    card: {
      title: "string",
      badge: ["코딩", "기술"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/project1-8dca5466.png",
      duration: {
        startDate: new Date("string"),
        endDate: new Date("string"),
      },
      keywords: ["1"],
      teamSize: 0,
      description: "string",
      techStack: ["string"],
      links: {
        demoUrl: "string",
        githubUrl: "string",
        additionalUrls: [
          {
            name: "string",
            url: "string",
          },
        ],
      },
      client: "string",
      team: {
        planner: "string",
        designer: "string",
        publisher: "string",
        developer: "string",
      },
    },
    detail: {
      goal: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      features: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      technology: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      result: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      achievement: [
        {
          title: "string",
          details: ["string"],
        },
      ],
    },
  },
  {
    id: 16,
    card: {
      title: "string",
      badge: ["코딩", "기술"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/project1-8dca5466.png",
      duration: {
        startDate: new Date("string"),
        endDate: new Date("string"),
      },
      keywords: ["1"],
      teamSize: 0,
      description: "string",
      techStack: ["string"],
      links: {
        demoUrl: "string",
        githubUrl: "string",
        additionalUrls: [
          {
            name: "string",
            url: "string",
          },
        ],
      },
      client: "string",
      team: {
        planner: "string",
        designer: "string",
        publisher: "string",
        developer: "string",
      },
    },
    detail: {
      goal: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      features: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      technology: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      result: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      achievement: [
        {
          title: "string",
          details: ["string"],
        },
      ],
    },
  },
  {
    id: 16,
    card: {
      title: "string",
      badge: ["코딩", "기술"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/project1-8dca5466.png",
      duration: {
        startDate: new Date("string"),
        endDate: new Date("string"),
      },
      keywords: ["1"],
      teamSize: 0,
      description: "string",
      techStack: ["string"],
      links: {
        demoUrl: "string",
        githubUrl: "string",
        additionalUrls: [
          {
            name: "string",
            url: "string",
          },
        ],
      },
      client: "string",
      team: {
        planner: "string",
        designer: "string",
        publisher: "string",
        developer: "string",
      },
    },
    detail: {
      goal: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      features: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      technology: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      result: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      achievement: [
        {
          title: "string",
          details: ["string"],
        },
      ],
    },
  },
  {
    id: 16,
    card: {
      title: "string",
      badge: ["코딩", "기술"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/project1-8dca5466.png",
      duration: {
        startDate: new Date("string"),
        endDate: new Date("string"),
      },
      keywords: ["1"],
      teamSize: 0,
      description: "string",
      techStack: ["string"],
      links: {
        demoUrl: "string",
        githubUrl: "string",
        additionalUrls: [
          {
            name: "string",
            url: "string",
          },
        ],
      },
      client: "string",
      team: {
        planner: "string",
        designer: "string",
        publisher: "string",
        developer: "string",
      },
    },
    detail: {
      goal: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      features: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      technology: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      result: [
        {
          title: "string",
          details: ["string"],
        },
      ],
      achievement: [
        {
          title: "string",
          details: ["string"],
        },
      ],
    },
  },
];
