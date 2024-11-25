import Button from "@/components/Button";
import { useAuthStore } from "@/stores/authStore";
import { useState } from "react";
import { ProjectData } from "../../types/type";
import LabelInput from "../ProjectForm/LabelInput";
import RadioGroup from "../ProjectForm/RadioGroup";

interface OverviewProps {
  data: ProjectData;
  editMode: boolean;
}

const Overview = ({ data, editMode }: OverviewProps) => {
  const { user } = useAuthStore();

  const [formData, setFormData] = useState({ ...data });

  const resetFormDataValue = (key: string, defaultValue: string = "") => {
    setFormData((prev) => ({
      ...prev,
      [key]: defaultValue,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fields = [
    { label: "ID", name: "id", value: formData.id, placeholder: "ID 입력" },
    {
      label: "프로젝트",
      name: "projectName",
      value: formData.projectName,
      placeholder: "프로젝트 입력",
    },
    {
      label: "프로젝트 설명",
      name: "description",
      value: formData.description,
      placeholder: "프로젝트 설명 입력",
    },
  ];

  const urls = [
    { label: "데모", name: "demoUrl", value: formData.demoUrl },
    { label: "깃허브", name: "githubUrl", value: formData.githubUrl },
    { label: "Canva", name: "canvaUrl", value: formData.canvaUrl },
    { label: "Figma", name: "figmaUrl", value: formData.figmaUrl },
    { label: "Swagger", name: "swaggerUrl", value: formData.swaggerUrl },
  ];

  const handleSave = () => {
    console.log("저장된 데이터: ", formData);
  };

  const renderLink = (label: string, url: string) => (
    <a
      href={user ? url : "#"}
      className={`rounded bg-gray-600 py-2 text-center text-white ${
        !user ? "cursor-not-allowed opacity-50" : ""
      }`}
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
    <div className="overview">
      <div>
        {!editMode ? (
          <>
            <h3 className="mb-2 text-xl font-bold">{formData.projectName}</h3>
            <p className="mb-4 text-gray-700">{formData.description}</p>
          </>
        ) : (
          <>
            {fields.map((field) => (
              <LabelInput
                key={field.name}
                label={field.label}
                type="text"
                placeholder={field.placeholder}
                name={field.name}
                value={field.value}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            ))}
          </>
        )}
      </div>
      {/* 썸네일과 주요 정보 */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="overflow-hidden">
          <img
            src={formData.thumbnail}
            alt={`${formData.projectName} thumbnail`}
            className="w-full rounded-md"
          />
          {editMode && (
            <>
              <LabelInput
                label="썸네일 URL"
                type="text"
                placeholder="썸네일 URL 입력"
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
                <label className="min-w-24 shrink-0 text-sm font-medium">
                  기술스택
                </label>
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
              <div className="text-gray-600">{formData.client}</div>
            </div>
          ) : (
            <LabelInput
              label="클라이언트"
              type="text"
              placeholder="클라이언트 입력"
              name="client"
              value={formData.client}
              onChange={handleInputChange}
              onEscKeyDown={resetFormDataValue}
            />
          )}

          {/* 작업기간 */}
          {!editMode ? (
            <div>
              <div className="font-semibold">작업기간</div>
              <div className="text-gray-600">{`${formData.startDate} ~ ${formData.endDate}`}</div>
            </div>
          ) : (
            <div className="flex items-center py-2">
              <label className="block min-w-24 shrink-0 text-sm font-medium">
                작업기간
              </label>
              <div className="flex items-center gap-2 text-gray-600">
                <LabelInput
                  type="text"
                  placeholder="시작 입력"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  onEscKeyDown={resetFormDataValue}
                />
                ~
                <LabelInput
                  type="text"
                  placeholder="종료 입력"
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
            <div>
              <div className="font-semibold">작업인원</div>
              <div className="text-gray-600">{`${formData.teamSize}명`}</div>
            </div>
          ) : (
            <div>
              <LabelInput
                label="작업 인원"
                type="text"
                placeholder="작업 참여 인원"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            </div>
          )}

          {!editMode ? (
            <div>
              <div className="font-semibold">기술스택</div>
              <div className="text-gray-600">
                {formData.techStack.join(", ")}
              </div>
            </div>
          ) : (
            <div>
              <LabelInput
                label="기술스택"
                type="text"
                placeholder="기술스택 입력"
                name="techStack"
                value={formData.techStack}
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
                <div className="text-gray-600">{formData.planning}</div>
              </div>
            ) : (
              <LabelInput
                label="기획"
                type="text"
                placeholder="기획 입력"
                name="planning"
                value={formData.planning}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            )}
            {!editMode ? (
              <div>
                <div className="font-semibold">디자인</div>
                <div className="text-gray-600">{formData.design}</div>
              </div>
            ) : (
              <LabelInput
                label="디자인"
                type="text"
                placeholder="디자인 입력"
                name="design"
                value={formData.design}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            )}
            {!editMode ? (
              <div>
                <div className="font-semibold">퍼블리싱</div>
                <div className="text-gray-600">{formData.publishing}</div>
              </div>
            ) : (
              <LabelInput
                label="퍼블리싱"
                type="text"
                placeholder="퍼블리싱 입력"
                name="publishing"
                value={formData.publishing}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            )}
            {!editMode ? (
              <div>
                <div className="font-semibold">개발</div>
                <div className="text-gray-600">{formData.development}</div>
              </div>
            ) : (
              <LabelInput
                label="개발"
                type="text"
                placeholder="개발 입력"
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
                  <LabelInput
                    key={url.name}
                    label={url.label}
                    type="text"
                    placeholder={`${url.label} URL 입력`}
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
      {editMode && (
        <Button
          label="저장하기"
          width="w-full"
          mt="mt-4"
          onClick={handleSave}
        />
      )}
    </div>
  );
};

export default Overview;
