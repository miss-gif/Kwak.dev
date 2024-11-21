import { create } from "zustand";
import {
  onAuthStateChanged,
  updateEmail,
  updatePassword,
  User,
  deleteUser,
} from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { toast } from "react-toastify";

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  setUser: (user: User | null) => void;
  updateUserEmail: (newEmail: string) => Promise<void>;
  updateUserPassword: (newPassword: string) => Promise<void>;
  deleteAccount: () => Promise<void>;
  logout: () => void;
}

// Zustand 스토어 생성
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoggedIn: false,
  setUser: (user) => set({ user, isLoggedIn: !!user }), // 로그인 상태를 갱신
  updateUserEmail: async (newEmail) => {
    // 이메일 변경
    if (auth.currentUser) {
      await updateEmail(auth.currentUser, newEmail);
      set((state) => ({ ...state, user: auth.currentUser }));
    }
  },
  updateUserPassword: async (newPassword) => {
    // 비밀번호 변경
    if (auth.currentUser) {
      await updatePassword(auth.currentUser, newPassword);
    }
  },
  deleteAccount: async () => {
    // 계정 삭제
    if (auth.currentUser) {
      await deleteUser(auth.currentUser);
      set({ user: null, isLoggedIn: false });
    }
  },
  logout: () => {
    auth.signOut();
    toast.success("로그아웃 되었습니다.");
    set({ user: null, isLoggedIn: false });
  },
}));

// 로그인 상태를 Zustand 스토어에 저장
onAuthStateChanged(auth, (user) => {
  useAuthStore.getState().setUser(user); // 로그인 상태를 갱신
});
