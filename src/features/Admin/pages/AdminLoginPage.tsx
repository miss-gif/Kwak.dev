import useAdminAuthCookie from "@/hooks/use-AdminAuthCookie";
import { verifyPassword } from "@/utils/verifyPassword";
import { useState } from "react";
import { toast } from "react-toastify";
import AdminMainPage from "./AdminMainPage";

const AdminLoginPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setAuthCookie, isAdminAuthenticated } = useAdminAuthCookie();

  const handleSubmit = async () => {
    try {
      const isMatch = await verifyPassword(password); // 비밀번호 확인 로직
      if (isMatch) {
        setAuthCookie(true); // 인증 성공 시 쿠키 설정
        setError("");
        toast.success("로그인 성공!");
      } else {
        setError("비밀번호가 일치하지 않습니다.");
      }
    } catch (err) {
      setError("인증 중 오류가 발생했습니다.");
      console.error(err);
    }
  };

  if (isAdminAuthenticated()) {
    return <AdminMainPage />; // 인증된 경우 관리자 페이지로 이동
  }

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center bg-slate-100">
      <div className="w-96 rounded-md bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">
          관리자 인증
        </h2>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border-2 border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        <button
          onClick={handleSubmit}
          className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          인증하기
        </button>
      </div>
    </div>
  );
};

export default AdminLoginPage;
