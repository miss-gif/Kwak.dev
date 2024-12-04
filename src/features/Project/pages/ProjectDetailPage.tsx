import { getDocumentById } from "@/api/firebase-crud-api";
import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectDetail from "../components/ProjectDetail";
import { ProjectData } from "../types/type";

const ProjectDetailPage = () => {
  const props = {
    title: "프로젝트 상세",
    subtitle: "✨ 프로젝트 상세 내용을 확인하세요.",
  };

  const { id } = useParams(); // URL에서 가져온 문서 키
  const [project, setProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const projectData = await getDocumentById({
          collectionName: "projects",
          docID: id as string, // Firestore 문서 키를 전달
        });
        setProject(projectData); // 문서 데이터 설정
      } catch (error) {
        console.error("데이터 로드 에러:", error);
      }
    };

    if (id) {
      loadProject(); // ID가 있을 경우에만 데이터 로드
    }
  }, [id]);

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      {project ? (
        <ProjectDetail data={project} /> // 로드된 프로젝트 데이터 전달
      ) : (
        <p>프로젝트 데이터를 불러오는 중입니다...</p>
      )}
    </PageLayout>
  );
};

export default ProjectDetailPage;
