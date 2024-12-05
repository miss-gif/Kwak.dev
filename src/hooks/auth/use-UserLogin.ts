import { userLogin } from "@/api/auth/auth";
import { useAuthStore } from "@/stores/authStore";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface UseLoginProps {
  initialEmail?: string;
  initialPassword?: string;
}

export const useUserLogin = ({ initialEmail = "", initialPassword = "" }: UseLoginProps) => {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const user = await userLogin(email, password);
      setUser(user); // 로그인 성공 시 user 정보를 저장

      const from = location.state?.from?.pathname || "/"; // 이전 페이지로 이동
      navigate(from, { replace: true });
      toast.success("로그인 되었습니다.");
    } catch (error: any) {
      setError("로그인 실패");
      toast.error("로그인에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    handleLogin,
  };
};
