import { ModeToggle } from "@/components/mode-toggle";
import { useAuthStore } from "@/stores/authStore";
import Inner from "../Inner";
import BugReport from "./BugReport";
import GitLinkButton from "./GitLinkButton";
import IsLogin from "./IsLogin";
import IsLogout from "./IsLogout";
import TaskNotice from "./TaskNotice";

const GlobalHeader = () => {
  const { isLoggedIn } = useAuthStore();

  return (
    <div className="w-full bg-white bg-opacity-20 py-2 dark:bg-black dark:bg-opacity-20">
      <Inner>
        <div className="flex items-center gap-2">
          <TaskNotice />
          <BugReport />
        </div>

        <div className="flex">
          {isLoggedIn ? <IsLogin /> : <IsLogout />}
          <div className="flex gap-1">
            <GitLinkButton />
            <ModeToggle />
          </div>
        </div>
      </Inner>
    </div>
  );
};

export default GlobalHeader;
