import { Button } from "@/components/ui/button";
import PaymentModal from "@/features/Payment/components/Payment/PaymentModal";
import { useAuthStore } from "@/stores/authStore";
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/firebaseConfig";

interface PaymentData {
  merchant_uid: any;
  amount: any;
  buyer_name: string;
  buyer_email: string | null;
  timestamp: string;
  type?: string;
}

const Point = () => {
  const [activeTab, setActiveTab] = useState("all"); // "all", "recharge", "spend"
  const { user } = useAuthStore();
  const [pointHistory, setPointHistory] = useState<PaymentData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.uid) return;

    const fetchData = async () => {
      setLoading(true);

      try {
        const userPaymentRef = collection(db, `users/${user.uid}/paymentHistory`);
        const q = query(userPaymentRef, orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          merchant_uid: doc.data().merchant_uid,
          amount: doc.data().amount,
          buyer_name: doc.data().buyer_name,
          buyer_email: doc.data().buyer_email,
          timestamp: doc.data().timestamp,
          type: doc.data().type,
        }));

        setPointHistory(data);
      } catch (error) {
        console.error("Error fetching payment history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.uid]);

  const filteredHistory = activeTab === "all" ? pointHistory : pointHistory.filter((item) => item.type === activeTab);

  return (
    <div className="min-h-96 w-full py-5">
      {/* 탭 선택 */}
      <div className="mb-4 flex justify-between gap-2 border-b">
        <div>
          {["all", "recharge", "spend"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 ${activeTab === tab ? "border-b-2 border-green-500 font-bold text-green-500" : "text-gray-600"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "all" ? "전체 내역" : tab === "recharge" ? "충전 내역" : "사용 내역"}
            </button>
          ))}
        </div>
        <PaymentModal />
      </div>

      {/* 로딩 상태 */}
      {loading && <p className="text-center text-gray-500">로딩 중...</p>}

      {/* 포인트 내역 리스트 */}
      <div className="space-y-4">
        {!loading &&
          (filteredHistory.length > 0 ? (
            filteredHistory.map((item) => (
              <div
                key={item.merchant_uid}
                className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                    {item.type === "recharge" ? "💰" : "🛒"}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{item.merchant_uid}</p>
                    <p className="text-sm text-gray-500">{new Date(item.timestamp).toLocaleDateString()}</p>
                  </div>
                </div>

                {/* 금액 */}
                <p className={`text-lg font-bold ${item.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                  {item.amount.toLocaleString()}원
                </p>

                {/* 신고 버튼 */}
                <Button variant="link" className="text-blue-500">
                  문제 신고
                </Button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">해당 내역이 없습니다.</p>
          ))}
      </div>
    </div>
  );
};

export default Point;
