import AdminAuthButton from "@/components/Button/Admin-Auth-Button";
import StickyBottomSubmit from "@/components/Button/StickyBottomSubmit";
import useProjectAdd from "@/hooks/project/use-Project-add";
import Inner from "@/layouts/Inner";
import { useState } from "react";
import { initFormData } from "../../data/initFormData";
import { ProjectData } from "../../types/type";
import Description from "../ProjectDetail/Description";
import Overview from "../ProjectDetail/Overview/Overview";
import { ProjectCreate } from "../ProjectHeaderButton";

const ProjectAdd = () => {
  const { handleCreateData } = useProjectAdd();
  const [editMode] = useState(true);
  const [formData, setFormData] = useState<ProjectData>(initFormData);

  const handleFormReset = () => setFormData(initFormData);

  return (
    <>
      <ProjectCreate handleFormReset={handleFormReset} />
      <Inner className="flex-col">
        <Overview formData={formData} setFormData={setFormData} editMode={editMode} />
        <Description formData={formData} setFormData={setFormData} editMode={editMode} />

        <StickyBottomSubmit>
          <AdminAuthButton label="프로젝트 저장하기" width="w-full" onClick={() => handleCreateData(formData)} />
        </StickyBottomSubmit>
      </Inner>
    </>
  );
};

export default ProjectAdd;
