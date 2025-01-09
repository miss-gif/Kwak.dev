import useAccount from "@/hooks/useAccount";

const UserProfile = () => {
  const { user, creationDate, lastSignInDate } = useAccount();

  const userInfo = [
    { label: "uid", value: user?.uid },
    { label: "닉네임", value: user?.displayName },
    { label: "인증여부", value: user?.isAnonymous ? "인증" : "게스트" },
    { label: "아이디(이메일)", value: user?.email },
    { label: "이메일 여부", value: user?.emailVerified ? "인증" : "미인증" },
    { label: "프로필 이미지", value: user?.photoURL },
    { label: "연락처", value: user?.phoneNumber },
    { label: "계정 생성일", value: creationDate },
    { label: "최근 로그인 날짜", value: lastSignInDate },
  ];

  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg">
      <div className="p-6">
        <h2 className="mb-4 text-2xl font-semibold">회원 정보</h2>
        <div className="space-y-4">
          {userInfo.map((info, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-2">
              <span className="font-semibold">{info.label}:</span>
              <span>{info.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
