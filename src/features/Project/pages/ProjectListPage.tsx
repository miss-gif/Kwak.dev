import { useFilteredProjects } from "@/features/Project/hooks/use-FilteredProjects";
import ProjectCard from "../components/ProjectCard";
import ProjectHeaderFilter from "../components/ProjectHeaderFilter";
import { mockProject } from "../data/mockProject";
import { ProjectAdd } from "../components/ProjectHeaderButton";

const ProjectListPage = () => {
  const data = mockProject;

  const {
    query,
    setQuery,
    techFilter,
    setTechFilter,
    keywords,
    setKeywords,
    filteredProjects,
  } = useFilteredProjects(data);

  const filterData = {
    query,
    setQuery,
    techFilter,
    setTechFilter,
    keywords,
    setKeywords,
  };

  return (
    <>
      <ProjectHeaderFilter {...filterData} />

      <ProjectAdd />

      {/* 필터 내용 */}
      <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </>
  );
};

export default ProjectListPage;
