import Career from "@/components/about/Career";
import Certificate from "@/components/about/Certificate";
import Intro from "@/components/about/Intro";
import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import SkillsViewer from "@/components/skill/SkillsViewer";

const AboutPage = () => {
  const props = {
    title: "소개",
    subtitle: "✨ 서브타이틀",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <Intro />
      </SectionWrapper>

      <SectionWrapper title="Skill">
        <SkillsViewer />
      </SectionWrapper>

      <SectionWrapper title="Education">
        <Career />
      </SectionWrapper>

      <SectionWrapper title="Certificate">
        <Certificate />
      </SectionWrapper>
    </PageLayout>
  );
};

export default AboutPage;
