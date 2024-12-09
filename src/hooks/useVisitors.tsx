// hooks/useVisitors.js
import { db } from "@/firebaseConfig";
import { format } from "date-fns";
import { doc, getDoc, runTransaction } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";

interface Cookies {
  lastVisit?: string;
}

export const useVisitors = (cookies: Cookies, setCookie: any) => {
  const [totalCount, setTotalCount] = useState(null);
  const [monthCount, setMonthCount] = useState(null);
  const [todayCount, setTodayCount] = useState(null);

  // 방문자 수 증가
  const incrementPageViews = async () => {
    const today = format(new Date(), "yyyy-MM-dd");
    const month = format(new Date(), "yyyy-MM");

    if (cookies.lastVisit) {
      console.log("쿠키가 존재하여 카운트를 증가시키지 않습니다.");
      return;
    }

    try {
      await runTransaction(db, async (transaction) => {
        const totalRef = doc(db, "visitors", "totalViews");
        const monthlyRef = doc(db, "visitors", `monthlyViews-${month}`);
        const dailyRef = doc(db, "visitors", `dailyViews-${today}`);

        const totalSnap = await transaction.get(totalRef);
        const monthlySnap = await transaction.get(monthlyRef);
        const dailySnap = await transaction.get(dailyRef);

        const newTotalCount = totalSnap.exists() ? totalSnap.data().count + 1 : 1;
        const newMonthCount = monthlySnap.exists() ? monthlySnap.data().count + 1 : 1;
        const newTodayCount = dailySnap.exists() ? dailySnap.data().count + 1 : 1;

        transaction.set(totalRef, { count: newTotalCount }, { merge: true });
        transaction.set(dailyRef, { count: newTodayCount, date: today }, { merge: true });
        transaction.set(monthlyRef, { count: newMonthCount, date: month }, { merge: true });

        setTotalCount(newTotalCount);
        setMonthCount(newMonthCount);
        setTodayCount(newTodayCount);

        toast.success("방문해 주셔서 감사합니다!");
        toast.success(`오늘 방문자 수: ${newTodayCount}`);
      });

      setCookie("lastVisit", "true", { path: "/", maxAge: 3600 }); // 1시간
    } catch (error) {
      toast.error("방문자 수 증가 실패");
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

      setTotalCount(totalSnap.exists() ? totalSnap.data().count : 0);
      setTodayCount(dailySnap.exists() ? dailySnap.data().count : 0);
      setMonthCount(monthlySnap.exists() ? monthlySnap.data().count : 0);
    } catch (error) {
      toast.error("방문자 데이터를 가져오는 데 실패했습니다.");
      console.error("데이터 페칭 오류:", error);
    }
  };

  return { incrementPageViews, fetchVisitorCounts, todayCount, monthCount, totalCount };
};
