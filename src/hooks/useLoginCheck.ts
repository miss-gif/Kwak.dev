import { useAuthStore } from "@/components/stores/authStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 로그인 상태 확인 후 로그인 페이지로 이동하는 훅
export const useRequireLogin = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user]);
};

// 회원가입 후 이전 페이지로 이동하는 훅
export const useSignupAndReturn = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  useEffect(() => {
    if (user) {
      navigate(-2);
    }
  }, [user]);
};
