interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  color?: string;
  width?: string;
  py?: string;
  mt?: string;
}

const Button = ({
  label,
  onClick,
  type = "button",
  color = "blue",
  width = "",
  py = "py-3",
  mt = "",
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    className={`bg-${color}-500 hover:bg-${color}-600 ${py} rounded-md px-4 text-sm text-white ${width} focus:outline-none ${mt}`}
  >
    {label}
  </button>
);

export default Button;
