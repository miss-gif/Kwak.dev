import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputWithLabelProps {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  value: string | string[] | number | any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputWithLabel({
  label,
  type = "text",
  name,
  placeholder = `${label}을 입력하세요.`,
  ...props
}: InputWithLabelProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} id={name} placeholder={placeholder} {...props} />
    </div>
  );
}
