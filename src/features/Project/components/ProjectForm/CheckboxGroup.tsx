import { CheckboxGroupProps } from "../../types/type";

const CheckboxGroup = ({
  label,
  options,
  values,
  onChange,
}: CheckboxGroupProps) => (
  <div className="flex items-center">
    <p className="min-w-24 shrink-0">{label}</p>
    <div className="flex flex-wrap items-center gap-4 py-2">
      {options?.map((option, index) => (
        <label key={index} className="min-w-24 shrink-0">
          <input
            type="checkbox"
            value={option}
            checked={values.includes(option)}
            onChange={onChange}
            className="mr-2"
          />
          {option}
        </label>
      ))}
    </div>
  </div>
);

export default CheckboxGroup;
