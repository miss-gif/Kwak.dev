import useAccount from "@/hooks/useAccount";

const UserProfileEdit = () => {
  const {
    newEmail,
    setNewEmail,
    newPassword,
    setNewPassword,
    handleEmailUpdate,
    handlePasswordUpdate,
    handleAccountDelete,
  } = useAccount();

  return (
    <div>
      <div className="변경그룹">
        <div className="mb-6 rounded-md border bg-gray-50 p-4">
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

        <div className="mb-6 rounded-md border bg-gray-50 p-4">
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

        <div className="rounded-md border bg-red-50 p-4">
          <h2 className="mb-3 text-lg font-semibold text-red-600">계정 탈퇴</h2>
          <button
            onClick={handleAccountDelete}
            className="w-full rounded-md bg-red-500 py-2 font-semibold text-white transition-colors hover:bg-red-600"
          >
            계정 삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileEdit;
