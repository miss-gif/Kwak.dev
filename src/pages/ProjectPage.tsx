import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import Project from "@/components/project/Project";
import { projectData } from "@/data/projectData";

const ProjectPage = () => {
  return (
    <PageLayout title="프로젝트">
      <SectionWrapper>
        <Project projectData={projectData} />
      </SectionWrapper>
    </PageLayout>
  );
};

export default ProjectPage;
