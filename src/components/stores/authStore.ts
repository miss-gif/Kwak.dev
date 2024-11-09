import { create } from "zustand";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/firebaseConfig";

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
}

// Zustand 스토어 생성
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoggedIn: false,
  setUser: (user) => set({ user, isLoggedIn: !!user }),
  logout: () => {
    auth.signOut();
    set({ user: null, isLoggedIn: false });
  },
}));

// 로그인 상태를 Zustand 스토어에 저장
onAuthStateChanged(auth, (user) => {
  useAuthStore.getState().setUser(user);
});
