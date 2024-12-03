import { ProjectData } from "../../types/type";
import DimmedCard from "./DimmedCard";
import PreviewCard from "./PreviewCard";

interface ProjectCardProps {
  project: ProjectData; // 각 프로젝트 데이터
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <li className="relative h-[480px] overflow-hidden rounded-md border dark:bg-neutral-900">
      {/* 호버 시 딤드 효과 */}
      <DimmedCard project={project} />
      <PreviewCard project={project} />
    </li>
  );
};

export default ProjectCard;
