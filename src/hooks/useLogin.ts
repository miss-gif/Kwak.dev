import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthStore } from "@/stores/authStore";

interface UseLoginProps {
  initialEmail?: string;
  initialPassword?: string;
}

export const useLogin = ({
  initialEmail = "",
  initialPassword = "",
}: UseLoginProps) => {
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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      setUser(userCredential.user); // Zustand 스토어에 로그인 상태 설정

      // 이전 경로로 이동 (기본값: "/")
      const from = location.state?.from?.pathname || "/";
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
