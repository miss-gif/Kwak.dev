import { handleEscKeyDown } from "@/utils/handleKeyDown";

interface PorojectDocsInputProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEscKeyDown: (key: string) => void;
}

const PorojectDocsInput = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  onEscKeyDown,
}: PorojectDocsInputProps) => (
  <div className="flex items-center py-2">
    <label className="block min-w-32">{label}</label>
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

export default PorojectDocsInput;
