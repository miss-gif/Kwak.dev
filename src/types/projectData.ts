export interface ProjectData {
  // 미리보기 단계
  thumbnail: string; // 프로젝트 썸네일 이미지 URL
  title: string; // 프로젝트 제목
  duration: string; // 작업 기간 (예: "2023.01 - 2023.03")
  teamSize: number; // 작업 인원 (예: 4명)
  description: string; // 프로젝트에 대한 간략한 설명
  techStack: string[]; // 사용 기술 목록
  links: {
    // 링크 객체 (미리보기와 상세보기 모두 사용)
    demoUrl?: string; // 데모 URL (선택 사항)
    githubUrl?: string; // GitHub 저장소 URL (상세보기 선택 사항)
    additionalUrls?: {
      // 추가적인 링크들 (선택 사항)
      canvaUrl?: string; // Canva URL
      figmaUrl?: string; // Figma URL
    };
  };

  // 상세보기 단계
  client?: string; // 클라이언트 이름 (선택 사항)
  planning?: string; // 기획 담당자 또는 기획 관련 정보 (선택 사항)
  design?: string; // 디자인 담당자 또는 디자인 관련 정보 (선택 사항)
  publishing?: string; // 퍼블리싱 담당자 또는 퍼블리싱 관련 정보 (선택 사항)
  development?: string; // 개발 담당자 또는 개발 관련 정보 (선택 사항)

  // 목표 및 설명 섹션 (상세보기에서 사용)
  goal?: string; // 프로젝트의 목표 설명
  features?: string[]; // 프로젝트 기능 설명 리스트
  technology?: string; // 기술 설명
  result?: string; // 결과 설명
  achievement?: string; // 성과 설명
}
