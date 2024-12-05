import PageLayout from "@/components/common/PageLayout";
import ProjectAdd from "../components/ProjectAdd";

const ProjectAddPage = () => {
  const props = {
    title: "프로젝트 상세",
    subtitle: "✨ 프로젝트 상세 내용을 확인하세요.",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <ProjectAdd />
    </PageLayout>
  );
};

export default ProjectAddPage;
