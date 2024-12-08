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
    <div className="w-full py-2">
      <Inner>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
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
        </div>
      </Inner>
    </div>
  );
};

export default GlobalHeader;
