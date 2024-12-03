import { db } from "@/firebaseConfig";
import { doc, getDoc, increment, updateDoc } from "firebase/firestore";

const usePoints = () => {
  // 사용자 포인트 업데이트
  const updateUserPoints = async (userId: string, amount: number): Promise<void> => {
    try {
      const userDocRef = doc(db, "users", userId);

      const userDoc = await getDoc(userDocRef);
      if (!userDoc.exists()) {
        throw new Error("사용자 문서가 존재하지 않습니다."); // 사용자 문서가 존재하지 않습니다.
      }

      await updateDoc(userDocRef, {
        points: increment(amount),
      });

      console.log("포인트가 성공적으로 업데이트되었습니다."); // 포인트가 성공적으로 업데이트되었습니다.
    } catch (error) {
      console.error("Failed to update user points:", error);
      throw error;
    }
  };

  // 사용자 포인트 조회
  const getUserPoints = async (userId: string): Promise<number> => {
    try {
      const userDocRef = doc(db, "users", userId);

      const userDoc = await getDoc(userDocRef);
      if (!userDoc.exists()) {
        throw new Error("사용자 문서가 존재하지 않습니다."); // 사용자 문서가 존재하지 않습니다.
      }

      const points = userDoc.data()?.points;
      if (typeof points !== "number") {
        throw new Error("잘못된 포인트 데이터입니다."); // 잘못된 포인트 데이터입니다.
      }

      return points;
    } catch (error) {
      console.error("사용자 포인트를 가져오는 데 실패했습니다.", error); // 사용자 포인트를 가져오는 데 실패했습니다.
      throw error;
    }
  };

  return { updateUserPoints, getUserPoints };
};

export default usePoints;
