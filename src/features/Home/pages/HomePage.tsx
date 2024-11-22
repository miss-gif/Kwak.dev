import SectionWrapper from "@/components/common/SectionWrapper";
import SkillsViewer from "@/features/About/components/skill/SkillsViewer";
import HeroVideo from "@/features/Home/components/HeroVideo";
import HomeInfo from "../components/HomeInfo";

const HomePage = () => {
  return (
    <>
      <HeroVideo />
      <HomeInfo />

      <SectionWrapper>
        <SkillsViewer />
      </SectionWrapper>
    </>
  );
};

export default HomePage;
