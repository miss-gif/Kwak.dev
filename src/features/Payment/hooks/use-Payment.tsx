import usePoints from "@/features/Point/hooks/use-Points";
import { db } from "@/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

interface PaymentData {
  merchant_uid: any;
  amount: any;
  buyer_name: string;
  buyer_email: string | null;
  timestamp: string;
}

// 결제 관련 커스텀 훅
const usePayment = () => {
  const { updateUserPoints } = usePoints(); // 포인트 업데이트 훅 사용

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
