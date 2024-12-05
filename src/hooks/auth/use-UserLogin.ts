import { userLogin } from "@/api/auth/auth";
import { useAuthStore } from "@/stores/authStore";
import { InitUserLoginProps } from "@/types/auth/auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useUserLogin = ({ initialEmail = "", initialPassword = "" }: InitUserLoginProps) => {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // error 상태를 초기화
  const navigate = useNavigate();
  const location = useLocation();
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // 로그인 시도 전 에러 상태 초기화

    // 유효성 검사
    if (!email || !password) {
      const errorMsg = "이메일과 비밀번호를 모두 입력해주세요."; // 유효성 검사 메시지
      setError(errorMsg); // error 상태 업데이트
      toast.error(errorMsg); // 오류 메시지 표시
      setLoading(false); // 로딩 상태 종료
      return;
    }

    try {
      const user = await userLogin(email, password); // 로그인 API 호출
      setUser(user); // 로그인 성공 시 user 정보 상태에 저장

      const from = location.state?.from?.pathname || "/"; // 이전 페이지로 리디렉션
      navigate(from, { replace: true });
      toast.success("로그인 되었습니다.");
    } catch (error: any) {
      setError("로그인 실패"); // 로그인 실패 시 error 상태 업데이트
      toast.error("로그인에 실패했습니다.");
    } finally {
      setLoading(false); // 로딩 상태 종료
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error, // error 상태 반환
    loading, // loading 상태 반환
    handleLogin,
  };
};
