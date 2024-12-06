import { Label } from "@/components/ui/label";
import { forwardRef } from "react";
import { RadioGroupProps } from "../../types/type";

const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(({ label, options, name, value, onChange }, ref) => (
  <div className="flex flex-col gap-1">
    <p className="text-sm">{label}</p>
    <div className="flex items-center gap-2">
      {options.map((option, index) => (
        <Label key={index} className="flex shrink-0 items-center gap-2">
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={onChange}
            ref={ref} // ref를 input에 전달
          />
          {option}
        </Label>
      ))}
    </div>
  </div>
));

// forwardRef로 생성된 컴포넌트의 displayName 설정 (디버깅 용이)
RadioGroup.displayName = "RadioGroup";

export default RadioGroup;
