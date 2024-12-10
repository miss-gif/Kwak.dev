import { db } from "@/firebaseConfig";
import { XMLParser } from "fast-xml-parser";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import "react-day-picker/style.css";

const useCalendar = () => {
  const [holidays, setHolidays] = useState<Date[]>([]);
  const [selected, setSelected] = useState<Date>();
  const [loading, setLoading] = useState<boolean>(false);

  // API를 통해 공휴일 데이터 가져오기
  const fetchHolidays = async (year: string, month: string) => {
    const API_URL = "https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo";
    const ENCODING_KEY = import.meta.env.VITE_PUBLIC_API_KEY;

    const params = new URLSearchParams({
      serviceKey: ENCODING_KEY,
      solYear: year,
      solMonth: month,
    });

    try {
      const response = await fetch(`${API_URL}?${params}`);
      const textData = await response.text();

      // 실제 XML 데이터를 출력
      console.log("공휴일 데이터:", textData);

      // XML 데이터 파싱
      const parser = new XMLParser();
      const jsonData = parser.parse(textData);

      // 파싱된 데이터 구조 확인
      console.log("파싱된 데이터:", jsonData);

      if (jsonData && jsonData.response && jsonData.response.body && jsonData.response.body.items) {
        const items = jsonData.response.body.items.item;

        // items가 배열이 아닌 경우 배열로 변환
        const holidays = Array.isArray(items) ? items : [items];

        const holidayDates = holidays.map(
          (item: any) => new Date(item.locdate.toString().replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")),
        );

        // Firestore에 저장
        await setDoc(doc(db, "holidays", `${year}-${month}`), {
          holidays: holidayDates,
        });

        return holidayDates;
      } else {
        await setDoc(doc(db, "holidays", `${year}-${month}`), {
          holidays: [],
        });
        throw new Error("공휴일 데이터가 없습니다.");
      }
    } catch (error) {
      console.error("공휴일 데이터를 가져오는 중 오류 발생:", error);
      return [];
    }
  };

  // Firebase에서 공휴일 데이터 가져오기
  const getHolidaysFromFirestore = async (year: string, month: string) => {
    const docRef = doc(db, "holidays", `${year}-${month}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Firestore의 timestamp를 Date 객체로 변환
      return docSnap.data().holidays.map((holiday: any) => holiday.toDate()); // .toDate()로 변환
    } else {
      return null;
    }
  };

  // 공휴일 데이터 로딩 함수
  const loadHolidays = async (year: string, month: string) => {
    setLoading(true);

    // Firebase에서 데이터 가져오기
    let holidayDates = await getHolidaysFromFirestore(year, month);

    if (!holidayDates) {
      // Firebase에 데이터가 없다면 API 요청
      holidayDates = await fetchHolidays(year, month);
    }

    setHolidays(holidayDates);
    setLoading(false);
  };

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear().toString();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");

    loadHolidays(currentYear, currentMonth);
  }, []);

  // 월 변경 시 호출되는 함수
  const handleMonthChange = (date: Date) => {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    loadHolidays(year, month);
  };

  return { holidays, loading, selected, setSelected, handleMonthChange };
};

export default useCalendar;
