import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import { projectData } from "@/data/projectData";

import { useParams } from "react-router-dom";
import NotFoundPage from "../../../pages/NotFoundPage";
import ProjectOverview from "../components/ProjectOverview";
import ProjectDescription from "../components/ProjectDescription";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const projectId = id ? parseInt(id, 10) : NaN; // id를 숫자로 변환
  const project = projectData.find((item) => item.id === projectId);

  // 데이터가 없는 경우 처리
  if (!project) {
    return <NotFoundPage />;
  }

  const props = {
    title: "프로젝트 상세",
    subtitle: "✨ 프로젝트 상세 내용을 확인하세요.",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <ProjectOverview data={project.card} />
        <ProjectDescription data={project.detail} />
      </SectionWrapper>
    </PageLayout>
  );
};

export default ProjectDetailPage;
