import PageLayout from "@/components/common/PageLayout";
import ProjectAdd from "../components/ProjectAdd";
import { initFormData } from "../data/initFormData";

const ProjectAddPage = () => {
  const props = {
    title: "프로젝트 상세",
    subtitle: "✨ 프로젝트 상세 내용을 확인하세요.",
  };

  const data = initFormData;

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <ProjectAdd data={data} />
    </PageLayout>
  );
};

export default ProjectAddPage;
