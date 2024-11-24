import React, { useState } from "react";
import LabelInput from "../components/LabelInput";
import { FormData } from "../type";
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

interface OverviewFormProps {
  joinFormData: (formData: FormData) => void;
}

const OverviewForm = ({ joinFormData }: OverviewFormProps) => {
  const [formData, setFormData] = useState<FormData>(initFormData);

  // 폼 데이터 초기화
  const reset = () => {
    setFormData(initFormData);
  };

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

export default OverviewForm;
