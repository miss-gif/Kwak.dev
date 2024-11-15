import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { ko } from "date-fns/locale";

// 한국 공휴일 데이터를 정의
const holidays = [
  new Date(2024, 0, 1), // 새해
  new Date(2024, 2, 1), // 삼일절
  new Date(2024, 4, 5), // 어린이날
  // 공휴일 추가...
];

function Calendar() {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      locale={ko}
      weekStartsOn={0} // 월요일 시작
      modifiers={{
        saturday: (date: Date) => date.getDay() === 6, // 토요일
        sunday: (date: Date) => date.getDay() === 0, // 일요일
        holiday: holidays, // 공휴일
      }}
      modifiersClassNames={{
        saturday: "text-blue-500", // 토요일 색상
        sunday: "text-red-500", // 일요일 색상
        holiday: "bg-red-200 text-red-700 font-bold", // 공휴일 스타일
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
