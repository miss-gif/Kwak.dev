import { ProjectData } from "@/types/projectData";
import CloseIcon from "@mui/icons-material/Close";
import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard.tsx";

interface ProjectProps {
  projectData: ProjectData[]; // ProjectData 배열
}

function Project({ projectData }: ProjectProps) {
  const [query, setQuery] = useState("");
  const [techFilter, setTechFilter] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projectData);

  // fuse.js 설정
  const fuse = new Fuse(projectData, {
    keys: [
      "card.title",
      "card.techStack",
      "card.badge",
      "card.duration",
      "card.keywords",
    ],
    threshold: 0.3,
  });

  // 검색 및 필터링 로직
  useEffect(() => {
    let results = projectData;

    // Fuse.js로 검색
    if (query) {
      const fuseResults = fuse.search(query);
      results = fuseResults.map((result) => result.item);
    }

    // 추가 필터링 (techStack 필터)
    if (techFilter) {
      results = results.filter((project) =>
        project.card.techStack.some((tech) =>
          tech.toLowerCase().includes(techFilter.toLowerCase()),
        ),
      );
    }

    setFilteredProjects(results);
  }, [query, techFilter, projectData, fuse]);

  // 검색어 초기화 함수
  const clearQuery = () => setQuery("");
  const clearTechFilter = () => setTechFilter("");

  return (
    <>
      {/* 검색 및 필터 UI */}
      <div className="sticky top-20 z-10 flex w-full items-center gap-4">
        {/* 제목 검색 */}
        <input
          type="text"
          placeholder="프로젝트 제목 검색"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border-2 border-blue-300 px-4 py-2"
        />
        {/* 기술 스택 필터 */}
        <input
          type="text"
          placeholder="기술 스택 필터 (예: React)"
          value={techFilter}
          onChange={(e) => setTechFilter(e.target.value)}
          className="w-full rounded-lg border-2 border-green-300 px-4 py-2"
        />
        {/* 초기화 버튼 */}
        {query && (
          <button
            onClick={clearQuery}
            className="text-gray-500 hover:text-gray-700"
          >
            <CloseIcon />
          </button>
        )}
        {techFilter && (
          <button
            onClick={clearTechFilter}
            className="text-gray-500 hover:text-gray-700"
          >
            <CloseIcon />
          </button>
        )}
      </div>
      <ul className="grid w-full gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </>
  );
}

export default Project;
