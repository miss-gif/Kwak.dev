export interface LabelInputProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEscKeyDown: (key: string) => void;
}

export interface RadioGroupProps {
  label: string;
  options: string[];
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxGroupProps {
  label: string;
  options: string[];
  values: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormData {
  id: string;
  projectName: string;
  badgeProjectDevice: string;
  badgeProjectType: string;
  badgeParticipation: string;
  thumbnail: string;
  startDate: string;
  endDate: string;
  teamSize: string;
  description: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
  canvaUrl: string;
  figmaUrl: string;
  swaggerUrl: string;
  client: string;
  planning: string;
  design: string;
  publishing: string;
  development: string;
  achievements: { title: string; content: string }[]; // outcome 필드 추가
  goals: { title: string; content: string }[]; // goals 필드 추가
  mainFeatures: { title: string; content: string }[]; // features 필드 추가
  technologies: { title: string; content: string }[]; // techUsage 필드 추가
  results: { title: string; content: string }[]; // results 필드 추가
}
