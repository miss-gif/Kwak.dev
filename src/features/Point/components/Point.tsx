import { useState } from "react";

const Point = () => {
  const [activeTab, setActiveTab] = useState("all"); // "all", "recharge", "spend"
  const pointHistory = [
    {
      id: 1,
      type: "recharge", // "recharge" or "spend"
      description: "포인트 충전",
      amount: 10000,
      date: "2024-12-01",
    },
    {
      id: 2,
      type: "spend",
      description: "상품 구매",
      amount: -5000,
      date: "2024-11-30",
    },
  ];

  const filteredHistory = activeTab === "all" ? pointHistory : pointHistory.filter((item) => item.type === activeTab);

  return (
    <div className="mx-auto max-w-lg p-4">
      {/* 포인트 요약 */}
      <div className="mb-6 grid grid-cols-3 gap-4">
        <div className="rounded-lg bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600">현재 포인트</p>
          <p className="text-lg font-bold text-green-600">10,000</p>
        </div>
        <div className="rounded-lg bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600">총 지출 포인트</p>
          <p className="text-lg font-bold text-red-600">50,000</p>
        </div>
        <div className="rounded-lg bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600">이 달 지출 포인트</p>
          <p className="text-lg font-bold text-red-500">5,000</p>
        </div>
      </div>

      {/* 탭 선택 */}
      <div className="mb-4 flex gap-2 border-b">
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

      {/* 포인트 내역 리스트 */}
      <div className="space-y-4">
        {filteredHistory.map((item) => (
          <div key={item.id} className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50">
            <div className="flex items-center gap-3">
              {/* 아이콘 */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">{item.type === "recharge" ? "💰" : "🛒"}</div>

              {/* 내용 */}
              <div>
                <p className="font-medium text-gray-800">{item.description}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>

            {/* 금액 */}
            <p className={`text-lg font-bold ${item.amount > 0 ? "text-green-600" : "text-red-600"}`}>{item.amount.toLocaleString()}원</p>

            {/* 신고 버튼 */}
            <button className="text-sm text-blue-500 hover:underline">문제 신고</button>
          </div>
        ))}
        {filteredHistory.length === 0 && <p className="text-center text-gray-500">해당 내역이 없습니다.</p>}
      </div>
    </div>
  );
};

export default Point;
