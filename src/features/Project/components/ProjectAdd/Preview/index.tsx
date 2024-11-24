import { mockProject } from "@/features/Project/data/mockProject";
import ProjectCard from "../../ProjectCard";
import PreviewForm from "./PreviewForm";

const Preview = () => {
  return (
    <div className="flex gap-4">
      {/* <PreviewArea /> */}
      <ProjectCard project={mockProject[0]} />
      <PreviewForm />
    </div>
  );
};

export default Preview;
