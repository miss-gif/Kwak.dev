import { Link } from "react-router-dom";

interface LinkButtonProps {
  label: string | JSX.Element;
  to: string;
  color?: string;
}

const LinkButton = ({ label, to, color = "blue" }: LinkButtonProps) => {
  return (
    <Link
      to={to}
      className={`bg-${color}-500 hover:bg-${color}-600 rounded-md px-4 py-3 text-sm text-white`}
    >
      {label}
    </Link>
  );
};

export default LinkButton;
