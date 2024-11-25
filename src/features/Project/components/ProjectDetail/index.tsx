import NotFoundPage from "@/pages/NotFoundPage";
import { useState } from "react";
import { mockProject } from "../../data/mockProject";
import ProjectDescription from "./ProjectDescription";
import ProjectHeader from "./ProjectHeader";
import ProjectOverview from "./ProjectOverview";

const ProjectDetail = () => {
  const project = mockProject[0];
  const [editMode, setEditMode] = useState(false);

  if (!project) {
    return <NotFoundPage />;
  }

  const handleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  return (
    <>
      <ProjectHeader editMode={editMode} onToggleEditMode={handleEditMode} />
      <ProjectOverview data={project} editMode={editMode} />
      <ProjectDescription data={project} editMode={editMode} />
    </>
  );
};

export default ProjectDetail;
