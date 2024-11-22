import Career from "@/features/About/components/Career";
import Certificate from "@/features/About/components/Certificate";
import Intro from "@/features/About/components/Intro";
import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import SkillsViewer from "@/features/About/components/skill/SkillsViewer";

const AboutPage = () => {
  const props = {
    title: "About Me",
    subtitle: "✨ 개발자의 길을 향한 열정과 성장",
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
