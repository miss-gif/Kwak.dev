import { useAuthStore } from "@/stores/authStore";
import { useState } from "react";
import usePayment from "../hooks/use-Payment";

declare global {
  interface Window {
    IMP: any;
  }
}

const PaymentPage = () => {
  const [amount, setAmount] = useState(0);
  const [isAgreed, setIsAgreed] = useState(false);
  const { user } = useAuthStore();
  const { savePaymentToFirebase } = usePayment();

  console.log(user);

  const predefinedAmounts = [1000, 5000, 10000, 20000, 50000, 100000];

  // 결제 금액 선택
  const handlePredefinedAmountClick = (value: number) => {
    setAmount(value);
  };

  // 결제 동의 체크박스
  const handleAgreementChange = () => {
    setIsAgreed(!isAgreed);
  };

  const onPay = () => {
    kakaopay();
  };

  const kakaopay = () => {
    const IMP = window.IMP;
    IMP.init("imp56341203");
    IMP.request_pay(
      {
        pg: "kakaopay.TC0ONETIME",
        pay_method: "card",
        merchant_uid: "Kwak_" + new Date().getTime(),
        name: "Kwak.dav 포인트 충전",
        amount: amount,
        buyer_name: user?.displayName || "익명",
        buyer_email: user?.email || "unknown_email",
      },

      function (data: any) {
        if (user === null) {
          alert("로그인 후 이용해주세요");
          return;
        }

        if (data.success) {
          const paymentData = {
            merchant_uid: data.merchant_uid,
            amount: data.paid_amount,
            buyer_name: user?.displayName || "익명",
            buyer_email: user?.email,
            timestamp: new Date().toISOString(),
          };

          // Firebase 저장 호출
          savePaymentToFirebase(user.uid, paymentData)
            .then(() => alert("결제 정보 저장 성공"))
            .catch((error) => alert("결제 정보 저장 중 오류: " + error.message));
        }
      },
    );
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <h3 className="mb-4 text-lg font-bold">포인트 충전하기</h3>
      <div>
        {/* 금액 선택 버튼 */}
        <div className="mb-4 flex flex-wrap gap-2">
          {predefinedAmounts.map((value) => (
            <button key={value} className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300" onClick={() => handlePredefinedAmountClick(value)}>
              {value.toLocaleString()}원
            </button>
          ))}
        </div>

        {/* 결제 금액 */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">결제 금액: {amount.toLocaleString() || 0}원</h3>
        </div>

        {/* 결제 수단 선택 */}
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-medium">결제 수단</h4>
          <button className="w-full rounded bg-blue-500 px-4 py-2 text-white">카카오페이(테스트)</button>
        </div>

        {/* 동의 체크박스 */}
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="agree" className="mr-2" checked={isAgreed} onChange={handleAgreementChange} />
          <label htmlFor="agree" className="text-sm">
            결제 동의
          </label>
        </div>

        {/* 결제 버튼 */}
        <button
          onClick={onPay}
          className={`w-full rounded bg-green-500 py-2 text-white ${!amount || !isAgreed ? "cursor-not-allowed opacity-50" : "hover:bg-green-600"}`}
          disabled={!amount || !isAgreed}
        >
          결제하기
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
