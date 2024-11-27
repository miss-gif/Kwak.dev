import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import useCollection from "@/hooks/use-Collection";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectDetail from "../components/ProjectDetail";
import { initFormData } from "../data/initFormData";
import { ProjectData } from "../types/type";

const ProjectDetailPage = () => {
  const props = {
    title: "프로젝트 상세",
    subtitle: "✨ 프로젝트 상세 내용을 확인하세요.",
  };

  const { id } = useParams(); // URL에서 가져온 필드 키 값
  const [project, setProject] = useState<ProjectData>(initFormData);
  const { fetchProject } = useCollection();

  useEffect(() => {
    const loadProject = async () => {
      try {
        const projectData = await fetchProject({
          collectionName: "project",
          id: id, // 필드 키 값 전달
          isFieldKey: true, // 필드 키로 검색
        });
        console.log("프로젝트 데이터:", projectData);
        setProject(projectData);
      } catch (error) {
        console.error("데이터 로드 에러:", error);
      }
    };

    if (id) {
      loadProject(); // ID가 있을 경우에만 호출
    }
  }, [id]);

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <ProjectDetail data={project} />
      </SectionWrapper>
    </PageLayout>
  );
};

export default ProjectDetailPage;
