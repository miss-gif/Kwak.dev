import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "./label";

interface InputWithLabelButtonProps {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  value: string | string[] | number | any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkLabel?: string;
  checkBox?: boolean;
  checkFunc?: () => void;
}

export function InputWithLabelButton({
  label,
  type = "text",
  name,
  placeholder = `${label}을 입력하세요.`,
  checkLabel = "확인",
  checkBox = false,
  checkFunc = () => {},
  ...props
}: InputWithLabelButtonProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type={type} id={name} placeholder={placeholder} {...props} />
        <Button
          type="button"
          variant="secondary"
          className="border border-gray-300 dark:border-gray-700"
          onClick={() => {
            checkFunc();
          }}
        >
          {checkLabel}
        </Button>
      </div>
    </div>
  );
}
