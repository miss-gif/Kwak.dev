import { ProjectData } from "@/types/projectData";
import ProjectCard from "./ProjectCard.tsx"; // 미리보기 및 상세보기로 나누어 렌더링할 카드 컴포넌트

interface ProjectProps {
  projectData: ProjectData[]; // ProjectData 배열
}

function Project({ projectData }: ProjectProps) {
  return (
    <ul className="grid gap-5 py-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {projectData.map((project) => (
        <ProjectCard key={project.id} project={project} /> // 각 프로젝트 데이터를 ProjectCard에 전달
      ))}
    </ul>
  );
}

export default Project;
