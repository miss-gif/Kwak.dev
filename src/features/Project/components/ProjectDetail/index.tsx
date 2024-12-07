// src/components/ProjectDetail.tsx
import Inner from "@/layouts/Inner";
import NotFoundPage from "@/pages/NotFoundPage";
import { ProjectData } from "../../types/type";
import Description from "./Description";
import Overview from "./Overview/Overview";
import ProjectDetailHeader from "./ProjectDetailHeader";

interface ProjectDetailProps {
  data: ProjectData;
}

const ProjectDetail = ({ data }: ProjectDetailProps) => {
  if (!data) return <NotFoundPage />;

  return (
    <>
      <ProjectDetailHeader />

      <Inner className="flex-col">
        <Overview formData={data} />
        <Description formData={data} />
      </Inner>
    </>
  );
};

export default ProjectDetail;
