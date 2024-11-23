interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  color?: string;
}

const Button = ({
  label,
  onClick,
  type = "button",
  color = "blue",
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    className={`bg-${color}-500 hover:bg-${color}-600 rounded-md px-4 py-2 text-white`}
  >
    {label}
  </button>
);

export default Button;
