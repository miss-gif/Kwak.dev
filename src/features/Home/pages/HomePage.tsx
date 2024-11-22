import SectionWrapper from "@/components/common/SectionWrapper";
import SkillsViewer from "@/features/About/components/skill/SkillsViewer";
import HeroVideo from "@/features/Home/components/HeroVideo";
import HomeInfo from "../components/HomeInfo";
import useScrollTo from "@/hooks/useScrollTo";

const HomePage = () => {
  useScrollTo();

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
