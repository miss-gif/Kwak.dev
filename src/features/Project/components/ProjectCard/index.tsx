import { ProjectData } from "../../types/type";
import DimmedCard from "./DimmedCard";
import PreviewCard from "./PreviewCard";

interface ProjectCardProps {
  project: ProjectData; // 각 프로젝트 데이터
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { projectName, demoUrl, id } = project;

  return (
    <li className="shadow-style relative h-[450px] flex-1 list-none overflow-hidden rounded-md border bg-white">
      {/* 호버 시 딤드 효과 */}
      <DimmedCard title={projectName} id={id} link={demoUrl} />
      <PreviewCard project={project} />
    </li>
  );
};

export default ProjectCard;
