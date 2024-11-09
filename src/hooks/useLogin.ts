import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
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
