import { useAuthStore } from "@/stores/authStore";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { user } = useAuthStore();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
