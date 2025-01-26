import HeroVideo from "@/features/Home/components/HeroVideo";
import useScrollTo from "@/hooks/useScrollTo";
import HomeInfo from "../components/HomeInfo";

const HomePage = () => {
  useScrollTo();

  return (
    <main className="flex h-[calc(100vh-132px)] flex-col items-center justify-center">
      <HeroVideo />
      <HomeInfo />
    </main>
  );
};

export default HomePage;
