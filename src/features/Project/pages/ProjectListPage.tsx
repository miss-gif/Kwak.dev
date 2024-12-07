import ProjectList from "../components/ProjectList";
import ProjectListHeader from "../components/ProjectList/ProjectListHeader";
import { ProjectData } from "../types/type";

interface ProjectListPageProps {
  filteredProjects: ProjectData[];
}

const ProjectListPage = ({ filteredProjects }: ProjectListPageProps) => {
  return (
    <>
      <ProjectListHeader />

      <ProjectList filteredProjects={filteredProjects} />
    </>
  );
};

export default ProjectListPage;
