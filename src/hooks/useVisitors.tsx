import { db } from "@/firebaseConfig";
import { format, subMonths } from "date-fns";
import { doc, getDoc, runTransaction } from "firebase/firestore";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

interface Cookies {
  lastVisit?: string;
}

interface VisitorCount {
  desktopCount: number;
  mobileCount: number;
}

interface MonthlyData {
  date: string;
  desktop: number;
  mobile: number;
}

export const useVisitors = (cookies: Cookies, setCookie: any) => {
  const [totalCount, setTotalCount] = useState<VisitorCount>({ desktopCount: 0, mobileCount: 0 });
  const [monthCount, setMonthCount] = useState<MonthlyData[]>([]);
  const [todayCount, setTodayCount] = useState<VisitorCount>({ desktopCount: 0, mobileCount: 0 });

  // 페이지 뷰 증가 함수
  const incrementPageViews = async () => {
    const today = format(new Date(), "yyyy-MM-dd");
    const month = format(new Date(), "yyyy-MM");
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const deviceType = isMobile ? "mobile" : "desktop";

    if (cookies.lastVisit) {
      return;
    }

    try {
      await runTransaction(db, async (transaction) => {
        const totalRef = doc(db, "visitors", "totalViews");
        const dailyRef = doc(db, "visitors", `dailyViews-${today}`);
        const monthlyRef = doc(db, "visitors", `monthlyViews-${month}`);

        const totalSnap = await transaction.get(totalRef);
        const dailySnap = await transaction.get(dailyRef);
        const monthlySnap = await transaction.get(monthlyRef);

        const totalData = totalSnap.exists() ? (totalSnap.data() as VisitorCount) : { desktopCount: 0, mobileCount: 0 };
        const dailyData = dailySnap.exists() ? (dailySnap.data() as VisitorCount) : { desktopCount: 0, mobileCount: 0 };
        const monthlyData = monthlySnap.exists() ? (monthlySnap.data().views as MonthlyData[]) : [];

        const newTotalCount = {
          desktopCount: deviceType === "desktop" ? totalData.desktopCount + 1 : totalData.desktopCount,
          mobileCount: deviceType === "mobile" ? totalData.mobileCount + 1 : totalData.mobileCount,
        };

        const existingEntryIndex = monthlyData.findIndex((entry) => entry.date === today);

        if (existingEntryIndex >= 0) {
          monthlyData[existingEntryIndex] = {
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
        } else {
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

        transaction.set(totalRef, newTotalCount, { merge: true });
        transaction.set(monthlyRef, { views: monthlyData }, { merge: true });
        transaction.set(dailyRef, { ...newTodayCount, date: today }, { merge: true });

        setTotalCount(newTotalCount);
        setTodayCount(newTodayCount);

        toast.success("방문해 주셔서 감사합니다!");
      });

      setCookie("lastVisit", "true", { path: "/", maxAge: 3600 });
    } catch (error) {
      toast.error("방문자 수 증가 실패");
      console.error("방문자 증가 오류:", error);
    }
  };

  // 방문자 수 데이터 가져오기 함수
  const fetchVisitorCounts = async () => {
    const today = format(new Date(), "yyyy-MM-dd");
    const month = format(new Date(), "yyyy-MM");

    try {
      const totalRef = doc(db, "visitors", "totalViews");
      const dailyRef = doc(db, "visitors", `dailyViews-${today}`);
      const monthlyRefs = [
        doc(db, "visitors", `monthlyViews-${month}`),
        doc(db, "visitors", `monthlyViews-${format(subMonths(new Date(), 1), "yyyy-MM")}`),
        doc(db, "visitors", `monthlyViews-${format(subMonths(new Date(), 2), "yyyy-MM")}`),
      ];

      const totalSnap = await getDoc(totalRef);
      const dailySnap = await getDoc(dailyRef);
      const monthlySnaps = await Promise.all(monthlyRefs.map((ref) => getDoc(ref)));

      setTotalCount(totalSnap.exists() ? (totalSnap.data() as VisitorCount) : { desktopCount: 0, mobileCount: 0 });
      setTodayCount(dailySnap.exists() ? (dailySnap.data() as VisitorCount) : { desktopCount: 0, mobileCount: 0 });

      const allMonthlyData: MonthlyData[] = [];
      monthlySnaps.forEach((snap) => {
        if (snap.exists()) {
          allMonthlyData.push(...(snap.data().views as MonthlyData[]));
        }
      });

      // 날짜 순서대로 정렬
      allMonthlyData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

      setMonthCount(allMonthlyData);
    } catch (error) {
      toast.error("방문자 데이터를 가져오는 데 실패했습니다.");
      console.error("데이터 페칭 오류:", error);
    }
  };

  useEffect(() => {
    fetchVisitorCounts();
  }, []);

  return { incrementPageViews, fetchVisitorCounts, todayCount, monthCount, totalCount };
};
