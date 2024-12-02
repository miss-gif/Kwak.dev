import { ModeToggle } from "@/components/mode-toggle";
import { useAuthStore } from "@/stores/authStore";
import Inner from "../Inner";
import GitLinkButton from "./GitLinkButton";
import IsLogin from "./IsLogin";
import IsLogout from "./IsLogout";

const GlobalHeader = () => {
  const { isLoggedIn } = useAuthStore();

  return (
    <div className="w-full bg-white py-2 dark:bg-black">
      <Inner justify="end">
        {isLoggedIn ? <IsLogin /> : <IsLogout />}
        <div className="flex gap-1">
          <GitLinkButton />
          <ModeToggle />
        </div>
      </Inner>
    </div>
  );
};

export default GlobalHeader;
