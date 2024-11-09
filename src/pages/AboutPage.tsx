import Career from "@/components/about/Career";
import Certificate from "@/components/about/Certificate";
import Intro from "@/components/about/Intro";
import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import SkillViewer from "@/components/skill/SkillViewer";
import Timeline from "@/components/timeline/Timeline";

const AboutPage = () => {
  return (
    <PageLayout title="소개">
      <SectionWrapper>
        <Intro />
      </SectionWrapper>

      <SectionWrapper title="Skill">
        <SkillViewer />
      </SectionWrapper>

      <SectionWrapper title="Education">
        <Career />
      </SectionWrapper>

      <SectionWrapper title="Certificate">
        <Certificate />
      </SectionWrapper>

      <SectionWrapper title="히스토리">
        <Timeline />
      </SectionWrapper>
    </PageLayout>
  );
};

export default AboutPage;
