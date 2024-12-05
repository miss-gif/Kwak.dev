import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useEffect } from "react";

const finishSignup = async () => {
  const auth = getAuth();
  const email = window.localStorage.getItem("emailForSignIn") || ""; // 저장된 이메일
  const emailLink = window.location.href;

  if (isSignInWithEmailLink(auth, emailLink)) {
    try {
      const result = await signInWithEmailLink(auth, email, emailLink);
      console.log("회원가입 완료:", result.user);
      window.localStorage.removeItem("emailForSignIn");
    } catch (error) {
      console.error("인증 실패:", error);
    }
  } else {
    console.log("잘못된 인증 링크입니다.");
  }
};

const FinishSignupPage = () => {
  useEffect(() => {
    finishSignup();
  }, []);

  return <div>회원가입이 완료되었습니다. 환영합니다!</div>;
};

export default FinishSignupPage;
