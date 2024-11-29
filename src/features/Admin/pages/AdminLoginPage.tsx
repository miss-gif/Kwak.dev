import { verifyPassword } from "@/utils/verifyPassword";
import { useState } from "react";
import AdminMainPage from "./AdminMainPage";
import { useCookies } from "react-cookie";

const AdminLoginPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cookies, setCookie] = useCookies(["admin-auth"]);

  const handleSubmit = async () => {
    try {
      const isMatch = await verifyPassword(password);
      if (isMatch) {
        // 인증 성공: 쿠키 설정
        setCookie("admin-auth", true, {
          path: "/",
          maxAge: 3600, // 1시간
          secure: true,
          sameSite: "strict",
        });
        setError("");
      } else {
        setError("비밀번호가 일치하지 않습니다.");
      }
    } catch (err) {
      setError("인증 중 오류가 발생했습니다.");
    }
  };

  // 인증 상태 확인
  if (cookies["admin-auth"]) {
    return <AdminMainPage />;
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
