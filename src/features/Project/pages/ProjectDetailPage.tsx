import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import { mockProject } from "../data/mockProject";
import ProjectDetail from "../components/ProjectDetail";
import { useParams } from "react-router-dom";

const ProjectDetailPage = () => {
  const props = {
    title: "프로젝트 상세",
    subtitle: "✨ 프로젝트 상세 내용을 확인하세요.",
  };

  const { id } = useParams();
  const projectId = id ? parseInt(id, 10) : NaN; // id를 숫자로 변환
  const data = mockProject.find((item) => item.id === projectId);

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <ProjectDetail data={data} />
      </SectionWrapper>
    </PageLayout>
  );
};

export default ProjectDetailPage;
