import { sitePublicState } from "@/utils/sitePublicState";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

interface RestrictedRouteProps {
  children: React.ReactNode;
}

/**
 * 1. 사이트에 접속한다
 * 2. 사이트에서 사이트 상태를 조회한다.
 * - 쿠키 조회 -> DB 조회
 * - 쿠키가 있는지 확인함. (쿠키가 없으면 비공개 상태)
 * - 쿠키가 있는지 확인함. (쿠키가 있으면 공개 상태)
 *
 * 3. 사이트 상태가 공개되어 있으면 사이트에 접속한다. - 쿠키 발급
 * 4. 사이트 상태가 비공개되어 있으면 RestrictedPage로 이동한다.
 * 5. RestrictedPage에서 key를 입력하면 사이트에 접속할 수 있다. - 쿠키 발급
 */

const RestrictedRoute = ({ children }: RestrictedRouteProps) => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["SpecialCookie"]);

  useEffect(() => {
    const fetchState = async () => {
      const state = await sitePublicState();

      console.log("Public state: ", state);

      if (state) {
        return;
      } else {
        navigate("/restricted", { replace: true });
      }
    };

    // 쿠키가 있으면 메인 페이지로 이동
    if (cookies.SpecialCookie) {
      navigate("/");
    } else {
      fetchState();
    }
  }, [cookies, setCookie]);

  return <>{children}</>;
};

export default RestrictedRoute;
