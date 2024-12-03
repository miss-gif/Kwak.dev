import { Badge } from "@/components/ui/badge";
import { ProjectData } from "../../types/type";

interface PreviewCardProps {
  project: ProjectData; // 각 프로젝트 데이터
}

const PreviewCard = ({ project }: PreviewCardProps) => {
  const {
    thumbnail,
    projectName,
    description,
    techStack,
    startDate,
    endDate,
    badgeProjectDevice,
    badgeProjectType,
    badgeParticipation,
  } = project;

  return (
    <>
      {/* 썸네일 */}
      <img src={thumbnail} alt={`${projectName} thumbnail`} className="h-48 w-full object-cover" />
      {/* 카드 내용 */}
      <div className="p-4">
        {/* 제목 */}
        <h3 className="mb-2 text-2xl font-semibold">{projectName}</h3>

        {/* 작업 기간과 작업 인원 */}
        <div className="mb-3 flex flex-col gap-2 text-sm">
          <span className="font-semibold">
            {startDate} ~ {endDate}
          </span>
          <div className="flex gap-2">
            <Badge>{badgeProjectDevice}</Badge>
            <Badge>{badgeProjectType}</Badge>
            <Badge>{badgeParticipation}</Badge>
          </div>
        </div>

        {/* 간략한 설명 */}
        <p className="mb-3 line-clamp-2">{description}</p>

        {/* 사용 기술 */}
        <div className="flex h-24 flex-wrap gap-2 overflow-hidden">
          {techStack.map((tech: string, index: number) => (
            <span
              key={index}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-800 dark:bg-gray-800 dark:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default PreviewCard;
