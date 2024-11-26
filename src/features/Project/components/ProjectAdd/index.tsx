import Button from "@/components/Button";
import NotFoundPage from "@/pages/NotFoundPage";
import { useState } from "react";
import { initFormData } from "../../data/initFormData";
import { ProjectData } from "../../types/type";
import Description from "../ProjectDetail/Description";
import Overview from "../ProjectDetail/Overview";
import { ProjectCreate } from "../ProjectHeaderButton";
import useCollection from "@/hooks/use-Collection";

interface ProjectAddProps {
  data: ProjectData;
}

const ProjectAdd = ({ data }: ProjectAddProps) => {
  const [editMode] = useState(true);
  const [formData, setFormData] = useState<ProjectData>(initFormData);
  const { onSubmit } = useCollection();

  if (!data) return <NotFoundPage />;

  const handleFormReset = () => setFormData(initFormData);

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
      <div className="sticky bottom-2 w-full max-w-screen-xl">
        <Button
          label="저장하기"
          width="w-full"
          mt="mt-4"
          onClick={() =>
            onSubmit({ collectionName: "project", data: formData })
          }
        />
      </div>
    </>
  );
};

export default ProjectAdd;
