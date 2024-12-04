import BasicModal from "@/components/Modal";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { useAuthStore } from "@/stores/authStore";
import { ProjectData } from "../../types/type";
import RadioGroup from "../ProjectForm/RadioGroup";

interface OverviewProps {
  formData: ProjectData;
  editMode: boolean;
  setFormData: React.Dispatch<React.SetStateAction<ProjectData>>;
}

const Overview = ({ formData, editMode, setFormData }: OverviewProps) => {
  const { user } = useAuthStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFormDataValue = (key: string, defaultValue: string = "") => {
    setFormData((prev) => ({
      ...prev,
      [key]: defaultValue,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      techStack: prev.techStack.includes(value)
        ? prev.techStack.filter((item) => item !== value)
        : [...prev.techStack, value],
    }));
  };

  const fields = [
    { label: "ID", name: "id", value: formData.id },
    {
      label: "프로젝트",
      name: "projectName",
      value: formData.projectName,
    },
    {
      label: "프로젝트 목적",
      name: "description",
      value: formData.description,
    },
  ];

  const urls = [
    { label: "데모", name: "demoUrl", value: formData.demoUrl },
    { label: "깃허브", name: "githubUrl", value: formData.githubUrl },
    { label: "Canva", name: "canvaUrl", value: formData.canvaUrl },
    { label: "Figma", name: "figmaUrl", value: formData.figmaUrl },
    { label: "Swagger", name: "swaggerUrl", value: formData.swaggerUrl },
  ];

  const renderLink = (label: string, url: string) => (
    <a
      href={user ? url : "#"}
      className={`rounded bg-gray-600 py-2 text-center text-white ${!user ? "cursor-not-allowed opacity-50" : ""}`}
      target={user ? "_blank" : "_self"}
      rel="noopener noreferrer"
      onClick={() => {
        if (!user) alert("로그인이 필요합니다.");
      }}
    >
      {label} 바로가기
    </a>
  );

  return (
    <div className="overview w-full">
      {!editMode ? (
        <>
          <h3 className="mb-2 text-xl font-bold">{formData.projectName}</h3>
          <p className="mb-4 text-gray-700">{formData.description}</p>
        </>
      ) : (
        <div className="grid gap-2 py-2">
          {fields.map((field) => (
            <InputWithLabel
              key={field.name}
              label={field.label}
              name={field.name}
              value={field.value}
              onChange={handleInputChange}
              onEscKeyDown={resetFormDataValue}
            />
          ))}
        </div>
      )}

      {/* 썸네일과 주요 정보 */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="overflow-hidden">
          <img src={formData.thumbnail} alt={`${formData.projectName} thumbnail`} className="w-full rounded-md" />
          {editMode && (
            <div className="my-4">
              <InputWithLabel
                label="썸네일 URL"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />

              <RadioGroup
                label="디바이스 지원"
                options={["반응형", "데스크탑"]}
                name="badgeProjectDevice"
                value={formData.badgeProjectDevice}
                onChange={handleInputChange}
              />

              <RadioGroup
                label="프로젝트 유형"
                options={["퍼블리싱", "프론트엔드", "풀스택"]}
                name="badgeProjectType"
                value={formData.badgeProjectType}
                onChange={handleInputChange}
              />
              <RadioGroup
                label="참여 형태"
                options={["개인", "협업", "스터디"]}
                name="badgeParticipation"
                value={formData.badgeParticipation}
                onChange={handleInputChange}
              />

              <div className="flex items-center">
                <label className="min-w-24 shrink-0 text-sm font-medium">기술스택</label>
                {/* 모달 열기 */}
                <BasicModal techStack={formData.techStack} handleCheckboxChange={handleCheckboxChange} />
              </div>
            </div>
          )}
        </div>

        {/* 프로젝트 세부 정보 */}
        <div className="flex flex-col gap-8 py-2">
          {/* 클라이언트 */}
          {!editMode ? (
            <div>
              <div className="font-semibold">클라이언트</div>
              <div className="text-gray-600">{formData.client}</div>
            </div>
          ) : (
            <InputWithLabel
              label="클라이언트"
              name="client"
              value={formData.client}
              onChange={handleInputChange}
              onEscKeyDown={resetFormDataValue}
            />
          )}

          {/* 작업기간 */}
          {!editMode ? (
            <>
              <div className="font-semibold">작업기간</div>
              <div className="text-gray-600">{`${formData.startDate} ~ ${formData.endDate}`}</div>
            </>
          ) : (
            <div className="flex items-center py-2">
              <div className="flex w-full items-end gap-2 text-gray-600">
                <InputWithLabel
                  placeholder="작업 시작일"
                  label="작업기간"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  onEscKeyDown={resetFormDataValue}
                />

                <InputWithLabel
                  placeholder="작업 종료일"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  onEscKeyDown={resetFormDataValue}
                />
              </div>
            </div>
          )}

          {/* 작업 인원 */}
          {!editMode ? (
            <>
              <div className="font-semibold">작업인원</div>
              <div className="text-gray-600">{`${formData.teamSize}명`}</div>
            </>
          ) : (
            <InputWithLabel
              label="작업 인원"
              name="teamSize"
              value={formData.teamSize}
              onChange={handleInputChange}
              onEscKeyDown={resetFormDataValue}
            />
          )}

          {!editMode ? (
            <>
              <div className="font-semibold">기술스택</div>
              <div className="text-gray-600">{formData.techStack.join(", ")}</div>
            </>
          ) : (
            <InputWithLabel
              label="기술스택"
              name="techStack"
              value={formData.techStack}
              onChange={handleInputChange}
              onEscKeyDown={resetFormDataValue}
              readOnly={true}
            />
          )}

          {/* 기여도 */}
          <div className="gap- grid grid-cols-2 gap-4">
            {!editMode ? (
              <>
                <div className="font-semibold">기획</div>
                <div className="text-gray-600">{formData.planning}</div>
              </>
            ) : (
              <InputWithLabel
                label="기획"
                name="planning"
                value={formData.planning}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            )}
            {!editMode ? (
              <>
                <div className="font-semibold">디자인</div>
                <div className="text-gray-600">{formData.design}</div>
              </>
            ) : (
              <InputWithLabel
                label="디자인"
                name="design"
                value={formData.design}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            )}
            {!editMode ? (
              <>
                <div className="font-semibold">퍼블리싱</div>
                <div className="text-gray-600">{formData.publishing}</div>
              </>
            ) : (
              <InputWithLabel
                label="퍼블리싱"
                name="publishing"
                value={formData.publishing}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            )}
            {!editMode ? (
              <>
                <div className="font-semibold">개발</div>
                <div className="text-gray-600">{formData.development}</div>
              </>
            ) : (
              <InputWithLabel
                label="개발"
                name="development"
                value={formData.development}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            )}
          </div>

          {/* 링크 */}
          <div className="grid grid-cols-2 gap-4">
            {!editMode ? (
              <>
                {renderLink("깃허브", formData.githubUrl)}
                {renderLink("깃허브", formData.githubUrl)}
                {renderLink("Canva", formData.githubUrl)}
                {renderLink("Figma", formData.githubUrl)}
                {renderLink("Swagger", formData.githubUrl)}
              </>
            ) : (
              <>
                {urls.map((url) => (
                  <InputWithLabel
                    key={url.name}
                    label={url.label}
                    name={url.name}
                    value={url.value}
                    onChange={handleInputChange}
                    onEscKeyDown={resetFormDataValue}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
