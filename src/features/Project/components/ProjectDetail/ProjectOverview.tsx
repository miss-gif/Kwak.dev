import Button from "@/components/Button";
import { useAuthStore } from "@/stores/authStore";
import { ProjectData } from "../../types/type";
import LabelInput from "../ProjectAdd/components/LabelInput";
import RadioGroup from "../ProjectAdd/components/RadioGroup";
import usePreviewForm from "../ProjectAdd/use-PreviewForm";

type ProjectOverviewProps = {
  data: ProjectData;
  editMode: boolean;
};

const ProjectOverview = ({ data, editMode }: ProjectOverviewProps) => {
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
    badgeProjectDevice,
    badgeProjectType,
    badgeParticipation,
  } = data;
  const { user } = useAuthStore();

  const { handleInputChange, resetFormDataValue } = usePreviewForm();

  return (
    <div className="">
      <div>
        {!editMode ? (
          <h3 className="mb-2 text-xl font-bold">{projectName}</h3>
        ) : (
          <LabelInput
            label="프로젝트"
            type="text"
            placeholder="프로젝트 입력"
            name="projectName"
            value={projectName}
            onChange={handleInputChange}
            onEscKeyDown={resetFormDataValue}
          />
        )}
        {!editMode ? (
          <p className="mb-4 text-gray-700">{description}</p>
        ) : (
          <LabelInput
            label="프로젝트 설명"
            type="text"
            placeholder="프로젝트 설명 입력"
            name="description"
            value={description}
            onChange={handleInputChange}
            onEscKeyDown={resetFormDataValue}
          />
        )}
      </div>

      {/* 썸네일과 주요 정보 */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="overflow-hidden">
          <img
            src={thumbnail}
            alt={`${projectName} thumbnail`}
            className="w-full rounded-md"
          />
          {editMode && (
            <>
              <LabelInput
                label="썸네일 URL"
                type="text"
                placeholder="썸네일 URL 입력"
                name="thumbnail"
                value={thumbnail}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
              <RadioGroup
                label="디바이스 지원"
                options={["반응형", "데스크탑"]}
                name="badgeProjectDevice"
                value={badgeProjectDevice}
                onChange={handleInputChange}
              />

              <RadioGroup
                label="프로젝트 유형"
                options={["퍼블리싱", "프론트엔드", "풀스택"]}
                name="badgeProjectType"
                value={badgeProjectType}
                onChange={handleInputChange}
              />
              <RadioGroup
                label="참여 형태"
                options={["개인", "협업", "스터디"]}
                name="badgeParticipation"
                value={badgeParticipation}
                onChange={handleInputChange}
              />

              <div className="flex items-center">
                <label className="min-w-32 text-sm font-medium">기술스택</label>
                <Button label="모달창 열기" width="w-full" py="py-2" />
              </div>
            </>
          )}
        </div>

        {/* 프로젝트 세부 정보 */}
        <div className="flex flex-col gap-8">
          {/* 클라이언트 */}
          {!editMode ? (
            <div>
              <div className="font-semibold">클라이언트</div>
              <div className="text-gray-600">{client}</div>
            </div>
          ) : (
            <LabelInput
              label="클라이언트"
              type="text"
              placeholder="클라이언트 입력"
              name="client"
              value={client}
              onChange={handleInputChange}
              onEscKeyDown={resetFormDataValue}
            />
          )}

          {/* 작업기간 */}
          {!editMode ? (
            <div>
              <div className="font-semibold">작업기간</div>
              <div className="text-gray-600">{`${startDate} ~ ${endDate}`}</div>
            </div>
          ) : (
            <div className="flex items-center py-2">
              <label className="block min-w-32 text-sm font-medium">
                작업기간
              </label>
              <div className="flex items-center gap-2 text-gray-600">
                <LabelInput
                  type="text"
                  placeholder="시작 입력"
                  name="startDate"
                  value={startDate}
                  onChange={handleInputChange}
                  onEscKeyDown={resetFormDataValue}
                />
                ~
                <LabelInput
                  type="text"
                  placeholder="종료 입력"
                  name="endDate"
                  value={endDate}
                  onChange={handleInputChange}
                  onEscKeyDown={resetFormDataValue}
                />
              </div>
            </div>
          )}

          {/* 작업 인원 */}
          {!editMode ? (
            <div>
              <div className="font-semibold">작업인원</div>
              <div className="text-gray-600">{`${teamSize}명`}</div>
            </div>
          ) : (
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
          )}

          {!editMode ? (
            <div>
              <div className="font-semibold">기술스택</div>
              <div className="text-gray-600">{techStack.join(", ")}</div>
            </div>
          ) : (
            <div>
              <LabelInput
                label="기술스택"
                type="text"
                placeholder="기술스택 입력"
                name="techStack"
                value={techStack}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            </div>
          )}

          {/* 기여도 */}
          <div className="gap- grid grid-cols-2 gap-4">
            {!editMode ? (
              <div>
                <div className="font-semibold">기획</div>
                <div className="text-gray-600">{planning}</div>
              </div>
            ) : (
              <LabelInput
                label="기획"
                type="text"
                placeholder="기획 입력"
                name="planning"
                value={planning}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            )}
            {!editMode ? (
              <div>
                <div className="font-semibold">디자인</div>
                <div className="text-gray-600">{design}</div>
              </div>
            ) : (
              <LabelInput
                label="디자인"
                type="text"
                placeholder="디자인 입력"
                name="design"
                value={design}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            )}
            {!editMode ? (
              <div>
                <div className="font-semibold">퍼블리싱</div>
                <div className="text-gray-600">{publishing}</div>
              </div>
            ) : (
              <LabelInput
                label="퍼블리싱"
                type="text"
                placeholder="퍼블리싱 입력"
                name="publishing"
                value={publishing}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            )}
            {!editMode ? (
              <div>
                <div className="font-semibold">개발</div>
                <div className="text-gray-600">{development}</div>
              </div>
            ) : (
              <LabelInput
                label="개발"
                type="text"
                placeholder="개발 입력"
                name="development"
                value={development}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            )}
          </div>

          {/* 링크 */}
          <div className="grid grid-cols-2 gap-4">
            {!editMode ? (
              <a
                href={demoUrl}
                className="rounded bg-gray-600 py-2 text-center text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                사이트 바로가기
              </a>
            ) : (
              <LabelInput
                label="데모 URL"
                type="text"
                placeholder="데모 URL 입력"
                name="demoUrl"
                value={demoUrl}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            )}
            {!editMode ? (
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
            ) : (
              <LabelInput
                label="깃허브 URL"
                type="text"
                placeholder="깃허브 URL 입력"
                name="githubUrl"
                value={githubUrl}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            )}
            {!editMode ? (
              <a
                href={user ? githubUrl : "#"}
                className={`rounded bg-gray-600 py-2 text-center text-white ${!user ? "cursor-not-allowed opacity-50" : ""}`}
                target={user ? "_blank" : "_self"}
                rel="noopener noreferrer"
                onClick={() => {
                  if (!user) alert("로그인이 필요합니다.");
                }}
              >
                Canva 바로가기
              </a>
            ) : (
              <LabelInput
                label="깃허브 URL"
                type="text"
                placeholder="깃허브 URL 입력"
                name="githubUrl"
                value={githubUrl}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            )}
            {!editMode ? (
              <a
                href={user ? githubUrl : "#"}
                className={`rounded bg-gray-600 py-2 text-center text-white ${!user ? "cursor-not-allowed opacity-50" : ""}`}
                target={user ? "_blank" : "_self"}
                rel="noopener noreferrer"
                onClick={() => {
                  if (!user) alert("로그인이 필요합니다.");
                }}
              >
                Figma 바로가기
              </a>
            ) : (
              <LabelInput
                label="깃허브 URL"
                type="text"
                placeholder="깃허브 URL 입력"
                name="githubUrl"
                value={githubUrl}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            )}
            {!editMode ? (
              <a
                href={user ? githubUrl : "#"}
                className={`rounded bg-gray-600 py-2 text-center text-white ${!user ? "cursor-not-allowed opacity-50" : ""}`}
                target={user ? "_blank" : "_self"}
                rel="noopener noreferrer"
                onClick={() => {
                  if (!user) alert("로그인이 필요합니다.");
                }}
              >
                Swagger 바로가기
              </a>
            ) : (
              <LabelInput
                label="깃허브 URL"
                type="text"
                placeholder="깃허브 URL 입력"
                name="githubUrl"
                value={githubUrl}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
