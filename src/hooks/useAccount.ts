import { useAuthStore } from "@/stores/authStore";
import { format } from "date-fns";
import { useState } from "react";

const useAccount = () => {
  const { user, updateUserEmail, updateUserPassword, deleteAccount, logout } =
    useAuthStore();
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // 계정 생성일과 최근 로그인 날짜 포맷
  const creationDate = user?.metadata?.creationTime
    ? format(new Date(user.metadata.creationTime), "yyyy-MM-dd HH:mm:ss")
    : "알 수 없음";
  const lastSignInDate = user?.metadata?.lastSignInTime
    ? format(new Date(user.metadata.lastSignInTime), "yyyy-MM-dd HH:mm:ss")
    : "알 수 없음";

  // 이메일 업데이트 핸들러
  const handleEmailUpdate = async () => {
    try {
      await updateUserEmail(newEmail);
      alert("이메일이 변경되었습니다.");
    } catch (error) {
      alert("이메일 변경에 실패했습니다.");
      console.error(error);
    }
  };

  // 비밀번호 업데이트 핸들러
  const handlePasswordUpdate = async () => {
    try {
      await updateUserPassword(newPassword);
      alert("비밀번호가 변경되었습니다.");
    } catch (error) {
      alert("비밀번호 변경에 실패했습니다.");
      console.error(error);
    }
  };

  // 계정 삭제 핸들러
  const handleAccountDelete = async () => {
    if (window.confirm("정말로 계정을 삭제하시겠습니까?")) {
      try {
        await deleteAccount();
        alert("계정이 삭제되었습니다.");
        logout();
      } catch (error) {
        alert("계정 삭제에 실패했습니다.");
        console.error(error);
      }
    }
  };
  return {
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
  };
};

export default useAccount;
