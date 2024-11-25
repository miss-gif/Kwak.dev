import { ProjectData } from "@/features/Project/types/type";
import { useAuthStore } from "@/stores/authStore";
import LabelInput from "../components/LabelInput";
import usePreviewForm from "../use-PreviewForm";

type OverviewAreaProps = {
  data: ProjectData;
};

const OverviewArea = ({ data }: OverviewAreaProps) => {
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

  const {
    formData,
    handleInputChange,
    handleSubmit,
    resetFormDataValue,
    reset,
  } = usePreviewForm();

  return (
    <div className="">
      <LabelInput
        label="프로젝트"
        type="text"
        placeholder="프로젝트 입력"
        name="projectName"
        value={projectName}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />
      <LabelInput
        label="프로젝트 설명"
        type="text"
        placeholder="프로젝트 설명 입력"
        name="description"
        value={description}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />

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
            <LabelInput
              label="썸네일 URL"
              type="text"
              placeholder="썸네일 URL 입력"
              name="thumbnail"
              value={thumbnail}
              onChange={handleInputChange}
              onEscKeyDown={resetFormDataValue}
            />
          </div>
        )}

        {/* 프로젝트 세부 정보 */}
        <div className="flex flex-col gap-8">
          {/* 클라이언트 */}
          <div>
            <LabelInput
              label="클라이언트"
              type="text"
              placeholder="클라이언트 입력"
              name="client"
              value={client}
              onChange={handleInputChange}
              onEscKeyDown={resetFormDataValue}
            />
          </div>

          {/* 작업기간 */}
          <div>
            <div className="font-semibold">작업기간</div>
            <div className="flex items-center gap-2 text-gray-600">
              <LabelInput
                // label="시작"
                type="text"
                placeholder="시작 입력"
                name="startDate"
                value={startDate}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
              ~
              <LabelInput
                // label="종료"
                type="text"
                placeholder="종료 입력"
                name="endDate"
                value={endDate}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            </div>
          </div>

          {/* 작업 인원 */}
          <div>
            <LabelInput
              label="작업 인원"
              type="text"
              placeholder="작업 참여 인원"
              name="teamSize"
              value={teamSize}
              onChange={handleInputChange}
              onEscKeyDown={resetFormDataValue}
            />
          </div>

          {/* 사용 기술 */}
          <div>
            <LabelInput
              label="사용기술"
              type="text"
              placeholder="사용기술 입력"
              name="design"
              value={design}
              onChange={handleInputChange}
              onEscKeyDown={resetFormDataValue}
            />
          </div>

          {/* 기여도 */}
          <div className="gap- grid grid-cols-2 gap-4">
            <div>
              <LabelInput
                label="기획"
                type="text"
                placeholder="기획 입력"
                name="planning"
                value={planning}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            </div>
            <div>
              <LabelInput
                label="디자인"
                type="text"
                placeholder="디자인 입력"
                name="design"
                value={design}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            </div>
            <div>
              <LabelInput
                label="퍼블리싱"
                type="text"
                placeholder="퍼블리싱 입력"
                name="publishing"
                value={publishing}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            </div>
            <div>
              <LabelInput
                label="개발"
                type="text"
                placeholder="개발 입력"
                name="development"
                value={development}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            </div>
          </div>

          {/* 링크 */}
          <div className="grid grid-cols-2 gap-4">
            <LabelInput
              label="데모 URL"
              type="text"
              placeholder="데모 URL 입력"
              name="demoUrl"
              value={demoUrl}
              onChange={handleInputChange}
              onEscKeyDown={resetFormDataValue}
            />

            <LabelInput
              label="깃허브 URL"
              type="text"
              placeholder="깃허브 URL 입력"
              name="githubUrl"
              value={githubUrl}
              onChange={handleInputChange}
              onEscKeyDown={resetFormDataValue}
            />

            <LabelInput
              label="Canva URL"
              type="text"
              placeholder="Canva URL 입력"
              name="githubUrl"
              value={githubUrl}
              onChange={handleInputChange}
              onEscKeyDown={resetFormDataValue}
            />
            <LabelInput
              label="Figma URL"
              type="text"
              placeholder="Figma URL 입력"
              name="githubUrl"
              value={githubUrl}
              onChange={handleInputChange}
              onEscKeyDown={resetFormDataValue}
            />
            <LabelInput
              label="Swagger URL"
              type="text"
              placeholder="Swagger URL 입력"
              name="githubUrl"
              value={githubUrl}
              onChange={handleInputChange}
              onEscKeyDown={resetFormDataValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewArea;
