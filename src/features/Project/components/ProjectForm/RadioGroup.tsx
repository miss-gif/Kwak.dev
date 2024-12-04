import { Label } from "@/components/ui/label";
import { RadioGroupProps } from "../../types/type";

const RadioGroup = ({ label, options, name, value, onChange }: RadioGroupProps) => (
  <div className="flex items-center">
    <p className="min-w-24 shrink-0 text-sm font-medium">{label}</p>
    <div className="flex items-center gap-2 py-2">
      {options.map((option, index) => (
        <Label key={index} className="shrink-0">
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={onChange}
            className="mr-2"
          />
          {option}
        </Label>
      ))}
    </div>
  </div>
);

export default RadioGroup;
