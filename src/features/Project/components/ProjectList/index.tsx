import { ProjectData } from "../../types/type";
import ProjectCard from "../ProjectCard";

interface ProjectListProps {
  filteredProjects: ProjectData[];
}

const ProjectList = ({ filteredProjects }: ProjectListProps) => {
  return (
    <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.docID} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
