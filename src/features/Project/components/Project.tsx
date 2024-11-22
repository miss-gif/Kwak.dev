import { useFilteredProjects } from "@/hooks/useFilteredProjects";
import { ProjectData } from "@/types/projectData";
import FilterInput from "./FilterInput";
import ProjectCard from "./ProjectCard";
import StickyWrapper from "@/components/common/StickyWrapper";

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
      <StickyWrapper>
        <FilterInput
          placeholder="프로젝트 제목 검색"
          value={query}
          onChange={setQuery}
          onClear={() => setQuery("")}
        />
        <FilterInput
          placeholder="기술 스택 필터 (예: React)"
          value={techFilter}
          onChange={setTechFilter}
          onClear={() => setTechFilter("")}
        />
        <FilterInput
          placeholder="키워드 필터 (예: 반응형, 작업영역, 작업형태)"
          value={keywords}
          onChange={setKeywords}
          onClear={() => setKeywords("")}
        />
      </StickyWrapper>

      {/* 프로젝트 카드 리스트 */}
      <ul className="grid w-full gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </>
  );
};

export default Project;
