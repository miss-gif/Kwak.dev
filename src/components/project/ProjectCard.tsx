interface ProjectCardProps {
  thumbnail: string;
  title: string;
  duration: string;
  teamSize: number;
  description: string;
  technologies: string[];
}

const ProjectCard = ({
  thumbnail,
  title,
  duration,
  teamSize,
  description,
  technologies,
}: ProjectCardProps) => {
  return (
    <li className="max-w-sm overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-200 hover:shadow-lg">
      {/* 썸네일 */}
      <img
        src={thumbnail}
        alt={`${title} thumbnail`}
        className="h-48 w-full object-cover"
      />

      {/* 카드 내용 */}
      <div className="p-6">
        {/* 제목 */}
        <h3 className="mb-2 text-2xl font-semibold text-gray-800">{title}</h3>

        {/* 작업 기간과 작업 인원 */}
        <div className="mb-4 text-sm text-gray-600">
          <span>{duration}</span> | <span>{teamSize}명 작업</span>
        </div>

        {/* 간략한 설명 */}
        <p className="mb-4 text-gray-700">{description}</p>

        {/* 사용 기술 */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
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
