import Button from "@/components/Button";
import NotFoundPage from "@/pages/NotFoundPage";
import { useEffect, useState } from "react";
import { ProjectData } from "../../types/type";
import { ProjectEdit } from "../ProjectHeaderButton";
import Description from "./Description";
import Overview from "./Overview";

interface ProjectDetailProps {
  data: ProjectData;
}

const ProjectDetail = ({ data }: ProjectDetailProps) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<ProjectData>(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  if (!data) return <NotFoundPage />;

  const handleEditMode = () => setEditMode((prev) => !prev);
  const handleSave = async () => console.log("저장하기", formData);

  return (
    <>
      <ProjectEdit editMode={editMode} onToggleEditMode={handleEditMode} />
      <Overview
        formData={formData}
        editMode={editMode}
        setFormData={setFormData}
      />
      <Description
        formData={formData}
        editMode={editMode}
        setFormData={setFormData}
      />

      {editMode && (
        <div className="sticky bottom-2 w-full max-w-screen-xl">
          <Button
            label="저장하기"
            width="w-full"
            mt="mt-4"
            onClick={handleSave}
          />
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
