import { RadioGroupProps } from "../../types/type";

const RadioGroup = ({ label, options, name, value, onChange }: RadioGroupProps) => (
  <div className="flex items-center">
    <p className="min-w-24 shrink-0 text-sm font-medium">{label}</p>
    <div className="flex items-center gap-2 py-2">
      {options.map((option, index) => (
        <label key={index} className="shrink-0">
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={onChange}
            className="mr-2"
          />
          {option}
        </label>
      ))}
    </div>
  </div>
);

export default RadioGroup;
