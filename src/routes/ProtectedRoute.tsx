import { useAuthStore } from "@/stores/authStore";
import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

// ProtectedRoute는 사용자가 인증되지 않았을 때
// 이전 페이지 정보를 location.state에 저장해 LoginPage에서 활용할 수 있도록 함

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuthStore();
  const location = useLocation();

  // 로그인 상태가 아니라면 로그인 페이지로 이동
  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
