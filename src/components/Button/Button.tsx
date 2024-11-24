interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  color?: string;
  width?: string;
}

const Button = ({
  label,
  onClick,
  type = "button",
  color = "blue",
  width = "",
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    className={`bg-${color}-500 hover:bg-${color}-600 rounded-md px-4 py-3 text-sm text-white ${width} focus:outline-none`}
  >
    {label}
  </button>
);

export default Button;
