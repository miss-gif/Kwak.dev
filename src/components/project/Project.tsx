import ProjectCard from "./ProjectCard.tsx";

function Project() {
  const projectData = {
    thumbnail: "https://via.placeholder.com/300",
    title: "포트폴리오 프로젝트",
    duration: "2023년 1월 - 3월",
    teamSize: 4,
    description: "사용자 데이터를 관리하는 웹 애플리케이션 프로젝트입니다.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
  };

  return (
    <ul className="grid gap-5 py-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <ProjectCard {...projectData} />
    </ul>
  );
}

export default Project;
