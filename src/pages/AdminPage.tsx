import { useState } from "react";
import { verifyPassword } from "@/utils/verifyPassword";
import { useRequireLogin } from "@/hooks/useLoginCheck";

const AdminPage = () => {
  useRequireLogin();

  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const isMatch = await verifyPassword(password);
      if (isMatch) {
        setIsVerified(true);
        setError("");
      } else {
        setError("비밀번호가 일치하지 않습니다.");
      }
    } catch (err) {
      setError("인증 중 오류가 발생했습니다.");
    }
  };

  if (isVerified) {
    return (
      <div className="flex h-dvh w-full items-center justify-center bg-slate-100">
        <p>관리자 페이지에 오신 것을 환영합니다!</p>
      </div>
    );
  }

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center bg-slate-100">
      <div className="w-96 rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-4 text-xl font-semibold text-gray-700">
          관리자 인증
        </h1>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        <button
          onClick={handleSubmit}
          className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          인증하기
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
