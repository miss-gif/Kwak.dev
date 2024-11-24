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

export interface PreviewFormData {
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
}
