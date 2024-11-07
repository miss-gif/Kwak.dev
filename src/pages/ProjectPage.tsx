import ProjectFilter from "@/components/project/ProjectFilter";
import Section from "@/components/sections/Section";
import Project from "@/components/project/project";

const ProjectPage = () => {
  return (
    <Section>
      <div className="flex flex-col">
        <ProjectFilter />
        <Project />
      </div>
    </Section>
  );
};

export default ProjectPage;
