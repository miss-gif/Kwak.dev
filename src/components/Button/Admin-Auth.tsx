import useAdminAuthCookie from "@/hooks/use-AdminAuthCookie";
import { ReactElement, cloneElement } from "react";
import { toast } from "react-toastify";

// 어드민 권한 여부에 따라 클릭 이벤트를 막는 컴포넌트

interface AdminAuthProps {
  children: ReactElement;
}

const AdminAuth = ({ children }: AdminAuthProps) => {
  const { isAdminAuthenticated } = useAdminAuthCookie();

  const handleClick = (e: React.MouseEvent) => {
    if (!isAdminAuthenticated) {
      e.preventDefault(); // 기본 동작 차단
      toast.error("관리자 권한이 필요합니다.");
    }
  };

  // 자식 컴포넌트에 클릭 이벤트 주입
  return cloneElement(children, { onClick: handleClick });
};

export default AdminAuth;
