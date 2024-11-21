import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import { useRequireLogin } from "@/hooks/useLoginCheck";
import { verifyPassword } from "@/utils/verifyPassword";
import { useState } from "react";
import AdminTab from "../components/AdminTab";

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

  const props = {
    title: "관리자 페이지",
    subtitle: "사이트 관리를 위한 페이지입니다.",
  };

  if (isVerified) {
    return (
      <PageLayout title={props.title} subtitle={props.subtitle}>
        <SectionWrapper>
          <AdminTab />
        </SectionWrapper>
      </PageLayout>
    );
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

export default AdminPage;
