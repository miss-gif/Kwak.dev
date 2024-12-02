import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

const useAdminAuthCookie = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["admin-auth"]);

  // 쿠키에 인증 상태 저장
  const setAuthCookie = (isAdminAuthenticated: boolean, options = {}) => {
    setCookie("admin-auth", isAdminAuthenticated, {
      path: "/",
      maxAge: 3600, // 기본 1시간
      secure: true,
      sameSite: "strict",
      ...options, // 추가 옵션 병합
    });
  };

  // 인증 상태 확인
  const isAdminAuthenticated = (): boolean => {
    return Boolean(cookies["admin-auth"]);
  };

  // 인증 상태 삭제 (로그아웃)
  const clearAdminAuthCookie = () => {
    removeCookie("admin-auth", { path: "/" });
    toast.success("관리자 모드 해제");
  };

  return { isAdminAuthenticated, setAuthCookie, clearAdminAuthCookie };
};

export default useAdminAuthCookie;
