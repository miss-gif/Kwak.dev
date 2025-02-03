import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

const useSiteStateCookie = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["site-auth"]);

  // 쿠키에 인증 상태 저장
  const setAuthCookie = (isAdminAuthenticated: boolean, options = {}) => {
    setCookie("site-auth", isAdminAuthenticated, {
      path: "/",
      maxAge: 3600 * 12, // 기본 1시간
      secure: true,
      sameSite: "strict",
      ...options, // 추가 옵션 병합
    });
  };

  // 인증 상태 확인
  const isAdminAuthenticated = (): boolean => {
    return Boolean(cookies["site-auth"]);
  };

  // 인증 상태 삭제 (로그아웃)
  const clearAdminAuthCookie = () => {
    removeCookie("site-auth", { path: "/" });
    toast.success("사이트 접근권한 해제");
  };

  return { isAdminAuthenticated, setAuthCookie, clearAdminAuthCookie };
};

export default useSiteStateCookie;
