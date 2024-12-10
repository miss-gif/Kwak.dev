import { db } from "@/firebaseConfig";
import useCalendar from "@/hooks/Calendar/use-Calendar";
import { useAuthStore } from "@/stores/authStore";
import { ko } from "date-fns/locale";
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

// 타입 정의
type AttendanceData = {
  uids: string[];
  count: number;
};

const Calendar: React.FC = () => {
  const { holidays, loading, selected, setSelected, handleMonthChange } = useCalendar();
  const { user } = useAuthStore();

  const [attendanceCount, setAttendanceCount] = useState<number>(0);
  const [userAttendance, setUserAttendance] = useState<Date[]>([]);

  // 오늘인지 확인
  const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  };

  // 날짜 형식을 YYYY-MM-DD로 변환
  const formatDate = (date: Date): string =>
    date
      .toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\./g, "")
      .replace(/\s/g, "-");

  // Firestore에서 출석 데이터 가져오기
  const fetchAttendanceDoc = async (date: string): Promise<AttendanceData | null> => {
    const docRef = doc(db, "attendance", date);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? (docSnap.data() as AttendanceData) : null;
  };

  // Firestore에 출석 데이터 저장
  const saveAttendance = async (userUid: string, date: string): Promise<void> => {
    try {
      const data = await fetchAttendanceDoc(date);
      if (data) {
        if (data.uids.includes(userUid)) {
          throw new Error("이미 오늘 출석했습니다!");
        }
        await setDoc(
          doc(db, "attendance", date),
          { uids: [...data.uids, userUid], count: data.count + 1 },
          { merge: true },
        );
      } else {
        await setDoc(doc(db, "attendance", date), { uids: [userUid], count: 1 });
      }
    } catch (error) {
      throw error;
    }
  };

  // 출석 인원 가져오기
  const fetchAttendanceCount = async (date: string): Promise<number> => {
    try {
      const data = await fetchAttendanceDoc(date);
      return data?.count || 0;
    } catch (error) {
      console.error("출석 인원 가져오기 실패:", error);
      return 0;
    }
  };

  // 사용자 출석 데이터 가져오기
  const fetchUserAttendance = async (userUid: string): Promise<Date[]> => {
    try {
      const q = query(collection(db, "attendance"), where("uids", "array-contains", userUid));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => new Date(doc.id));
    } catch (error) {
      console.error("사용자 출석 데이터 가져오기 실패:", error);
      return [];
    }
  };

  // 사용자가 특정 날짜에 출석했는지 확인
  const isUserPresent = (date: Date): boolean =>
    userAttendance.some(
      (attendedDate) =>
        attendedDate.getFullYear() === date.getFullYear() &&
        attendedDate.getMonth() === date.getMonth() &&
        attendedDate.getDate() === date.getDate(),
    );

  // 출석 처리
  const processAttendance = async (selectedDate: Date): Promise<string> => {
    if (!selectedDate) throw new Error("날짜를 선택해주세요!");
    if (!isToday(selectedDate)) throw new Error("출석은 당일에만 가능합니다!");
    const date = formatDate(selectedDate);
    await saveAttendance(user?.uid!, date);
    return date;
  };

  // 출석 체크 버튼 클릭 핸들러
  const handleAttendance = async (): Promise<void> => {
    try {
      const date = await processAttendance(selected!);
      alert(`${date} 출석 체크 완료!`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  // 초기 데이터 로드
  useEffect(() => {
    if (user) {
      const fetchData = async (): Promise<void> => {
        const userAttendanceDates = await fetchUserAttendance(user.uid);
        setUserAttendance(userAttendanceDates);
      };
      fetchData();
    }
  }, [user]);

  useEffect(() => {
    if (user && selected) {
      const date = formatDate(selected);
      Promise.all([fetchAttendanceCount(date), fetchUserAttendance(user.uid)]).then(([count, userAttendanceDates]) => {
        setAttendanceCount(count);
        setUserAttendance(userAttendanceDates);
      });
    }
  }, [user, selected]);

  return (
    <div>
      {loading && <p>로딩 중...</p>}
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        onMonthChange={handleMonthChange}
        locale={ko}
        weekStartsOn={0}
        modifiers={{
          saturday: (date) => date.getDay() === 6,
          sunday: (date) => date.getDay() === 0,
          holiday: holidays,
          present: isUserPresent,
        }}
        modifiersClassNames={{
          saturday: "text-blue-500",
          sunday: "text-red-500",
          holiday: "text-red-500",
          present: "bg-green-500 text-white",
        }}
        footer={
          selected
            ? `선택된 날짜(${selected.toLocaleDateString()})의 출석 인원: ${attendanceCount}명`
            : "날짜를 선택해주세요"
        }
      />
      <button onClick={handleAttendance} className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
        출석 체크
      </button>
    </div>
  );
};

export default Calendar;
