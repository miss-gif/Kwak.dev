import StickyWrapper from "@/components/common/StickyWrapper";
import { useFilteredProjects } from "@/hooks/useFilteredProjects";
import FilterInput from "../components/FilterInput";
import ProjectCard from "../components/ProjectCard";
import { LinkButton } from "@/components/Button";
import { ProjectData } from "../types/type";

interface ProjectListPageProps {
  projectData: ProjectData[];
}

const ProjectListPage = ({ projectData }: ProjectListPageProps) => {
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

      {/* 링크 버튼 */}
      <div className="mb-4 flex justify-end">
        {/* <Link to={"/project/add"}>프로젝트 추가</Link> */}
        <LinkButton label="프로젝트 추가" to="/project/add" />
      </div>

      {/* 프로젝트 카드 리스트 */}
      <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </>
  );
};

export default ProjectListPage;
