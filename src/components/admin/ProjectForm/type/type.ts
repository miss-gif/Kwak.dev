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
