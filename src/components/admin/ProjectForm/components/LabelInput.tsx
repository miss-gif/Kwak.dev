import { handleEscKeyDown } from "@/utils/handleKeyDown";
import { LabelInputProps } from "../type/type";

const LabelInput = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  onEscKeyDown,
}: LabelInputProps) => (
  <div className="flex items-center py-2">
    <label className="block min-w-32 text-sm font-medium">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={(e) => handleEscKeyDown(e, onEscKeyDown, name)}
      className="w-full rounded-md border border-gray-300 p-2 focus:ring focus:ring-blue-500"
    />
  </div>
);

export default LabelInput;
