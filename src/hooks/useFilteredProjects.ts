import { ProjectData } from "@/features/Project/types/type";
import Fuse from "fuse.js";
import { useEffect, useState } from "react";

export const useFilteredProjects = (projectData: ProjectData[]) => {
  const [query, setQuery] = useState("");
  const [techFilter, setTechFilter] = useState("");
  const [keywords, setKeywords] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projectData);

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

    if (query) {
      const fuseResults = fuse.search(query);
      results = fuseResults.map((result) => result.item);
    }

    if (techFilter) {
      results = results.filter((project) =>
        project.card.techStack.some((tech) =>
          tech.toLowerCase().includes(techFilter.toLowerCase()),
        ),
      );
    }

    if (keywords) {
      results = results.filter((project) =>
        project.card.keywords?.some((keyword) =>
          keyword.toLowerCase().includes(keywords.toLowerCase()),
        ),
      );
    }

    setFilteredProjects(results);
  }, [query, techFilter, keywords, projectData, fuse]);

  return {
    query,
    setQuery,
    techFilter,
    setTechFilter,
    keywords,
    setKeywords,
    filteredProjects,
  };
};
