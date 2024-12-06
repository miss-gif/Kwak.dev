import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { forwardRef } from "react";

interface InputWithLabelProps {
  label?: string;
  type?: string;
  name: string;
  placeholder?: string;
  value: string | string[] | number | any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEscKeyDown?: (key: string) => void;
  readOnly?: boolean;
}

export const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ label, type = "text", name, placeholder = `${label}을 입력하세요.`, ...props }, ref) => {
    return (
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor={name}>{label}</Label>
        <Input
          type={type}
          id={name}
          placeholder={placeholder}
          ref={ref} // ref를 Input에 전달
          {...props}
        />
      </div>
    );
  },
);

// forwardRef로 생성된 컴포넌트의 displayName 설정 (디버깅 용이)
InputWithLabel.displayName = "InputWithLabel";
