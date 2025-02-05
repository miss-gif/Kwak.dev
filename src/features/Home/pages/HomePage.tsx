import HeroVideo from "@/features/Home/components/HeroVideo";
import { changeSitePublicState } from "@/utils/sitePublicState";
import HomeInfo from "../components/HomeInfo";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className="flex h-[calc(100vh-132px)] flex-col items-center justify-center">
      <button
        onClick={() => {
          changeSitePublicState(false);
          navigate("/restricted");
        }}
      >
        버튼
      </button>
      <HeroVideo />
      <HomeInfo />
    </main>
  );
};

export default HomePage;
