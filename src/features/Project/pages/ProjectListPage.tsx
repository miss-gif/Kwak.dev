import ProjectCard from "../components/ProjectCard";
import { ProjectAdd } from "../components/ProjectHeaderButton";
import { ProjectData } from "../types/type";

interface ProjectListPageProps {
  filteredProjects: ProjectData[];
}

const ProjectListPage = ({ filteredProjects }: ProjectListPageProps) => {
  console.log(filteredProjects);

  return (
    <>
      <ProjectAdd />

      <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.docID} project={project} />
        ))}
      </ul>
    </>
  );
};

export default ProjectListPage;
