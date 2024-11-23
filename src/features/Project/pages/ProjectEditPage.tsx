import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import ProjectAdd from "../components/ProjectAdd";

const ProjectEditPage = () => {
  const props = {
    title: "Project",
    subtitle: "✨ 제가 작업한 프로젝트를 만나보세요.",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <ProjectAdd />
      </SectionWrapper>
    </PageLayout>
  );
};

export default ProjectEditPage;
