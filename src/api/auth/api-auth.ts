import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebaseConfig";

// 로그인 요청
export const userLogin = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// 회원가입 API
export const userSignup = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// 이메일 인증 링크 보내기
export const sendVerificationEmail = async (user: any) => {
  await sendEmailVerification(user);
};

// 프로필 업데이트 (닉네임 설정)
export const updateDisplayName = async (displayName: string) => {
  const currentUser = auth.currentUser;
  if (currentUser) {
    await updateProfile(currentUser, { displayName });
  }
};
