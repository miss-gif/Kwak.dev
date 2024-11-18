import { db } from "@/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useSignup = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Firebase Auth에 사용자 생성
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
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
        lastSignInTime: user.metadata.lastSignInTime,
      });

      toast.success("회원가입 되었습니다.");
      navigate("/");
    } catch (error: any) {
      toast.error("회원가입에 실패했습니다.");
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
  };
};
