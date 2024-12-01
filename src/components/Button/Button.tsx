interface ButtonProps {
  label: string | React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  color?: string;
  width?: string;
  py?: string;
  mt?: string;
  text?: string;
}

const Button = ({
  label,
  onClick,
  type = "button",
  width = "",
  py = "py-3",
  mt = "",
  color = "blue" as "transparent" | "inherit",
  text = "white" as "transparent" | "inherit",
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    className={`bg-${color}-500 hover:bg-${color}-600 ${py} shrink-0 rounded-md px-4 text-sm text-${text} ${width} focus:outline-none ${mt}`}
  >
    {label}
  </button>
);

export default Button;
