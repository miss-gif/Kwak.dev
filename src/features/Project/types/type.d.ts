// 라벨과 인풋을 포함한 컴포넌트의 타입 정의
export interface LabelInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  name: string;
  value: string | string[] | number | any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEscKeyDown: (key: string) => void;
  read?: boolean;
}

// 라디오버튼 그룹 컴포넌트의 타입 정의
export interface RadioGroupProps {
  label: string;
  options: string[];
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// 체크박스 그룹 컴포넌트의 타입 정의
export interface CheckboxGroupProps {
  label: string;
  options?: string[];
  values: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Preview 컴포넌트의 타입 정의
export interface PreviewData {
  id: string;
  projectName: string;
  description: string;
  badgeProjectDevice: string;
  badgeProjectType: string;
  badgeParticipation: string;
  thumbnail: string;
  startDate: string;
  endDate: string;
  techStack: string[];
}

// Overview 컴포넌트의 타입 정의
export interface OverviewData {
  client: string;
  teamSize: string;
  planning: string;
  design: string;
  publishing: string;
  development: string;
  demoUrl: string;
  githubUrl: string;
  canvaUrl: string;
  figmaUrl: string;
  swaggerUrl: string;
}

// 상세 섹션 인터페이스
interface DescriptionTest {
  title: string[] | string;
  text: string[] | string;
}

// Description 컴포넌트의 타입 정의
export interface DescriptionData {
  goal: DescriptionTest[];
  features: DescriptionTest[];
  technology: DescriptionTest[];
  result: DescriptionTest[];
  achievement: DescriptionTest[];
}

// 프로젝트 데이터 타입 정의
export interface ProjectData {
  docid?: string;
  descriptionDetail?: string;
  docID?: string;
  id: number | string;
  projectName: string;
  description: string;
  badgeProjectDevice: string;
  badgeProjectType: string;
  badgeParticipation: string;
  thumbnail: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  client: string;
  teamSize: string;
  planning: string;
  design: string;
  publishing: string;
  development: string;
  demoUrl: string;
  githubUrl: string;
  canvaUrl: string;
  figmaUrl: string;
  swaggerUrl: string;
}
