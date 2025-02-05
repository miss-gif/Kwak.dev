import HeroVideo from "@/features/Home/components/HeroVideo";
import { changeSitePublicState } from "@/utils/sitePublicState";
import HomeInfo from "../components/HomeInfo";
import { useNavigate } from "react-router-dom";
import { LockKeyhole } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className="flex h-[calc(100vh-132px)] flex-col items-center justify-center">
      <button
        className="flex items-center gap-2 rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-700"
        onClick={() => {
          changeSitePublicState(false);
          navigate("/restricted");
        }}
      >
        <LockKeyhole /> 사이트 잠금
      </button>
      <HeroVideo />
      <HomeInfo />
    </main>
  );
};

export default HomePage;
