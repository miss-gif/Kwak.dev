import { handleEscKeyDown } from "@/utils/handleKeyDown";

interface AuthLabelInputProps {
  type?: "text" | "email" | "password" | "number";
  label?: string;
  placeholder?: string;
  name: string;
  value: string | string[] | number | any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEscKeyDown?: (key: string) => void;
}

const AuthLabelInput = ({
  label,
  type = "text",
  placeholder = `${label} 입력하세요.`,
  name,
  value,
  onChange,
  onEscKeyDown = () => {},
}: AuthLabelInputProps) => {
  return (
    <fieldset>
      <label htmlFor={name} className="block text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => handleEscKeyDown(e, onEscKeyDown, name)}
        required
        className="mt-2 w-full rounded-md border px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </fieldset>
  );
};

export default AuthLabelInput;
