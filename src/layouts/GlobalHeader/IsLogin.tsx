import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/authStore";
import UserAvatarLink from "./UserAvatarLink";
import UserPoints from "./UserPoints";

const IsLogin = () => {
  const { user, logout } = useAuthStore();

  return (
    <div className="flex items-center justify-center gap-1">
      <div className="hidden items-center sm:flex">
        <UserAvatarLink />

        <UserPoints userId={user?.uid || ""} />
      </div>

      <Button onClick={logout} variant="ghost">
        로그아웃
      </Button>
    </div>
  );
};

export default IsLogin;
