import NotFoundPage from "@/pages/NotFoundPage";
import { useState } from "react";
import { ProjectData } from "../../types/type";
import { ProjectEdit } from "../ProjectHeaderButton";
import Overview from "./Overview";
import Description from "./Description";

interface ProjectDetailProps {
  data?: ProjectData;
}

const ProjectDetail = ({ data }: ProjectDetailProps) => {
  const [editMode, setEditMode] = useState(false);

  if (!data) {
    return <NotFoundPage />;
  }

  const handleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  return (
    <>
      <ProjectEdit editMode={editMode} onToggleEditMode={handleEditMode} />
      <Overview data={data} editMode={editMode} />
      <Description data={data} editMode={editMode} />
    </>
  );
};

export default ProjectDetail;
