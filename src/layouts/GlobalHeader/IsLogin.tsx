import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/authStore";
import { Link } from "react-router-dom";
import UserPoints from "./UserPoints";

const IsLogin = () => {
  const { user, logout } = useAuthStore();

  return (
    <div className="flex items-center justify-center gap-1">
      <div className="flex items-center">
        <Button variant="link">
          <Avatar className="h-6 w-6">
            <AvatarImage src={"https://github.com/shadcn.png"} alt={user?.displayName ?? "Guest"} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Link to={"/mypage"}>{user?.displayName ?? "Guest"}</Link>
        </Button>

        <UserPoints userId={user?.uid || ""} />
      </div>

      <Button onClick={logout} variant="ghost">
        로그아웃
      </Button>
    </div>
  );
};

export default IsLogin;
