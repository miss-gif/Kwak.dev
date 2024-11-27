import { readData } from "@/api/firebase-crud-api";
import { useFilteredProjects } from "@/features/Project/hooks/use-FilteredProjects";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { ProjectAdd } from "../components/ProjectHeaderButton";
import ProjectHeaderFilter from "../components/ProjectHeaderFilter";
import { ProjectData } from "../types/type";

const ProjectListPage = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]); // 초기값과 함께 타입 명시

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectData = await readData<ProjectData>({
          collectionName: "projects",
        });
        setProjects(projectData);
      } catch (error) {
        console.error("프로젝트 불러오기 실패", error);
      }
    };
    loadProjects();
  }, []);

  const { query, setQuery, techFilter, setTechFilter, filteredProjects } =
    useFilteredProjects(projects);

  const filterData = {
    query,
    setQuery,
    techFilter,
    setTechFilter,
  };

  return (
    <>
      <ProjectHeaderFilter {...filterData} />

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
