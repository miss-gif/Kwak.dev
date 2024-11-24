import NotFoundPage from "@/pages/NotFoundPage";
import { useParams } from "react-router-dom";
import ProjectDescription from "./ProjectDescription";
import ProjectOverview from "./ProjectOverview";
import { mockProject } from "../../data/mockProject";

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = id ? parseInt(id, 10) : NaN; // id를 숫자로 변환
  const project = mockProject.find((item) => item.id === projectId);

  // 데이터가 없는 경우 처리
  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <>
      <ProjectOverview data={project} />
      <ProjectDescription data={project} />
    </>
  );
};

export default ProjectDetail;
