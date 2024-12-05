import { fetchProjects } from "@/api/firestore/api-firestore";
import { ProjectData } from "@/features/Project/types/type";
import { useEffect, useState } from "react";

const useProjectList = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const projectData = await fetchProjects();
        setProjects(projectData);
      } catch (err) {
        setError("프로젝트 데이터를 불러오는 중 에러가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return { projects, loading, error };
};

export default useProjectList;
