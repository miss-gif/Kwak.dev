import { ProjectData } from "@/features/Project/types/type";
import Fuse from "fuse.js";
import { useEffect, useMemo, useState } from "react";

export const useFilteredProjects = (projectData: ProjectData[]) => {
  const [query, setQuery] = useState("");
  const [techFilter, setTechFilter] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projectData);

  // Fuse 객체를 useMemo로 캐싱
  const fuse = useMemo(
    () =>
      new Fuse(projectData, {
        keys: [
          "projectName",
          "techStack",
          "badgeProjectDevice",
          "badgeProjectType",
          "badgeParticipation",
          "startDate",
        ],
        threshold: 0.3,
      }),
    [projectData], // projectData가 변경될 때만 Fuse 객체를 다시 생성
  );

  useEffect(() => {
    let results = projectData;

    if (query) {
      const fuseResults = fuse.search(query);
      results = fuseResults.map((result) => result.item);
    }

    if (techFilter) {
      results = results.filter((project) =>
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(techFilter.toLowerCase()),
        ),
      );
    }

    setFilteredProjects(results);
  }, [query, techFilter, fuse]); // 의존성 배열에 필요한 값들 추가

  return {
    query,
    setQuery,
    techFilter,
    setTechFilter,
    filteredProjects,
  };
};
