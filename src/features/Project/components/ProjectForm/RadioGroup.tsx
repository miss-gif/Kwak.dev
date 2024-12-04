import { Label } from "@/components/ui/label";
import { RadioGroupProps } from "../../types/type";

const RadioGroup = ({ label, options, name, value, onChange }: RadioGroupProps) => (
  <div className="flex flex-col gap-1">
    <p className="text-sm">{label}</p>
    <div className="flex items-center gap-2">
      {options.map((option, index) => (
        <Label key={index} className="flex shrink-0 items-center gap-2">
          <input type="radio" name={name} value={option} checked={value === option} onChange={onChange} />
          {option}
        </Label>
      ))}
    </div>
  </div>
);

export default RadioGroup;
