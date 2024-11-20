import { useState } from "react";
import PorojectDocsInput from "./components/PorojectDocsInput";

interface FormData {
  achievements: string;
  goals: string;
  mainFeatures: string;
  technologies: string;
  results: string;
}

const initFormData = {
  achievements: "",
  goals: "",
  mainFeatures: "",
  technologies: "",
  results: "",
};

const PorojectDocsForm = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      className="mx-auto w-full rounded-md bg-neutral-100 p-4 shadow"
      onSubmit={handleSubmit}
    >
      <PorojectDocsInput
        label="성과"
        type="text"
        placeholder="성과 입력"
        name="achievements"
        value={formData.achievements}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />
      <PorojectDocsInput
        label="목표"
        type="text"
        placeholder="목표 입력"
        name="goals"
        value={formData.goals}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />
      <PorojectDocsInput
        label="주요기능"
        type="text"
        placeholder="주요기능 입력"
        name="mainFeatures"
        value={formData.mainFeatures}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />
      <PorojectDocsInput
        label="사용기술"
        type="text"
        placeholder="사용기술 입력"
        name="technologies"
        value={formData.technologies}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />
      <PorojectDocsInput
        label="결과"
        type="text"
        placeholder="결과 입력"
        name="results"
        value={formData.results}
        onChange={handleInputChange}
        onEscKeyDown={resetFormDataValue}
      />

      <button
        type="submit"
        className="mt-2 w-full rounded-md bg-red-500 py-2 text-white hover:bg-blue-600"
      >
        등록
      </button>
    </form>
  );
};

export default PorojectDocsForm;
