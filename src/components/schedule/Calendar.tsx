import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { XMLParser } from "fast-xml-parser";
import { ko } from "date-fns/locale";

function Calendar() {
  const [holidays, setHolidays] = useState<Date[]>([]);
  const [selected, setSelected] = useState<Date>();

  const fetchHolidays = async () => {
    const API_URL =
      "https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo";
    const ENCODING_KEY = import.meta.env.VITE_PUBLIC_API_KEY;

    const params = new URLSearchParams({
      serviceKey: ENCODING_KEY,
      solYear: "2024",
      solMonth: "09",
    });

    try {
      const response = await fetch(`${API_URL}?${params}`);
      const textData = await response.text();

      // 응답 데이터 로깅
      console.log("Raw Response:", textData);

      // XML 데이터 파싱
      const parser = new XMLParser();
      const jsonData = parser.parse(textData);

      // 응답에 body와 items가 있는지 확인
      if (
        jsonData &&
        jsonData.response &&
        jsonData.response.body &&
        jsonData.response.body.items &&
        Array.isArray(jsonData.response.body.items.item)
      ) {
        const items = jsonData.response.body.items.item;
        const holidayDates = items.map(
          (item: any) =>
            new Date(
              item.locdate
                .toString()
                .replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"),
            ),
        );

        console.log(holidayDates); // 공휴일 날짜 출력
        setHolidays(holidayDates); // 공휴일 상태 업데이트
      } else {
        console.error("공휴일 데이터가 없습니다.");
      }
    } catch (error) {
      console.error("공휴일 데이터를 가져오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchHolidays();
  }, []);

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      locale={ko}
      weekStartsOn={0} // 일요일 시작
      modifiers={{
        saturday: (date: Date) => date.getDay() === 6, // 토요일
        sunday: (date: Date) => date.getDay() === 0, // 일요일
        holiday: holidays, // 공휴일
      }}
      modifiersClassNames={{
        saturday: "text-blue-500",
        sunday: "text-red-500",
        holiday: "text-red-500",
      }}
      footer={
        selected
          ? `선택된 날짜는 ${selected.toLocaleDateString()} 입니다`
          : "날짜를 선택해주세요"
      }
    />
  );
}

export default Calendar;
