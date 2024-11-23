import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import PageIntro from "@/components/PageIntro";
import { projectData } from "@/data/projectData";
import ProjectListPage from "./ProjectListPage";

const ProjectPage = () => {
  const props = {
    title: "Project",
    subtitle: "✨ 제가 작업한 프로젝트를 만나보세요.",
  };

  const text = {
    title: "아이디어를 실현하고, 문제를 해결하는 코드의 힘을 믿습니다.",

    content: [
      "여기에는 제가 작업한 프로젝트와 그 과정에서 배운 점들을 정리했습니다. ",
      "각 프로젝트는 문제를 해결하거나, 특정 기술을 익히기 위해 도전했던 노력의 결과물입니다.",
      "실제로 사용자 경험을 개선하거나, 효율적인 코드 작성에 중점을 두고 설계되었습니다.",
    ],
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <PageIntro text={text} />
      <SectionWrapper>
        <ProjectListPage projectData={projectData} />
      </SectionWrapper>
    </PageLayout>
  );
};

export default ProjectPage;
