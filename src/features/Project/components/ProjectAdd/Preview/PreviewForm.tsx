import React, { useState } from "react";
import LabelInput from "../components/LabelInput";
import RadioGroup from "../components/RadioGroup";
import { FormData } from "../type";
import CheckboxGroup from "../components/CheckboxGroup";
import Button from "@/components/Button";

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

interface PreviewFormProps {
  joinFormData: (formData: FormData) => void;
}

// 프로젝트 추가 폼
const PreviewForm = ({ joinFormData }: PreviewFormProps) => {
  const [formData, setFormData] = useState<FormData>(initFormData);

  // 폼 데이터 초기화
  const reset = () => {
    setFormData(initFormData);
  };

  // 폼 데이터 값 초기화
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

  // 체크박스 변경 핸들러
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      techStack: prev.techStack.includes(value)
        ? prev.techStack.filter((item) => item !== value)
        : [...prev.techStack, value],
    }));
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    joinFormData(formData);
    setFormData(initFormData);
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
        options={[
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "Vue",
          "Next.js",
          "React Router",
          "Redux",
          "Zustand",
          "Recoil",
          "React Query",
          "Axios",
          "Sass",
          "Emotion",
          "Tailwind CSS",
          "Material-UI",
          "Figma",
          "Swagger",
          "Postman",
          "Firebase",
          "Supabase",
          // "Node.js",
          // "Express",
          // "NestJS",
          // "Prisma",
          "GSAP",
          "anime.js",
          "Framer Motion",
        ]}
        values={formData.techStack}
        onChange={handleCheckboxChange}
      />

      <div className="mt-2 flex gap-2">
        <Button
          label="초기화"
          type="reset"
          width="w-full"
          color="red"
          onClick={reset}
        />
        <Button label="저장" type="submit" width="w-full" />
      </div>
    </form>
  );
};

export default PreviewForm;
