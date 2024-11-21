import { useAuthStore } from "@/stores/authStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// 로그인 상태가 아니면 로그인 페이지로 이동
export const useRequireLogin = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  useEffect(() => {
    if (user === null) {
      toast.warning("로그인이 필요합니다.");
      navigate("/login");
    }
  }, [user]);
};

// 로그인 상태라면 메인 페이지로 이동
export const usePageGuard = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  useEffect(() => {
    if (user) {
      toast.warning("제한된 페이지입니다.");
      navigate("/");
    }
  }, [user]);
};
