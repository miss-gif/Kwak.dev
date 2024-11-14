import { useFilteredProjects } from "@/hooks/useFilteredProjects";
import { ProjectData } from "@/types/projectData";
import FilterInput from "./FilterInput";
import ProjectCard from "./ProjectCard";

interface ProjectProps {
  projectData: ProjectData[];
}

const Project = ({ projectData }: ProjectProps) => {
  const {
    query,
    setQuery,
    techFilter,
    setTechFilter,
    keywords,
    setKeywords,
    filteredProjects,
  } = useFilteredProjects(projectData);

  return (
    <>
      {/* 검색 및 필터 UI */}
      <div className="sticky top-20 z-10 flex w-full items-center gap-4">
        <FilterInput
          placeholder="프로젝트 제목 검색"
          value={query}
          onChange={setQuery}
          onClear={() => setQuery("")}
          borderColor="border-blue-300"
        />
        <FilterInput
          placeholder="기술 스택 필터 (예: React)"
          value={techFilter}
          onChange={setTechFilter}
          onClear={() => setTechFilter("")}
          borderColor="border-green-300"
        />
        <FilterInput
          placeholder="키워드 필터"
          value={keywords}
          onChange={setKeywords}
          onClear={() => setKeywords("")}
          borderColor="border-green-300"
        />
      </div>

      {/* 프로젝트 카드 리스트 */}
      <ul className="grid w-full gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </>
  );
};

export default Project;
