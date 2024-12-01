import { db } from "@/firebaseConfig";
import { addDoc, collection, doc, getDoc, increment, updateDoc } from "firebase/firestore";

interface PaymentData {
  merchant_uid: any;
  amount: any;
  buyer_name: string;
  buyer_email: string | null;
  timestamp: string;
}

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

const usePayment = () => {
  const savePaymentToFirebase = async (userId: string, paymentData: PaymentData) => {
    try {
      // 사용자 하위 컬렉션에 결제 내역 저장
      const userPaymentRef = collection(db, `users/${userId}/paymentHistory`);
      await addDoc(userPaymentRef, paymentData);

      // 전역 결제 컬렉션에 저장
      const paymentsRef = collection(db, "payments");
      await addDoc(paymentsRef, paymentData);

      // 유저 포인트 업데이트
      await updateUserPoints(userId, paymentData.amount);

      console.log("결제 및 포인트 업데이트 완료");
    } catch (error) {
      console.error("결제 또는 포인트 업데이트 실패:", error);
      throw new Error("결제 또는 포인트 업데이트 실패");
    }
  };

  return { savePaymentToFirebase };
};

export default usePayment;
