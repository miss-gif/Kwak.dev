import { useAuthStore } from "@/stores/authStore";
import { ProjectData } from "../../types/type";

type ProjectOverviewProps = {
  data: ProjectData;
};

const ProjectOverview = ({ data }: ProjectOverviewProps) => {
  const {
    projectName,
    description,
    thumbnail,
    client,
    startDate,
    endDate,
    techStack,
    teamSize,
    planning,
    demoUrl,
    githubUrl,
    design,
    publishing,
    development,
  } = data;
  const { user } = useAuthStore();

  return (
    <div className="">
      {/* 제목 */}
      <h3 className="mb-2 text-xl font-bold">{projectName}</h3>
      {/* 간략한 설명 */}
      <p className="mb-4 text-gray-700">{description}</p>

      {/* 썸네일과 주요 정보 */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* 썸네일 */}
        {thumbnail && (
          <div className="overflow-hidden">
            <img
              src={thumbnail}
              alt={`${projectName} thumbnail`}
              className="w-full rounded-md"
            />
          </div>
        )}

        {/* 프로젝트 세부 정보 */}
        <div className="flex flex-col gap-8">
          {/* 클라이언트 */}
          <div>
            <div className="font-semibold">클라이언트</div>
            <div className="text-gray-600">{client}</div>
          </div>

          {/* 작업기간 */}
          <div>
            <div className="font-semibold">작업기간</div>
            <div className="text-gray-600">{`${startDate} ~ ${endDate}`}</div>
          </div>

          {/* 작업 인원 */}
          <div>
            <div className="font-semibold">작업인원</div>
            <div className="text-gray-600">{`${teamSize}명`}</div>
          </div>

          {/* 사용 기술 */}
          <div>
            <div className="font-semibold">사용기술</div>
            <div className="text-gray-600">{techStack.join(", ")}</div>
          </div>

          {/* 기여도 */}
          <div className="gap- grid grid-cols-2 gap-4">
            <div>
              <div className="font-semibold">기획</div>
              <div className="text-gray-600">{planning}</div>
            </div>
            <div>
              <div className="font-semibold">디자인</div>
              <div className="text-gray-600">{design}</div>
            </div>
            <div>
              <div className="font-semibold">퍼블리싱</div>
              <div className="text-gray-600">{publishing}</div>
            </div>
            <div>
              <div className="font-semibold">개발</div>
              <div className="text-gray-600">{development}</div>
            </div>
          </div>

          {/* 링크 */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href={demoUrl}
              className="rounded bg-gray-600 py-2 text-center text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              사이트 바로가기
            </a>

            <a
              href={user ? githubUrl : "#"}
              className={`rounded bg-gray-600 py-2 text-center text-white ${!user ? "cursor-not-allowed opacity-50" : ""}`}
              target={user ? "_blank" : "_self"}
              rel="noopener noreferrer"
              onClick={() => {
                if (!user) alert("로그인이 필요합니다.");
              }}
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
