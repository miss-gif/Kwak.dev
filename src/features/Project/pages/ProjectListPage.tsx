import { useState, useEffect } from "react";
import { useFilteredProjects } from "@/features/Project/hooks/use-FilteredProjects";
import ProjectCard from "../components/ProjectCard";
import ProjectHeaderFilter from "../components/ProjectHeaderFilter";
import { ProjectAdd } from "../components/ProjectHeaderButton";
import useCollection from "@/hooks/use-Collection";
import { ProjectData } from "../types/type";

const ProjectListPage = () => {
  const { fetchCollection } = useCollection();
  const [projects, setProjects] = useState<ProjectData[]>([]); // 초기값과 함께 타입 명시
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectData = await fetchCollection({
          collectionName: "Project",
        });
        console.log("projectData", projectData);
        setProjects(projectData);
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  const {
    query,
    setQuery,
    techFilter,
    setTechFilter,
    keywords,
    setKeywords,
    filteredProjects,
  } = useFilteredProjects(projects);

  const filterData = {
    query,
    setQuery,
    techFilter,
    setTechFilter,
    keywords,
    setKeywords,
  };

  if (loading) return <p>Loading projects...</p>; // 로딩 상태 처리

  return (
    <>
      <ProjectHeaderFilter {...filterData} />

      <ProjectAdd />

      <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </>
  );
};

export default ProjectListPage;
