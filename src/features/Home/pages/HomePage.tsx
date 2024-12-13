import HeroVideo from "@/features/Home/components/HeroVideo";
import useScrollTo from "@/hooks/useScrollTo";
import HomeInfo from "../components/HomeInfo";

const HomePage = () => {
  useScrollTo();

  return (
    <main className="h-screen pt-[132px]">
      <HeroVideo />
      <HomeInfo />
    </main>
  );
};

export default HomePage;
