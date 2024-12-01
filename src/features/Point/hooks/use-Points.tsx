import { db } from "@/firebaseConfig";
import { doc, getDoc, increment, updateDoc } from "firebase/firestore";

const usePoints = () => {
  // 사용자 포인트 업데이트
  const updateUserPoints = async (userId: string, amount: number) => {
    try {
      // 사용자 문서 참조
      const userDocRef = doc(db, "users", userId);

      // 사용자 문서 가져오기
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        // 포인트 업데이트
        await updateDoc(userDocRef, {
          points: increment(amount), // 기존 포인트에 amount를 추가
        });
        console.log("포인트 업데이트 완료");
      } else {
        throw new Error("사용자 문서가 존재하지 않습니다.");
      }
    } catch (error) {
      console.error("포인트 업데이트 실패:", error);
      throw new Error("포인트 업데이트 실패");
    }
  };

  const getUserPoints = async (userId: string) => {
    try {
      // 사용자 문서 참조
      const userDocRef = doc(db, "users", userId);

      // 사용자 문서 가져오기
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        return userDoc.data().points;
      } else {
        throw new Error("사용자 문서가 존재하지 않습니다.");
      }
    } catch (error) {
      console.error("포인트 조회 실패:", error);
      throw new Error("포인트 조회 실패");
    }
  };

  return { updateUserPoints, getUserPoints };
};

export default usePoints;
