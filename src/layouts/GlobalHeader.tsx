import Button, { LinkButton } from "@/components/Button";
import { useAuthStore } from "@/stores/authStore";

const GlobalHeader = () => {
  const { user, isLoggedIn, logout } = useAuthStore();

  return (
    <div className="flex h-16 w-full items-center justify-end gap-2 px-4 lg:px-10">
      {isLoggedIn ? (
        <>
          <LinkButton label={user?.displayName ?? "Guest"} to="/mypage" text="inherit" color="inherit" />
          <Button label={"로그아웃"} onClick={logout} text="inherit" color="inherit" />
        </>
      ) : (
        <>
          <LinkButton label={"회원가입"} to="/login" text="inherit" color="inherit" />
          <LinkButton label={"로그인"} to="/login" text="inherit" color="inherit" />
        </>
      )}
    </div>
  );
};

export default GlobalHeader;
