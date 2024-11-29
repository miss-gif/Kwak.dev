import useAccount from "@/hooks/useAccount";

const UserProfile = () => {
  const { user, creationDate, lastSignInDate } = useAccount();

  return (
    <div>
      <div className="회원정보내용 mb-4">
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
    </div>
  );
};

export default UserProfile;
