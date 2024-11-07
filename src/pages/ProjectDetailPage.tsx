import ProjectDescription from "@/components/project/ProjectDescription";
import ProjectOverview from "@/components/project/ProjectOverview";
import Section from "@/components/sections/Section";

const ProjectDetailPage = () => {
  return (
    <Section>
      <div className="flex flex-col gap-10">
        <ProjectOverview />
        <ProjectDescription />
      </div>
    </Section>
  );
};

export default ProjectDetailPage;
