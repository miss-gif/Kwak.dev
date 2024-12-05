// src/pages/ProjectDetailPage.tsx
import PageLayout from "@/components/common/PageLayout";
import { useProjectDetail } from "@/hooks/project/use-Project-Detail";
import { useParams } from "react-router-dom";
import ProjectDetail from "../components/ProjectDetail";

const ProjectDetailPage = () => {
  const props = {
    title: "프로젝트 상세",
    subtitle: "✨ 프로젝트 상세 내용을 확인하세요.",
  };

  const { id } = useParams(); // URL에서 가져온 문서 키
  const { project, loading, error } = useProjectDetail(id);

  if (loading) {
    return (
      <PageLayout title={props.title} subtitle={props.subtitle}>
        <p>프로젝트 데이터를 불러오는 중입니다...</p>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout title={props.title} subtitle={props.subtitle}>
        <p>{error}</p>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      {project ? <ProjectDetail data={project} /> : <p>프로젝트 데이터를 찾을 수 없습니다.</p>}
    </PageLayout>
  );
};

export default ProjectDetailPage;
