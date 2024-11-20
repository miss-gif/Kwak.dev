import React, { useState } from "react";
import CheckboxGroup from "./components/CheckboxGroup";
import LabelInput from "./components/LabelInput";
import RadioGroup from "./components/RadioGroup";
import { FormData } from "./type/type";

const initFormData = {
  id: "",
  projectName: "",
  badgeProjectDevice: "",
  badgeProjectType: "",
  badgeParticipation: "",
  thumbnail: "",
  startDate: "",
  endDate: "",
  teamSize: "",
  description: "",
  techStack: [] as string[],
  demoUrl: "",
  githubUrl: "",
  canvaUrl: "",
  figmaUrl: "",
  swaggerUrl: "",
  client: "",
  planning: "",
  design: "",
  publishing: "",
  development: "",
};

const ProjectForm = () => {
  const [formData, setFormData] = useState<FormData>(initFormData);

  // 값 초기화 함수
  const resetFormDataValue = (key: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

  // 값 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      className="mx-auto w-full rounded-md bg-neutral-100 p-4 shadow"
      onSubmit={handleSubmit}
    >
      <LabelInput
        label="ID"
        type="number"
        placeholder="고유 ID 입력"
        name="id"
        value={formData.id}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />
      <LabelInput
        label="프로젝트명"
        type="text"
        placeholder="프로젝트명을 입력하세요"
        name="projectName"
        value={formData.projectName}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />
      <LabelInput
        label="프로젝트 설명"
        type="text"
        placeholder="간단한 설명 입력"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />

      <LabelInput
        label="썸네일"
        type="text"
        placeholder="썸네일 URL 입력"
        name="thumbnail"
        value={formData.thumbnail}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />

      <LabelInput
        label="작업 인원"
        type="text"
        placeholder="작업 참여 인원"
        name="teamSize"
        value={formData.teamSize}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />
      <LabelInput
        label="작업 시작"
        type="text"
        placeholder="작업 시작 날짜"
        name="startDate"
        value={formData.startDate}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />
      <LabelInput
        label="작업 종료"
        type="text"
        placeholder="작업 종료 날짜"
        name="endDate"
        value={formData.endDate}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />

      <RadioGroup
        label="디바이스 지원"
        options={["반응형", ""]}
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

      <CheckboxGroup
        label="기술 스택"
        options={["HTML", "CSS", "JavaScript", "TypeScript", "React"]}
        values={formData.techStack}
        onChange={handleCheckboxChange}
      />

      <LabelInput
        label="데모 URL"
        type="text"
        placeholder="데모 URL 입력"
        name="demoUrl"
        value={formData.demoUrl}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />
      <LabelInput
        label="깃허브 URL"
        type="text"
        placeholder="깃허브 URL 입력"
        name="githubUrl"
        value={formData.githubUrl}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />
      <LabelInput
        label="Canva URL"
        type="text"
        placeholder="Canva URL 입력"
        name="canvaUrl"
        value={formData.canvaUrl}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />
      <LabelInput
        label="Figma URL"
        type="text"
        placeholder="Figma URL 입력"
        name="figmaUrl"
        value={formData.figmaUrl}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />
      <LabelInput
        label="Swagger URL"
        type="text"
        placeholder="Swagger URL 입력"
        name="swaggerUrl"
        value={formData.swaggerUrl}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />

      <LabelInput
        label="클라이언트"
        type="text"
        placeholder="클라이언트 입력"
        name="client"
        value={formData.client}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />
      <LabelInput
        label="기획"
        type="text"
        placeholder="기획 입력"
        name="planning"
        value={formData.planning}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />
      <LabelInput
        label="디자인"
        type="text"
        placeholder="디자인 입력"
        name="design"
        value={formData.design}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />
      <LabelInput
        label="퍼블리싱"
        type="text"
        placeholder="퍼블리싱 입력"
        name="publishing"
        value={formData.publishing}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />
      <LabelInput
        label="개발"
        type="text"
        placeholder="개발 입력"
        name="development"
        value={formData.development}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />

      <button
        type="submit"
        className="mt-2 w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600"
      >
        등록
      </button>
    </form>
  );
};

export default ProjectForm;
