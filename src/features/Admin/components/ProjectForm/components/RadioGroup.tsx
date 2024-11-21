import { RadioGroupProps } from "../type/type";

const RadioGroup = ({
  label,
  options,
  name,
  value,
  onChange,
}: RadioGroupProps) => (
  <div className="flex items-center">
    <p className="min-w-32 text-sm font-medium">{label}</p>
    <div className="flex items-center py-2">
      {options.map((option, index) => (
        <label key={index} className="min-w-32">
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
