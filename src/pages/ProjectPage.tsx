import Project from "@/components/project/Project";
import Section from "@/components/sections/Section";
import { projectData } from "@/data/projectData";

const ProjectPage = () => {
  return (
    <Section>
      <div className="flex flex-col">
        <Project projectData={projectData} />
      </div>
    </Section>
  );
};

export default ProjectPage;
