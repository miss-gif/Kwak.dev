import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useSignup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const auth = getAuth();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Firebase의 createUserWithEmailAndPassword 사용
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      // 회원가입 성공 후 처리
      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("User:", user);

      navigate("/login");
      toast.success("회원가입 되었습니다.");

      // 회원가입 후 추가 처리 예: 대시보드로 이동, 알림 표시 등
    } catch (error: any) {
      // 에러 처리
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error Code:", errorCode);
      console.error("Error Message:", errorMessage);
      setError(errorMessage); // 오류 메시지를 상태에 저장

      setError("로그인 실패");
      toast.error("로그인에 실패했습니다.");
    }
  };

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSignup,
  };
};
