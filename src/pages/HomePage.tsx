import SectionWrapper from "@/components/common/SectionWrapper";
import HeroVideo from "@/components/home/HeroVideo";
import SkillsViewer from "@/components/skill/SkillsViewer";
import HomeInfo from "./../components/home/HomeInfo";

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
