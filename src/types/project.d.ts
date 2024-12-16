export interface Project {
  docID: string;
  design: Design;
  startDate: string;
  demoUrl: string;
  badgeParticipation: BadgeParticipation;
  descriptionDetail: string;
  planning: Design;
  publishing: Development;
  techStack: string[];
  githubUrl: string;
  development: Development;
  client: string;
  swaggerUrl: string;
  figmaUrl: string;
  projectName: string;
  endDate: string;
  description: string;
  badgeProjectType: BadgeProjectType;
  thumbnail: string;
  badgeProjectDevice: BadgeProjectDevice;
  teamSize: TeamSize;
  canvaUrl: string;
  docId: string;
  id: number;
}

export enum BadgeParticipation {
  개인 = "개인",
  스터디 = "스터디",
  협업 = "협업",
}

export enum BadgeProjectDevice {
  데스크탑 = "데스크탑",
  반응형 = "반응형",
}

export enum BadgeProjectType {
  퍼블리싱 = "퍼블리싱",
  풀스택 = "풀스택",
  프론트엔드 = "프론트엔드",
}

export enum Design {
  Empty = "-",
  Fe기획 = "FE 기획",
  디자이너 = "디자이너",
  본인 = "본인",
}

export enum Development {
  Empty = "-",
  각자맡은페이지담당 = "각자 맡은 페이지 담당",
  본인 = "본인",
}

export enum TeamSize {
  Fe3명Be5명 = "FE 3명, BE 5명",
  The1명 = "1명",
}
