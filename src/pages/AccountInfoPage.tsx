import useAccount from "@/hooks/useAccount";
import { useRequireLogin } from "@/hooks/useLoginCheck";
import { useEffect } from "react";

const AccountInfoPage = () => {
  const {
    user,
    creationDate,
    lastSignInDate,
    newEmail,
    setNewEmail,
    newPassword,
    setNewPassword,
    handleEmailUpdate,
    handlePasswordUpdate,
    handleAccountDelete,
  } = useAccount();

  useRequireLogin(); // 로그인 상태가 아닐 경우 리다이렉트 실행

  useEffect(() => {
    console.log("user", user);
  }, []);

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
        회원정보
      </h2>

      <div className="mb-4">
        <p className="text-gray-600">
          <span className="font-semibold">uid:</span> {user?.uid}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">닉네임:</span> {user?.displayName}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">인증여부:</span>
          {user?.isAnonymous ? "인증" : "게스트"}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">아이디(이메일):</span> {user?.email}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">이메일 여부:</span>
          {user?.emailVerified ? "인증" : "미인증"}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">프로필 이미지</span>
          {user?.photoURL}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">연락처:</span>
          {user?.phoneNumber}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">계정 생성일:</span> {creationDate}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">최근 로그인 날짜:</span>
          {lastSignInDate}
        </p>
      </div>

      <div className="mb-6 rounded-lg border bg-gray-50 p-4">
        <h2 className="mb-3 text-lg font-semibold text-gray-700">
          아이디(이메일) 변경
        </h2>
        <input
          type="email"
          placeholder="새 이메일"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          className="mb-3 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleEmailUpdate}
          className="w-full rounded-md bg-blue-500 py-2 font-semibold text-white transition-colors hover:bg-blue-600"
        >
          이메일 변경
        </button>
      </div>

      <div className="mb-6 rounded-lg border bg-gray-50 p-4">
        <h2 className="mb-3 text-lg font-semibold text-gray-700">
          비밀번호 변경
        </h2>
        <input
          type="password"
          placeholder="새 비밀번호"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="mb-3 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handlePasswordUpdate}
          className="w-full rounded-md bg-blue-500 py-2 font-semibold text-white transition-colors hover:bg-blue-600"
        >
          비밀번호 변경
        </button>
      </div>

      <div className="rounded-lg border bg-red-50 p-4">
        <h2 className="mb-3 text-lg font-semibold text-red-600">계정 탈퇴</h2>
        <button
          onClick={handleAccountDelete}
          className="w-full rounded-md bg-red-500 py-2 font-semibold text-white transition-colors hover:bg-red-600"
        >
          계정 삭제
        </button>
      </div>
    </div>
  );
};

export default AccountInfoPage;
