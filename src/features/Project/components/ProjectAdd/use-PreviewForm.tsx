import { useFormStore } from "@/stores/projectStore";
import { useState } from "react";
import { initFormData } from "../../data/initFormData";
import { PreviewFormData } from "../../types/type";

const usePreviewForm = () => {
  const [formData, setFormData] = useState<PreviewFormData>(initFormData);
  const setForm = useFormStore((state) => state.setForm);
  const reset = () => setFormData(initFormData);

  const resetFormDataValue = (key: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

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
    setForm(formData);
    alert("저장되었습니다.");
    console.log(formData);
  };

  return {
    formData,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
    resetFormDataValue,
    reset,
  };
};

export default usePreviewForm;
