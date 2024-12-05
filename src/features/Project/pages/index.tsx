import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import useProjectList from "@/hooks/project/use-Project-List";
import ProjectHeaderFilter from "../components/ProjectHeaderFilter";
import { useFilteredProjects } from "../hooks/use-FilteredProjects";
import ProjectListPage from "./ProjectListPage";

const ProjectPage = () => {
  const { projects, loading, error } = useProjectList();
  const { query, setQuery, techFilter, setTechFilter, filteredProjects } = useFilteredProjects(projects);

  const filterData = {
    query,
    setQuery,
    techFilter,
    setTechFilter,
  };

  const props = {
    title: "Project",
    subtitle: "✨ 제가 작업한 프로젝트를 만나보세요.",
  };

  if (loading) {
    return (
      <PageLayout title={props.title} subtitle={props.subtitle}>
        <p>프로젝트 데이터를 불러오는 중입니다...</p>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout title={props.title} subtitle={props.subtitle}>
        <p>{error}</p>
      </PageLayout>
    );
  }

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
