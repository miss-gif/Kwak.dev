import { useVisitors } from "@/hooks/useVisitors";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const Visitors = () => {
  const [cookies, setCookie] = useCookies(["lastVisit"]);
  const { incrementPageViews, fetchVisitorCounts, todayCount, totalCount } = useVisitors(cookies, setCookie);

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
    <div className="flex justify-end gap-2">
      <p className="text-xs">TODAY {todayCount.desktopCount + todayCount.mobileCount}</p>
      <p className="text-xs">TOTAL {totalCount.desktopCount + totalCount.mobileCount}</p>
    </div>
  );
};

export default Visitors;
