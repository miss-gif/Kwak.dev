import { chartData } from "@/features/Charts/components/VisitorsChat/chartData";
import { db } from "@/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export const saveDummyData = async () => {
  const month = "2024-12"; // 저장할 월 (차트 데이터에 맞게 지정)
  const docRef = doc(db, "visitors", `monthlyViews-${month}`);

  try {
    await setDoc(docRef, { views: chartData });
    toast.success("더미 데이터가 Firestore에 저장되었습니다!");
  } catch (error) {
    toast.error("더미 데이터 저장 실패");
    console.error("저장 오류:", error);
  }
};
