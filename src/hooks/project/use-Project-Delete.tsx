import { deleteData } from "@/api/firebase-crud-api";
import useAdminAuthCookie from "@/hooks/use-AdminAuthCookie";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useProjectDelete = () => {
  const navigete = useNavigate();
  const { isAdminAuthenticated } = useAdminAuthCookie();
  const { id } = useParams();

  const handleDelete = async () => {
    if (!isAdminAuthenticated()) {
      toast.error("관리자 권한이 필요합니다."); // 인증되지 않은 경우
      return;
    }

    if (!confirm("정말 삭제하시겠습니까?")) return; // 사용자가 취소한 경우

    try {
      await deleteData({
        collectionName: "projects",
        docID: id || "",
      });
      toast.success("삭제 성공"); // 성공 피드백
      navigete("/project"); // 목록 페이지로 이동
    } catch (error) {
      toast.error("삭제 실패"); // 사용자에게 에러 메시지 표시
      console.error("Error in handleUpdate:", error); // 디버깅을 위한 에러 로그
    }
  };
  return { handleDelete };
};

export default useProjectDelete;
