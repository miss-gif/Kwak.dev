// 컴포넌트 제한: 관리자 권한 확인

import useAdminAuthCookie from "@/hooks/use-AdminAuthCookie";

interface AdminAuthProps {
  children: React.ReactNode;
}

const AdminAuth = ({ children }: AdminAuthProps) => {
  const { isAdminAuthenticated } = useAdminAuthCookie();

  return <div>{isAdminAuthenticated() && children}</div>;
};

export default AdminAuth;
