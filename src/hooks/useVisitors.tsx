import { db } from "@/firebaseConfig";
import { format } from "date-fns";
import { doc, getDoc, runTransaction } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";

interface Cookies {
  lastVisit?: string;
}

export const useVisitors = (cookies: Cookies, setCookie: any) => {
  const [totalCount, setTotalCount] = useState({ desktopCount: 0, mobileCount: 0 });
  const [monthCount, setMonthCount] = useState<Array<{ date: string; desktop: number; mobile: number }>>([]);
  const [todayCount, setTodayCount] = useState({ desktopCount: 0, mobileCount: 0 });

  // 방문자 수 증가
  const incrementPageViews = async () => {
    const today = format(new Date(), "yyyy-MM-dd");
    const month = format(new Date(), "yyyy-MM");
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const deviceType = isMobile ? "mobile" : "desktop";

    if (cookies.lastVisit) {
      console.log("쿠키가 존재하여 카운트를 증가시키지 않습니다.");
      return;
    }

    try {
      await runTransaction(db, async (transaction) => {
        const totalRef = doc(db, "visitors", "totalViews");
        const dailyRef = doc(db, "visitors", `dailyViews-${today}`);

        const monthlyRef = doc(db, "visitors", `monthlyViews-${month}`);

        const monthlySnap = await transaction.get(monthlyRef);
        const monthlyData = monthlySnap.exists() ? monthlySnap.data().views : [];

        const totalSnap = await transaction.get(totalRef);
        const dailySnap = await transaction.get(dailyRef);

        const totalData = totalSnap.exists() ? totalSnap.data() : { desktopCount: 0, mobileCount: 0 };
        const dailyData = dailySnap.exists() ? dailySnap.data() : { desktopCount: 0, mobileCount: 0 };

        // 디바이스별 카운트 증가
        const newTotalCount = {
          desktopCount: deviceType === "desktop" ? totalData.desktopCount + 1 : totalData.desktopCount,
          mobileCount: deviceType === "mobile" ? totalData.mobileCount + 1 : totalData.mobileCount,
        };

        // 날짜별 데이터를 찾기
        const existingEntryIndex = monthlyData.findIndex((entry: any) => entry.date === today);

        if (existingEntryIndex >= 0) {
          // 기존 데이터 업데이트
          const updatedEntry = {
            ...monthlyData[existingEntryIndex],
            desktop:
              deviceType === "desktop"
                ? monthlyData[existingEntryIndex].desktop + 1
                : monthlyData[existingEntryIndex].desktop,
            mobile:
              deviceType === "mobile"
                ? monthlyData[existingEntryIndex].mobile + 1
                : monthlyData[existingEntryIndex].mobile,
          };
          monthlyData[existingEntryIndex] = updatedEntry;
        } else {
          // 새로운 데이터 추가
          monthlyData.push({
            date: today,
            desktop: deviceType === "desktop" ? 1 : 0,
            mobile: deviceType === "mobile" ? 1 : 0,
          });
        }

        const newTodayCount = {
          desktopCount: deviceType === "desktop" ? dailyData.desktopCount + 1 : dailyData.desktopCount,
          mobileCount: deviceType === "mobile" ? dailyData.mobileCount + 1 : dailyData.mobileCount,
        };

        // Firestore에 데이터 저장
        transaction.set(totalRef, newTotalCount, { merge: true });
        transaction.set(monthlyRef, { views: monthlyData }, { merge: true });
        transaction.set(dailyRef, { ...newTodayCount, date: today }, { merge: true });

        // React 상태 업데이트
        setTotalCount(newTotalCount);
        setTodayCount(newTodayCount);

        toast.success("방문해 주셔서 감사합니다!");
        console.log(`${deviceType === "desktop" ? "desktop" : "mobile"} Access`);
      });

      setCookie("lastVisit", "true", { path: "/", maxAge: 3600 }); // 1시간
    } catch (error) {
      toast.error("방문자 수 증가 실패");
      console.error("방문자 증가 오류:", error);
    }
  };

  // 방문자 수 가져오기
  const fetchVisitorCounts = async () => {
    const today = format(new Date(), "yyyy-MM-dd");
    const month = format(new Date(), "yyyy-MM");

    try {
      const totalRef = doc(db, "visitors", "totalViews");
      const dailyRef = doc(db, "visitors", `dailyViews-${today}`);
      const monthlyRef = doc(db, "visitors", `monthlyViews-${month}`);

      const totalSnap = await getDoc(totalRef);
      const dailySnap = await getDoc(dailyRef);
      const monthlySnap = await getDoc(monthlyRef);

      setTotalCount(
        totalSnap.exists()
          ? (totalSnap.data() as { desktopCount: number; mobileCount: number })
          : { desktopCount: 0, mobileCount: 0 },
      );
      setTodayCount(
        dailySnap.exists()
          ? (dailySnap.data() as { desktopCount: number; mobileCount: number })
          : { desktopCount: 0, mobileCount: 0 },
      );
      setMonthCount(
        monthlySnap.exists()
          ? (monthlySnap.data().views as Array<{ date: string; desktop: number; mobile: number }>)
          : [],
      );
    } catch (error) {
      toast.error("방문자 데이터를 가져오는 데 실패했습니다.");
      console.error("데이터 페칭 오류:", error);
    }
  };

  return { incrementPageViews, fetchVisitorCounts, todayCount, monthCount, totalCount };
};
