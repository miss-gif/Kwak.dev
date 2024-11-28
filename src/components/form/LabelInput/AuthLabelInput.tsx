import Button from "@/components/Button";
import { handleEscKeyDown } from "@/utils/handleKeyDown";

interface AuthLabelInputProps {
  type?: "text" | "email" | "password" | "number";
  label?: string;
  placeholder?: string;
  name: string;
  value: string | string[] | number | any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEscKeyDown?: (key: string) => void;
  checkLabel?: string;
  checkBox?: boolean;
  checkFunc?: (key: string) => void;
}

const AuthLabelInput = ({
  label,
  type = "text",
  placeholder = `${label} 입력하세요.`,
  name,
  value,
  onChange,
  onEscKeyDown = () => {},
  checkLabel,
  checkBox = false,
  checkFunc = () => {},
}: AuthLabelInputProps) => {
  return (
    <fieldset>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-600"
      >
        {label}
      </label>

      <div className="flex gap-2">
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={(e) => handleEscKeyDown(e, onEscKeyDown, name)}
          required
          className="w-full rounded-md border px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {checkBox ? (
          <Button
            label={checkLabel}
            py="py-2"
            onClick={() => {
              checkFunc(value);
            }}
          />
        ) : null}
      </div>
    </fieldset>
  );
};

export default AuthLabelInput;
