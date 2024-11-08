// 프로젝트 카드 데이터 인터페이스
interface ProjectCard {
  thumbnail: string;
  title: string;
  duration: Duration;
  teamSize: number;
  description: string;
  techStack: string[];
  links: ProjectLinks;
  client: string;
  team: ProjectTeam;
}

// 기간 정보를 담는 인터페이스
interface Duration {
  startDate: Date;
  endDate: Date;
}

// 프로젝트 링크 관련 인터페이스
interface ProjectLinks {
  demoUrl: string;
  githubUrl: string;
  additionalUrls?: LinkItem[];
}

// 추가 링크를 위한 인터페이스
interface LinkItem {
  name: string;
  url: string;
}

// 프로젝트 상세 정보 인터페이스
interface ProjectDetail {
  goal: DetailSection[];
  features: DetailSection[];
  technology: DetailSection[];
  result: DetailSection[];
  achievement: DetailSection[];
}

// 팀원 정보를 담는 인터페이스
interface ProjectTeam {
  planner: string;
  designer: string;
  publisher: string;
  developer: string;
}

// 상세 섹션 인터페이스
interface DetailSection {
  title: string;
  details: string[];
}

// 최종 프로젝트 데이터 인터페이스
export interface ProjectData {
  id: number;
  card: ProjectCard;
  detail: ProjectDetail;
}
