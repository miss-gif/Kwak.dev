import ProjectDescription from "@/components/project/ProjectDescription";
import ProjectOverview from "@/components/project/ProjectOverview";
import Section from "@/components/sections/Section";
import { projectData } from "@/data/projectData";

import { useParams } from "react-router-dom";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const projectId = id ? parseInt(id, 10) : NaN; // id를 숫자로 변환
  const project = projectData.find((item) => item.id === projectId);

  // 데이터가 없는 경우 처리
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Section>
      <div className="flex flex-col gap-10">
        <ProjectOverview data={project.card} />
        <ProjectDescription data={project.detail} />
      </div>
    </Section>
  );
};

export default ProjectDetailPage;
