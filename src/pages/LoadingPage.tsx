import { HeartIcon } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-50 dark:bg-neutral-950">
      <HeartIcon className="h-8 w-8 animate-[heartbeat_1s_infinite] fill-red-500 text-red-600" />
    </div>
  );
};

export default LoadingPage;
