import { useState } from "react";
import { toast } from "react-toastify";
import useAdminAuthCookie from "@/hooks/use-AdminAuthCookie";
import { updateProject } from "@/api/firestore/api-firestore";
import { ProjectData } from "@/features/Project/types/type";

const useProjectEdit = () => {
  const { isAdminAuthenticated } = useAdminAuthCookie();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpdate = async (docID: string, formData: ProjectData) => {
    if (!isAdminAuthenticated()) {
      toast.error("관리자 권한이 필요합니다.");
      return;
    }

    try {
      setLoading(true);
      await updateProject(docID, formData); // API 호출
      toast.success("수정 성공");
    } catch (error) {
      toast.error("수정 실패");
      setError("프로젝트 업데이트 중 에러 발생");
    } finally {
      setLoading(false);
    }
  };

  return { handleUpdate, loading, error };
};

export default useProjectEdit;
