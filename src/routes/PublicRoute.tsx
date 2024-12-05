import { useAuthStore } from "@/stores/authStore";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  children: ReactNode;
}

// 로그인한 사용자가 접근할 수 없는 페이지를 위한 컴포넌트
const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { user } = useAuthStore();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
