import SectionWrapper from "@/components/common/SectionWrapper";
import HeroVideo from "@/features/Home/components/HeroVideo";
import SkillsViewer from "@/features/About/components/skill/SkillsViewer";
import HomeInfo from "../components/HomeInfo";

const HomePage = () => {
  return (
    <>
      <SectionWrapper>
        <HeroVideo />
        <HomeInfo />
      </SectionWrapper>

      <SectionWrapper>
        <SkillsViewer />
      </SectionWrapper>
    </>
  );
};

export default HomePage;
