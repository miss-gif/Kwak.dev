import { sendVerificationEmail, updateDisplayName, userSignup } from "@/api/auth/api-auth";
import { checkDisplayNameAvailability, saveUserData } from "@/api/firestore/api-firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useSignup = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // 닉네임 중복 확인 버튼 기능
  const handleCheckDisplayName = async () => {
    if (!displayName.trim()) {
      toast.error("닉네임을 입력해주세요.");
      return;
    }
    const isAvailable = await checkDisplayNameAvailability(displayName);
    if (isAvailable) {
      toast.success("사용 가능한 닉네임입니다.");
    } else {
      toast.error("이미 사용 중인 닉네임입니다.");
    }
  };

  // 회원가입
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // 유효성 검사
    if (!displayName || !email || !password) {
      const errorMsg = "닉네임과 이메일과 비밀번호를 모두 입력해주세요.";
      setError(errorMsg);
      toast.error(errorMsg);
      setLoading(false);
      return;
    }

    try {
      // 닉네임 중복 체크
      const isAvailable = await checkDisplayNameAvailability(displayName);
      if (!isAvailable) {
        toast.error("이미 사용 중인 닉네임입니다.");
        return;
      }

      // Firebase Auth에 사용자 생성
      const user = await userSignup(email, password);

      // 프로필에 닉네임 업데이트
      await updateDisplayName(displayName);

      // Firestore에 사용자 데이터 저장
      await saveUserData(user, displayName);

      navigate(-2);
    } catch (error: any) {
      toast.error("회원가입에 실패했습니다: ${error.message}");
    } finally {
      setLoading(false); // 로딩 상태 종료
    }
  };

  return {
    displayName,
    setDisplayName,
    email,
    setEmail,
    password,
    setPassword,
    handleSignup,
    handleCheckDisplayName, // 닉네임 중복 확인 버튼 기능
    handleSendEmailVerificationLink: sendVerificationEmail, // 이메일 인증 기능
    loading,
    error,
  };
};
