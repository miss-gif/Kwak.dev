import { useAuthStore } from "@/stores/authStore";
import { Navigate } from "react-router-dom";

interface RestrictedRouteProps {
  children: React.ReactNode;
}

/**
 * 1. 사이트에 접속한다
 * 2. 사이트에서 사이트 상태를 조회한다.
 * - 쿠키 조회 -> DB 조회
 * - 쿠키가 있는지 확인함. (쿠키가 없으면 비공개 상태)
 * - 쿠키가 있는지 확인함. (쿠키가 있으면 공개 상태)
 *
 * 3. 사이트 상태가 공개되어 있으면 사이트에 접속한다. - 쿠키 발급
 * 4. 사이트 상태가 비공개되어 있으면 RestrictedPage로 이동한다.
 * 5. RestrictedPage에서 key를 입력하면 사이트에 접속할 수 있다. - 쿠키 발급
 */

const RestrictedRoute = ({ children }: RestrictedRouteProps) => {
  const { user } = useAuthStore();

  if (user) {
    return <Navigate to="/restricted" replace />;
  }

  return <>{children}</>;
};

export default RestrictedRoute;
