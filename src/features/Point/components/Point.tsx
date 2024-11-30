import { useState } from "react";
import axios from "axios";

declare global {
  interface Window {
    IMP: any;
  }
}

const Point = () => {
  const [amount, setAmount] = useState(1000);

  const onPay = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    kakaopay();
  };

  const kakaopay = () => {
    const IMP = window.IMP;
    IMP.init("imp56341203");
    IMP.request_pay(
      {
        pg: "kakaopay.TC0ONETIME",
        pay_method: "card",
        merchant_uid: "GPK_" + new Date().getTime(),
        name: "결제 메뉴명",
        amount: amount,
        buyer_name: "buyer_name",
        buyer_tel: "hp",
      },
      function (data: any) {
        let msg;
        if (data.success) {
          msg = "결제 완료";
          msg += "// 결제 수단 : Kakao";
          msg += "// 상점 거래ID : " + data.merchant_uid;
          msg += "// 결제 금액 : " + data.paid_amount;
          msg += "// 구매자 이름 : " + data.buyer_name;

          axios
            .post("/paySuccess", {
              ID: data.buyer_email,
              amount: data.paid_amount,
            })
            .then((response) => {
              alert("결제 완료: " + response.data.message);
            })
            .catch((error) => {
              alert("결제 성공 후 처리 중 오류: " + error.message);
            });
        } else {
          msg = "결제 실패";
          msg += "에러 내용: " + data.error_msg;
          alert(msg);
        }
      },
    );
  };

  return (
    <div>
      <h3>포인트 충전하기</h3>
      <div>
        <input className="amountValue" type="text" value={amount} />
        <button onClick={onPay}>결제하기</button>
        <div>
          <h3 className="amount">결제 금액 : {amount}원</h3>
        </div>
      </div>
    </div>
  );
};

export default Point;
