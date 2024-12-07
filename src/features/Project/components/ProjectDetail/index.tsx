// src/components/ProjectDetail.tsx
import Inner from "@/layouts/Inner";
import NotFoundPage from "@/pages/NotFoundPage";
import { useState } from "react";
import { ProjectData } from "../../types/type";
import Description from "./Description";
import Overview from "./Overview/Overview";
import ProjectDetailHeader from "./ProjectDetailHeader";

interface ProjectDetailProps {
  data: ProjectData;
}

const ProjectDetail = ({ data }: ProjectDetailProps) => {
  const [editMode] = useState(false);
  const [formData, setFormData] = useState<ProjectData>(data);

  if (!data) return <NotFoundPage />;

  return (
    <>
      <ProjectDetailHeader />

      <Inner className="flex-col">
        <Overview formData={formData} editMode={editMode} setFormData={setFormData} />
        <Description formData={formData} editMode={editMode} setFormData={setFormData} />
      </Inner>
    </>
  );
};

export default ProjectDetail;
