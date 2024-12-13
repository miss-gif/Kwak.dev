import HomeTitle from "@/features/Home/components/HomeTitle";
import HomeContent from "./HomeContent";
import Inner from "@/layouts/Inner";

const HomeInfo = () => {
  return (
    <Inner>
      <div className="flex w-full flex-col items-center justify-between lg:flex-row">
        <HomeTitle />
        <div className="hidden lg:block">
          <HomeContent />
        </div>
      </div>
    </Inner>
  );
};

export default HomeInfo;
