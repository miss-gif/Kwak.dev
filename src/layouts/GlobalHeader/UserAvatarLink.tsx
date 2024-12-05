import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/authStore";
import { Link } from "react-router-dom";

const UserAvatarLink = () => {
  const { user } = useAuthStore();

  return (
    <Button variant="link">
      <Avatar className="h-6 w-6">
        <AvatarImage src={"https://github.com/shadcn.png"} alt={user?.displayName ?? "Guest"} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Link to={"/mypage"}>{user?.displayName ?? "Guest"}</Link>
    </Button>
  );
};

export default UserAvatarLink;
