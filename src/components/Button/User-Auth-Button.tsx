import { useAuthStore } from "@/stores/authStore";
import { Button } from "../ui/button";
import { toast } from "react-toastify";

interface UserAuthButtonProps {
  label: string | React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  color?: string;
  width?: string;
  py?: string;
  mt?: string;
}

const UserAuthButton = ({ label, onClick, type = "button", color = "blue", width = "", py = "py-3", mt = "" }: UserAuthButtonProps) => {
  const { user } = useAuthStore();

  return (
    <Button
      type={type}
      onClick={() => {
        if (!user) {
          toast.error("로그인이 필요합니다.");
          return;
        }
        onClick && onClick();
      }}
      className={` bg-${color}-500 ${
        !user ? "cursor-not-allowed bg-gray-500 hover:bg-gray-600" : ""
      } hover:bg-${color}-600 ${py} shrink-0 rounded-md px-4 text-sm text-white ${width} focus:outline-none ${mt}`}
    >
      {label}
    </Button>
  );
};

export default UserAuthButton;
