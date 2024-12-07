import { fetchProjectById } from "@/api/firestore/api-firestore";
import { ProjectFormData } from "@/types/ProjectFormData";
import { useEffect, useState } from "react";

export const useProjectDetail = (id: string | undefined) => {
  const [project, setProject] = useState<ProjectFormData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const projectData = await fetchProjectById(id);
        setProject(projectData);
      } catch (error) {
        setError("프로젝트 데이터를 불러오는 중 에러가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [id]);

  return { project, loading, error };
};
