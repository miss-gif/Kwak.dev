// 컴포넌트 제한: 유저 권한 확인

import { useAuthStore } from "@/stores/authStore";

interface UserAuthProps {
  children: React.ReactNode;
}

const UserAuth = ({ children }: UserAuthProps) => {
  const { user } = useAuthStore();

  return <div>{user && children}</div>;
};

export default UserAuth;
