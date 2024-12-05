import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";

// 로그인 요청
export const userLogin = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};
