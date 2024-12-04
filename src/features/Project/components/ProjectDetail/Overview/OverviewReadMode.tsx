import { ProjectData } from "@/features/Project/types/type";
import ProjectLinks from "./ProjectLinks";

const OverviewReadMode = ({ formData }: { formData: ProjectData }) => {
  return (
    <>
      <div className="py-4">
        <h3 className="mb-2 text-xl font-bold">{formData.projectName}</h3>
        <p className="p-1">{formData.description}</p>
      </div>

      <div className="flex w-full flex-col gap-4 xl:flex-row">
        <div className="h-96 shrink-0 overflow-hidden rounded-md xl:h-1/2 xl:w-1/2">
          <img src={formData.thumbnail} alt={`${formData.projectName} thumbnail`} className="w-full" />
        </div>

        <div className="flex w-full flex-col gap-4 py-2">
          <div className="w-full">
            <div className="font-semibold">클라이언트</div>
            <p className="p-1">{formData.client}</p>
          </div>

          <div>
            <div className="font-semibold">작업기간</div>
            <p className="p-1">{`${formData.startDate} ~ ${formData.endDate}`}</p>
          </div>

          <div>
            <div className="font-semibold">참여인원</div>
            <p className="p-1">{formData.teamSize}</p>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <div className="font-semibold">작업영역</div>
              <p className="p-1">{formData.badgeProjectType}</p>
            </div>

            <div>
              <div className="font-semibold">디바이스 지원</div>
              <p className="p-1">{formData.badgeProjectDevice}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1">
            <div>
              <div className="font-semibold">기획</div>
              <p className="p-1">{formData.planning}</p>
            </div>
            <div>
              <div className="font-semibold">디자인</div>
              <p className="p-1">{formData.design}</p>
            </div>
            <div>
              <div className="font-semibold">퍼블리싱</div>
              <p className="p-1">{formData.publishing}</p>
            </div>
            <div>
              <div className="font-semibold">개발</div>
              <p className="p-1">{formData.development}</p>
            </div>
          </div>

          <div>
            <div className="font-semibold">기술스택</div>
            <p className="p-1">{formData.techStack.join(", ")}</p>
          </div>

          <ProjectLinks urls={formData} />
        </div>
      </div>
    </>
  );
};

export default OverviewReadMode;
