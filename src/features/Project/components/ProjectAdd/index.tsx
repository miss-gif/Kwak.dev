import { createData } from "@/api/firebase-crud-api";
import Button from "@/components/Button";
import StickyBottomSubmit from "@/components/Button/StickyBottomSubmit";
import NotFoundPage from "@/pages/NotFoundPage";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { initFormData } from "../../data/initFormData";
import { ProjectData } from "../../types/type";
import Description from "../ProjectDetail/Description";
import Overview from "../ProjectDetail/Overview";
import { ProjectCreate } from "../ProjectHeaderButton";

interface ProjectAddProps {
  data: ProjectData;
}

const ProjectAdd = ({ data }: ProjectAddProps) => {
  const [editMode] = useState(true);
  const [formData, setFormData] = useState<ProjectData>(initFormData);
  const navigate = useNavigate();
  const [cookies] = useCookies(["admin-auth"]);

  if (!data) return <NotFoundPage />;

  const handleFormReset = () => setFormData(initFormData);

  const handleCreateData = async () => {
    // 인증 상태 확인
    if (!cookies["admin-auth"]) {
      toast.error("관리자 인증이 필요합니다.");
      navigate("/admin"); // 로그인 페이지로 리다이렉트
      return; // 함수 실행 중단
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

  return (
    <>
      <ProjectCreate handleFormReset={handleFormReset} />
      <Overview
        formData={formData}
        setFormData={setFormData}
        editMode={editMode}
      />
      <Description
        formData={formData}
        setFormData={setFormData}
        editMode={editMode}
      />
      <StickyBottomSubmit>
        <Button
          label="프로젝트 저장하기"
          width="w-full"
          mt="mt-4"
          onClick={() => handleCreateData()}
        />
      </StickyBottomSubmit>
    </>
  );
};

export default ProjectAdd;
