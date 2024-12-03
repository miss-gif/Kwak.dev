import { db } from "@/firebaseConfig";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useSignup = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  // 닉네임 중복 확인 로직 (중복 확인 버튼 및 회원가입 공통 사용)
  const checkDisplayNameAvailability = async (name: string): Promise<boolean> => {
    const displayNamesRef = collection(db, "displayNames");
    const q = query(displayNamesRef, where("name", "==", name));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty; // If empty, the nickname is available
  };

  // 중복 확인 버튼 기능
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

  // 이메일 인증 기능 분리
  const sendEmailVerificationLink = async (user: any) => {
    try {
      await sendEmailVerification(user);
      toast.success("이메일 인증 링크를 보냈습니다. 이메일을 확인해주세요.");
    } catch (error: any) {
      toast.error(`이메일 인증에 실패했습니다: ${error.message}`);
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // 닉네임 중복 체크
      const isAvailable = await checkDisplayNameAvailability(displayName);
      if (!isAvailable) {
        toast.error("이미 사용 중인 닉네임입니다.");
        return;
      }

      // Firebase Auth에 사용자 생성
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Firebase에 displayName 저장
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: displayName,
        });
      }

      // Firestore에 사용자 데이터 저장
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        displayName: displayName,
        uid: user.uid,
        creationTime: user.metadata.creationTime,
        points: 0,
      });

      // DisplayNames 컬렉션에 닉네임 추가 (중복 체크를 위해)
      await setDoc(doc(db, "displayNames", user.uid), {
        name: displayName,
      });

      navigate(-2);
    } catch (error: any) {
      toast.error(`회원가입에 실패했습니다: ${error.message}`);
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
    sendEmailVerificationLink, // 이메일 인증 기능 분리
  };
};
