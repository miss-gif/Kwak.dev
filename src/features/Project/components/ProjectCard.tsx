import { ProjectData } from "@/types/projectData";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: ProjectData; // 각 프로젝트 데이터
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { thumbnail, title, duration, description, techStack, links, badge } =
    project.card;
  const { id } = project;

  return (
    <li className="shadow-style relative overflow-hidden rounded-md border bg-white">
      {/* 썸네일 */}
      <img
        src={thumbnail}
        alt={`${title} thumbnail`}
        className="h-48 w-full object-cover"
      />

      {/* 호버 시 딤드 효과 */}
      <div className="absolute inset-0 flex items-center justify-center rounded-md bg-gray-900 opacity-0 transition-opacity duration-200 hover:opacity-100">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="pb-3 text-2xl font-semibold text-white">{title}</p>
          <Link
            to={`/project/${id}`}
            className="w-52 rounded bg-none px-4 py-3 text-center text-black transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
          >
            자세히 보기
          </Link>
          <a
            href={links.demoUrl}
            className="w-52 rounded bg-none px-4 py-3 text-center text-black transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
          >
            사이트 바로가기
          </a>
        </div>
      </div>

      {/* 카드 내용 */}
      <div className="p-6">
        {/* 제목 */}
        <h3 className="mb-2 text-2xl font-semibold text-gray-800">{title}</h3>

        {/* 작업 기간과 작업 인원 */}
        <div className="mb-4 flex items-center justify-between text-sm text-gray-600">
          <span className="font-semibold">{`${duration.startDate.toLocaleDateString()} ~ ${duration.endDate.toLocaleDateString()}`}</span>
          <div className="flex gap-1">
            {badge?.map((badge, index) => (
              <span
                key={index}
                className="rounded-md bg-gray-800 px-1 text-white"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* 간략한 설명 */}
        <p className="mb-4 line-clamp-2 text-gray-700">{description}</p>

        {/* 사용 기술 */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
