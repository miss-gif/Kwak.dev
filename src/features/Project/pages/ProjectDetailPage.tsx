import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import { useParams } from "react-router-dom";
import ProjectDetail from "../components/ProjectDetail";
import { LinkButton } from "@/components/Button";

const ProjectDetailPage = () => {
  const { id } = useParams();

  const props = {
    title: "프로젝트 상세",
    subtitle: "✨ 프로젝트 상세 내용을 확인하세요.",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <div className="mb-4 flex justify-end">
          <LinkButton label="프로젝트 수정" to={`/project/edit/${id}`} />
        </div>
        <ProjectDetail />
      </SectionWrapper>
    </PageLayout>
  );
};

export default ProjectDetailPage;
