import { useAuthStore } from "@/stores/authStore";

interface UserAuthButtonProps {
  label: string | React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  color?: string;
  width?: string;
  py?: string;
  mt?: string;
}

const UserAuthButton = ({
  label,
  onClick,
  type = "button",
  color = "blue",
  width = "",
  py = "py-3",
  mt = "",
}: UserAuthButtonProps) => {
  const { user } = useAuthStore();

  return (
    <button
      type={type}
      onClick={onClick}
      className={` bg-${color}-500 ${
        !user ? "cursor-not-allowed bg-gray-500 hover:bg-gray-600" : ""
      } hover:bg-${color}-600 ${py} shrink-0 rounded-md px-4 text-sm text-white ${width} focus:outline-none ${mt}`}
    >
      {label}
    </button>
  );
};

export default UserAuthButton;
