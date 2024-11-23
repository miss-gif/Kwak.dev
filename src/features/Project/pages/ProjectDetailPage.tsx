import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import LinkButton from "@/components/LinkButton";
import { useParams } from "react-router-dom";
import ProjectDetail from "../components/ProjectDetail";

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
          <LinkButton title="프로젝트 수정" link={`/project/edit/${id}`} />
        </div>
        <ProjectDetail />
      </SectionWrapper>
    </PageLayout>
  );
};

export default ProjectDetailPage;
