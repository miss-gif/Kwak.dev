import HomeLeft from "@/components/home/HomeLeft";
import HomeNotice from "./HomeNotice";

const HomeInfo = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-10 md:h-svh md:flex-none">
      <div className="mt-20 flex flex-col items-center justify-center gap-10 md:h-svh md:flex-row md:justify-between">
        <HomeLeft />
        <div className="flex w-full gap-2 md:flex md:w-2/5 md:flex-col">
          <HomeNotice />
          <HomeNotice />
          <HomeNotice />
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
