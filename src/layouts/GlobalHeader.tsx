import usePoints from "@/features/Point/hooks/use-Points";
import { useAuthStore } from "@/stores/authStore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GlobalHeader = () => {
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
  }, [isLoggedIn, user?.uid, getUserPoints]); // 의존성 배열 수정

  return (
    <div className="flex h-16 w-full items-center justify-end gap-5 px-4 lg:px-10">
      {isLoggedIn ? (
        <>
          <p className="text-sm">보유 포인트: {point !== null ? point.toLocaleString() : "조회 중..."}</p>
          <Link to={"/mypage"} className="text-sm hover:text-blue-500">
            {user?.displayName ?? "Guest"}
          </Link>
          <button onClick={logout} className="text-sm">
            로그아웃
          </button>
        </>
      ) : (
        <>
          <Link to={"/signup"} className="text-sm hover:font-semibold hover:text-blue-500">
            회원가입
          </Link>
          <Link
            to={"/login"}
            className="rounded-xl border-2 border-black px-5 py-2 text-sm font-semibold hover:border-blue-500 hover:bg-blue-500 hover:text-white"
          >
            로그인
          </Link>
        </>
      )}
    </div>
  );
};

export default GlobalHeader;
