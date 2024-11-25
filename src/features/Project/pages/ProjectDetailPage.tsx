import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import ProjectDetail from "../components/ProjectDetail";

const ProjectDetailPage = () => {
  const props = {
    title: "프로젝트 상세",
    subtitle: "✨ 프로젝트 상세 내용을 확인하세요.",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <ProjectDetail />
      </SectionWrapper>
    </PageLayout>
  );
};

export default ProjectDetailPage;
