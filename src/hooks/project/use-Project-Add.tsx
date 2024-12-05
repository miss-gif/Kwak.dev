import { createData } from "@/api/firebase-crud-api";
import { ProjectData } from "@/features/Project/types/type";
import useAdminAuthCookie from "@/hooks/use-AdminAuthCookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useProjectAdd = () => {
  const navigate = useNavigate();
  const { isAdminAuthenticated } = useAdminAuthCookie();

  const handleCreateData = async (formData: ProjectData) => {
    if (!isAdminAuthenticated()) {
      toast.error("관리자 권한이 필요합니다."); // 인증되지 않은 경우
      return;
    }

    try {
      const docID = await createData({ collectionName: "projects", formData });
      toast.success("프로젝트가 성공적으로 저장되었습니다.");
      navigate(`/project/${docID}`); // 생성된 문서의 고유 ID로 페이지 이동
    } catch (error) {
      toast.error("프로젝트 저장에 실패했습니다. 다시 시도해주세요.");
      console.error(error);
    }
  };

  return { handleCreateData };
};

export default useProjectAdd;
