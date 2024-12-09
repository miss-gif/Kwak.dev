import { useVisitors } from "@/hooks/useVisitors";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const Visitors = () => {
  const [cookies, setCookie] = useCookies(["lastVisit"]);
  const { incrementPageViews, fetchVisitorCounts, todayCount, monthCount, totalCount } = useVisitors(
    cookies,
    setCookie,
  );

  useEffect(() => {
    const handleVisitors = async () => {
      // 방문자 데이터를 가져옴
      await fetchVisitorCounts();

      // 쿠키가 없을 때만 카운트 증가
      if (!cookies.lastVisit) {
        await incrementPageViews();
      }
    };

    handleVisitors();
  }, [cookies, setCookie]);

  return (
    <div>
      <h3>방문자 통계</h3>
      <p>오늘 방문자 수: {todayCount ?? "로딩 중..."}</p>
      <p>이번 달 방문자 수: {monthCount ?? "로딩 중..."}</p>
      <p>전체 방문자 수: {totalCount ?? "로딩 중..."}</p>
    </div>
  );
};

export default Visitors;
