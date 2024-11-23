import { projectData } from "@/data/projectData";
import NotFoundPage from "@/pages/NotFoundPage";
import { useParams } from "react-router-dom";
import ProjectDescription from "./ProjectDescription";
import ProjectOverview from "./ProjectOverview";

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = id ? parseInt(id, 10) : NaN; // id를 숫자로 변환
  const project = projectData.find((item) => item.id === projectId);

  // 데이터가 없는 경우 처리
  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <>
      <ProjectOverview data={project.card} />
      <ProjectDescription data={project.detail} />
    </>
  );
};

export default ProjectDetail;
