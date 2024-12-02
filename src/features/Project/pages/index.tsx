import { readData } from "@/api/firebase-crud-api";
import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import { useEffect, useState } from "react";
import ProjectHeaderFilter from "../components/ProjectHeaderFilter";
import { useFilteredProjects } from "../hooks/use-FilteredProjects";
import { ProjectData } from "../types/type";
import ProjectListPage from "./ProjectListPage";

const ProjectPage = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]); // 초기값과 함께 타입 명시
  const { query, setQuery, techFilter, setTechFilter, filteredProjects } = useFilteredProjects(projects);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectData = await readData<ProjectData>({
          collectionName: "projects",
        });
        setProjects(projectData);
      } catch (error) {
        console.error("프로젝트 불러오기 실패", error);
      }
    };
    loadProjects();
  }, []);

  const props = {
    title: "Project",
    subtitle: "✨ 제가 작업한 프로젝트를 만나보세요.",
  };

  const filterData = {
    query,
    setQuery,
    techFilter,
    setTechFilter,
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <ProjectHeaderFilter {...filterData} />

      <SectionWrapper>
        <ProjectListPage filteredProjects={filteredProjects} />
      </SectionWrapper>
    </PageLayout>
  );
};

export default ProjectPage;
