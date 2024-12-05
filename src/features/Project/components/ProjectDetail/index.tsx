// src/components/ProjectDetail.tsx
import AdminAuthButton from "@/components/Button/Admin-Auth-Button";
import StickyBottomSubmit from "@/components/Button/StickyBottomSubmit";
import useProjectEdit from "@/hooks/project/use-Project-Edit";
import Inner from "@/layouts/Inner";
import NotFoundPage from "@/pages/NotFoundPage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ProjectData } from "../../types/type";
import { ProjectEdit } from "../ProjectHeaderButton";
import Description from "./Description";
import Overview from "./Overview/Overview";

interface ProjectDetailProps {
  data: ProjectData;
}

const ProjectDetail = ({ data }: ProjectDetailProps) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<ProjectData>(data);
  const { handleUpdate } = useProjectEdit();

  useEffect(() => {
    setFormData(data);
  }, [data]);

  if (!data) return <NotFoundPage />;

  const handleEditMode = () => setEditMode((prev) => !prev);

  const handleSubmit = () => {
    if (formData.docID) {
      handleUpdate(formData.docID, formData); // 훅으로 업데이트 처리
      setEditMode(false); // 수정 모드 종료
    } else {
      toast.error("문서 ID가 필요합니다.");
    }
  };

  return (
    <>
      <ProjectEdit formData={formData} editMode={editMode} onToggleEditMode={handleEditMode} />

      <Inner className="flex-col">
        <Overview formData={formData} editMode={editMode} setFormData={setFormData} />
        <Description formData={formData} editMode={editMode} setFormData={setFormData} />
        {editMode && (
          <StickyBottomSubmit>
            <AdminAuthButton label="프로젝트 수정하기" width="w-full" onClick={handleSubmit} />
          </StickyBottomSubmit>
        )}
      </Inner>
    </>
  );
};

export default ProjectDetail;
