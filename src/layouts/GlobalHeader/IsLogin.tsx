import { Button } from "@/components/ui/button";
import usePoints from "@/features/Point/hooks/use-Points";
import { useAuthStore } from "@/stores/authStore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const IsLogin = () => {
  const { user, isLoggedIn, logout } = useAuthStore();
  const { getUserPoints } = usePoints();
  const [point, setPoint] = useState<number>(0); // 초기값 설정

  useEffect(() => {
    if (!isLoggedIn || !user?.uid) {
      return;
    }

    const fetchPoint = async () => {
      try {
        const userPoint = await getUserPoints(user.uid);
        console.log("userPoint", userPoint.toLocaleString());
        setPoint(userPoint);
      } catch (error) {
        console.error("포인트 조회 실패:", error);
      }
    };

    fetchPoint();
  }, [isLoggedIn, user?.uid, getUserPoints]);

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

        <Button variant="ghost">
          <Link to={"/point"} className="flex items-center gap-1">
            <MonetizationOnIcon sx={{ color: "yellowgreen" }} />
            {point !== null ? point.toLocaleString() : "조회 중..."}
          </Link>
        </Button>
      </div>

      <Button onClick={logout} variant="ghost">
        로그아웃
      </Button>
    </div>
  );
};

export default IsLogin;
