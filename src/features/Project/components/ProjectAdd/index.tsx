import Button from "@/components/Button";
import NotFoundPage from "@/pages/NotFoundPage";
import { useState } from "react";
import { initFormData } from "../../data/initFormData";
import { ProjectData } from "../../types/type";
import Description from "../ProjectDetail/Description";
import Overview from "../ProjectDetail/Overview";
import { ProjectCreate } from "../ProjectHeaderButton";

interface ProjectAddProps {
  data: ProjectData;
}

const ProjectAdd = ({ data }: ProjectAddProps) => {
  const [editMode, _] = useState(true);
  const [formData, setFormData] = useState<ProjectData>(initFormData);

  if (!data) return <NotFoundPage />;

  const handleSave = async () => console.log("저장하기", formData);

  const handleCreate = () => console.log("프로젝트 등록");

  return (
    <>
      <ProjectCreate handleCreate={handleCreate} />
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

      <div className="sticky bottom-2 w-full max-w-screen-xl">
        <Button
          label="저장하기"
          width="w-full"
          mt="mt-4"
          onClick={handleSave}
        />
      </div>
    </>
  );
};

export default ProjectAdd;
