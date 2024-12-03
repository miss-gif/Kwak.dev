import HeroVideo from "@/features/Home/components/HeroVideo";
import useScrollTo from "@/hooks/useScrollTo";
import HomeInfo from "../components/HomeInfo";

const HomePage = () => {
  useScrollTo();

  return (
    <>
      <HeroVideo />
      <HomeInfo />
    </>
  );
};

export default HomePage;
