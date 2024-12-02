import { deleteData } from "@/api/firebase-crud-api";
import { BackButton } from "@/components/Button";
import AdminAuthButton from "@/components/Button/Admin-Auth-Button";
import UserAuthButton from "@/components/Button/User-Auth-Button";
import StickyWrapper from "@/components/common/StickyWrapper";
import { Button } from "@/components/ui/button";
import useAdminAuthCookie from "@/hooks/use-AdminAuthCookie";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { RotateCcw } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface ProjectButtonHeaderProps {
  children: React.ReactNode;
}

interface ProjectEditProps {
  formData: Record<string, any>;
  editMode: boolean;
  onToggleEditMode: () => void;
}

interface ProjectCreateProps {
  handleFormReset: () => void;
}

const ProjectButtonHeader = ({ children }: ProjectButtonHeaderProps) => {
  return <div className="mb-4 flex justify-between">{children}</div>;
};

export const ProjectAdd = () => {
  return (
    <ProjectButtonHeader>
      <span></span>
      <Button asChild>
        <Link to="add">Add</Link>
      </Button>
    </ProjectButtonHeader>
  );
};

export const ProjectEdit = ({ formData, editMode, onToggleEditMode }: ProjectEditProps) => {
  const navigete = useNavigate();
  const { isAdminAuthenticated } = useAdminAuthCookie();

  // 삭제 버튼 클릭 시 실행되는 함수
  const handleDelete = async () => {
    if (!isAdminAuthenticated()) {
      toast.error("관리자 권한이 필요합니다."); // 인증되지 않은 경우
      return;
    }

    try {
      if (!formData.docID) {
        throw new Error("Document ID is required for update");
      }
      await deleteData({
        collectionName: "projects",
        docID: formData.docID,
      });
      toast.success("삭제 성공"); // 성공 피드백
      onToggleEditMode(); // 삭제 모드 종료
      navigete("/project"); // 목록 페이지로 이동
    } catch (error) {
      toast.error("삭제 실패"); // 사용자에게 에러 메시지 표시
      console.error("Error in handleUpdate:", error); // 디버깅을 위한 에러 로그
    }
  };

  return (
    <StickyWrapper>
      {!editMode ? (
        <>
          <Button size="icon">
            <Link to="/project">
              <ArrowBackIosNewIcon />
            </Link>
          </Button>
          <UserAuthButton label="Edit" onClick={onToggleEditMode} />
        </>
      ) : (
        <div className="flex w-full justify-between">
          <Button size="icon" onClick={onToggleEditMode}>
            <ArrowBackIosNewIcon />
          </Button>

          <AdminAuthButton label="삭제" color="red" onClick={handleDelete} />
        </div>
      )}
    </StickyWrapper>
  );
};

export const ProjectCreate = ({ handleFormReset }: ProjectCreateProps) => {
  return (
    <StickyWrapper>
      <BackButton />
      <Button onClick={handleFormReset} variant="destructive" size="icon">
        <RotateCcw />
      </Button>
    </StickyWrapper>
  );
};
