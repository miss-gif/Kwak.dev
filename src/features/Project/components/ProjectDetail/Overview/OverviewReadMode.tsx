import { ProjectData } from "@/features/Project/types/type";
import ProjectLinks from "./ProjectLinks";

const OverviewReadMode = ({ formData }: { formData: ProjectData }) => {
  return (
    <>
      <div className="py-4">
        <h3 className="mb-2 text-xl font-bold">{formData.projectName}</h3>
        <p>{formData.description}</p>
      </div>

      <div className="flex w-full gap-4">
        <div className="h-1/2 w-1/2 shrink-0">
          <img src={formData.thumbnail} alt={`${formData.projectName} thumbnail`} className="w-full rounded-md" />
        </div>

        <div className="flex w-full flex-col gap-4 py-2">
          <div className="w-full">
            <div className="font-semibold">클라이언트</div>
            <div>{formData.client}111</div>
          </div>

          <div>
            <div className="font-semibold">작업기간</div>
            <div>{`${formData.startDate} ~ ${formData.endDate}`}</div>
          </div>

          <div>
            <div className="font-semibold">참여인원</div>
            <div>{formData.teamSize}</div>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <div className="font-semibold">작업영역</div>
              <div>{formData.badgeProjectType}</div>
            </div>

            <div>
              <div className="font-semibold">디바이스 지원</div>
              <div>{formData.badgeProjectDevice}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="font-semibold">기획</div>
              <div>{formData.planning}</div>
            </div>
            <div>
              <div className="font-semibold">디자인</div>
              <div>{formData.design}</div>
            </div>
            <div>
              <div className="font-semibold">퍼블리싱</div>
              <div>{formData.publishing}</div>
            </div>
            <div>
              <div className="font-semibold">개발</div>
              <div>{formData.development}</div>
            </div>
          </div>

          <div>
            <div className="font-semibold">기술스택</div>
            <div>{formData.techStack.join(", ")}</div>
          </div>

          <ProjectLinks urls={formData} />
        </div>
      </div>
    </>
  );
};

export default OverviewReadMode;
