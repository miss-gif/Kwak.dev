import { ProjectData } from "@/types/projectData";

type ProjectOverviewProps = {
  data: ProjectData["card"];
};

const ProjectOverview = ({ data }: ProjectOverviewProps) => {
  return (
    <div className="">
      {/* 제목 */}
      <h3 className="mb-2 text-xl font-bold">{data.title}</h3>
      {/* 간략한 설명 */}
      <p className="mb-4 text-gray-700">{data.description}</p>

      {/* 썸네일과 주요 정보 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* 썸네일 */}
        <div className="rounded bg-gray-200 p-4">
          <img src={data.thumbnail} alt={`${data.title} thumbnail`} />
        </div>

        {/* 프로젝트 세부 정보 */}
        <div className="space-y-4">
          {/* 클라이언트 */}
          <div className="rounded bg-gray-100 p-2">
            <div className="font-semibold">클라이언트</div>
            <div className="text-gray-600">{data.client}</div>
          </div>

          {/* 작업기간 */}
          <div className="rounded bg-gray-100 p-2">
            <div className="font-semibold">작업기간</div>
            <div className="text-gray-600">
              {`${data.duration.startDate.toLocaleDateString()} ~ ${data.duration.endDate.toLocaleDateString()}`}
            </div>
          </div>

          {/* 작업 인원 */}
          <div className="rounded bg-gray-100 p-2">
            <div className="font-semibold">작업인원</div>
            <div className="text-gray-600">{`${data.teamSize}명`}</div>
          </div>

          {/* 사용 기술 */}
          <div className="rounded bg-gray-100 p-2">
            <div className="font-semibold">사용기술</div>
            <div className="text-gray-600">{data.techStack.join(", ")}</div>
          </div>

          {/* 기여도 */}
          <p>기여도</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded bg-gray-100 p-2">
              <div className="font-semibold">기획</div>
              <div className="text-gray-600">{data.team.planner}</div>
            </div>
            <div className="rounded bg-gray-100 p-2">
              <div className="font-semibold">디자인</div>
              <div className="text-gray-600">{data.team.designer}</div>
            </div>
            <div className="rounded bg-gray-100 p-2">
              <div className="font-semibold">퍼블리싱</div>
              <div className="text-gray-600">{data.team.publisher}</div>
            </div>
            <div className="rounded bg-gray-100 p-2">
              <div className="font-semibold">개발</div>
              <div className="text-gray-600">{data.team.developer}</div>
            </div>
          </div>

          {/* 링크 */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href={data.links.demoUrl}
              className="rounded bg-blue-500 p-2 text-center text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              사이트 바로가기
            </a>
            <a
              href={data.links.githubUrl}
              className="rounded bg-blue-500 p-2 text-center text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              깃허브 바로가기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
