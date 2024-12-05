import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import React, { useState } from "react";

const sendAuthLink = async (email: string) => {
  const auth = getAuth();

  const actionCodeSettings = {
    url: "http://localhost:5173/auth/signup", // 인증 완료 후 리디렉션될 URL
    handleCodeInApp: true,
  };

  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    window.localStorage.setItem("emailForSignIn", email); // 인증을 위해 이메일 저장
    console.log("인증 링크를 전송했습니다.");
  } catch (error) {
    console.error("인증 링크 전송 실패:", error);
  }
};

const AuthEmail = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendAuthLink(email);
    alert("인증 링크가 이메일로 전송되었습니다. 이메일을 확인하세요.");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <InputWithLabel
        label="이메일"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit">이메일 인증</Button>
    </form>
  );
};

export default AuthEmail;
