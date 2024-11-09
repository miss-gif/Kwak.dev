import { ProjectData } from "@/types/projectData";

export const projectData: ProjectData[] = [
  {
    id: 1,
    card: {
      badge: ["코딩", "기술", "협업"],
      thumbnail:
        "https://portfolio-final-neon-psi.vercel.app/assets/1-f857b189.png", // 대표 이미지로 수정한 예시
      title: "주문이요 (음식주문 플랫폼)",
      duration: {
        startDate: new Date("2024-07-24"),
        endDate: new Date("2024-08-23"),
      },
      teamSize: 4, // 팀원 수
      description:
        "2차 프로젝트에서 구현한 기능을 고도화하는 작업을 진행 중입니다. 기존 시스템의 성능을 개선하고, 사용자 피드백을 반영하여 기능을 추가하며 지속적으로 서비스를 개선하고 있습니다.",
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
          title: "Create a visually appealing portfolio site",
          details: ["To showcase development skills"],
        },
      ],
      features: [
        {
          title: "Responsive design",
          details: ["Works on desktop and mobile seamlessly"],
        },
      ],
      technology: [
        {
          title: "React + TypeScript",
          details: ["Used for building the UI and component structure"],
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
      badge: ["코딩", "기술", "협업"],
      thumbnail: "https://placehold.co/600x400",
      title: "주문이요 (음식주문 플랫폼)",
      duration: {
        startDate: new Date("2024-06-24"),
        endDate: new Date("2024-07-23"),
      },
      teamSize: 6,
      description:
        "남녀노소 누구나 쉽고 빠르게 음식을 주문할 수 있는 사용자 친화적인 웹 플랫폼입니다. 직관적인 인터페이스와 필터링 기능을 통해 원하는 음식을 간편하게 찾고 주문할 수 있으며, 사업자를 위한 매장 관리 기능을 제공하여 매출 증대를 지원합니다.",
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
        githubUrl: "https://github.com/miss-gif/jumuniyo-v2-final",
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
          title: "Improve user experience and performance",
          details: [
            "Refine existing features and improve platform performance",
          ],
        },
      ],
      features: [
        {
          title: "User Management",
          details: [
            "Sign up (users, businesses), social login (Kakao, Naver, Google), login, logout",
          ],
        },
        {
          title: "User Features",
          details: [
            "User information modification",
            "Address management",
            "Store favorites",
            "Order history",
            "Review management",
            "Coupon history",
            "User account deletion",
            "Store search (by address)",
            "Menu cart",
            "Order and payment (NicePay)",
            "Order confirmation and cancellation",
          ],
        },
        {
          title: "Business Features",
          details: [
            "Store management",
            "Menu registration and modification",
            "Order reception",
            "Review management",
            "Order reception history",
            "Store coupon issuance",
            "Sales statistics",
          ],
        },
        {
          title: "Admin Features",
          details: [
            "Approval management for business sign-ups",
            "Site menu category management",
            "Customer service management",
            "Review report management",
            "User statistics",
            "Store-wide sales and order management",
          ],
        },
      ],
      technology: [
        {
          title: "React + Redux + Axios",
          details: ["Used for state management and API integration"],
        },
      ],
      result: [
        {
          title: "Improved system performance",
          details: ["Reduced page load time and enhanced user engagement"],
        },
      ],
      achievement: [
        {
          title: "Enhanced development skills",
          details: ["Gained hands-on experience with Redux Toolkit and Axios"],
        },
      ],
    },
  },
  {
    id: 3,
    card: {
      badge: ["코딩", "기술", "협업"],
      thumbnail: "https://placehold.co/600x400", // 대표 이미지로 수정한 예시
      title: "Plant Diary (식물관리 서비스)",
      duration: {
        startDate: new Date("2024-05-24"),
        endDate: new Date("2024-06-23"),
      },
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
      badge: ["코딩", "기술"],
      thumbnail: "https://placehold.co/600x400",
      title: "string",
      duration: {
        startDate: new Date("string"),
        endDate: new Date("string"),
      },
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
