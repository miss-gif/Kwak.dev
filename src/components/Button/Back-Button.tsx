import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  label: string | JSX.Element;
  color?: string;
}

const BackButton = ({ label, color = "red" }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`bg-${color}-500 hover:bg-${color}-600 rounded-md px-4 py-3 text-sm text-white`}
    >
      {label}
    </button>
  );
};

export default BackButton;
