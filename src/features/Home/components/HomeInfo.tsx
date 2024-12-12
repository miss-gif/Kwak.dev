import HomeTitle from "@/features/Home/components/HomeTitle";
import HomeContent from "./HomeContent";
import Inner from "@/layouts/Inner";

const HomeInfo = () => {
  return (
    <div className="absolute top-0 -z-10 flex h-screen w-full items-center justify-center">
      <Inner>
        <div className="flex w-full flex-col items-center justify-between pt-20 lg:flex-row">
          <HomeTitle />
          <div className="hidden lg:block">
            <HomeContent />
          </div>
        </div>
      </Inner>
    </div>
  );
};

export default HomeInfo;
