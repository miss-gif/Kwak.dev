import { useNavigate } from "react-router-dom";

const ToBackButton = ({ title }: { title: string }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
    >
      {title}
    </button>
  );
};

export default ToBackButton;
