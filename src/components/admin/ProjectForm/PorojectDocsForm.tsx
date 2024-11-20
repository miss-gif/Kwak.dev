import { useEffect, useState } from "react";
import PorojectDocsInput from "./components/PorojectDocsInput";

interface Item {
  title: string;
  text: string;
}

interface FormData {
  achievements: Item[];
  goals: Item[];
  mainFeatures: Item[];
  technologies: Item[];
  results: Item[];
}

interface PorojectDocsFormProps {
  joinFormData: (formData: FormData) => void;
}

const initFormData = {
  achievements: [{ title: "", text: "" }],
  goals: [{ title: "", text: "" }],
  mainFeatures: [{ title: "", text: "" }],
  technologies: [{ title: "", text: "" }],
  results: [{ title: "", text: "" }],
};

const PorojectDocsForm = ({ joinFormData }: PorojectDocsFormProps) => {
  const [formData, setFormData] = useState<FormData>(initFormData);

  // 특정 항목 추가
  const addField = (key: keyof FormData) => {
    setFormData((prev) => ({
      ...prev,
      [key]: [...prev[key], { title: "", text: "" }],
    }));
  };

  // 특정 항목 값 변경
  const handleFieldChange = (
    key: keyof FormData,
    index: number,
    subKey: "title" | "text",
    value: string,
  ) => {
    setFormData((prev) => {
      const updatedArray = [...prev[key]];
      updatedArray[index][subKey] = value;
      return { ...prev, [key]: updatedArray };
    });
  };

  // 특정 항목 초기화
  const resetField = (
    key: keyof FormData,
    index: number,
    subKey: "title" | "text",
  ) => {
    setFormData((prev) => {
      const updatedArray = [...prev[key]];
      updatedArray[index][subKey] = "";
      return { ...prev, [key]: updatedArray };
    });
  };

  // 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initFormData);
    joinFormData(formData);
  };

  useEffect(() => {
    console.log("formData changed:", formData);
  }, [formData]);

  return (
    <form
      className="mx-auto w-full rounded-md bg-zinc-100 p-4 shadow-md"
      onSubmit={handleSubmit}
    >
      {(
        [
          { key: "achievements", label: "성과" },
          { key: "goals", label: "목표" },
          { key: "mainFeatures", label: "주요기능" },
          { key: "technologies", label: "사용기술" },
          { key: "results", label: "결과" },
        ] as const
      ).map(({ key, label }) => (
        <section key={key} className="mb-2">
          <h2 className="py-4 font-semibold text-blue-500">{label}</h2>
          {formData[key].map((item, index) => (
            <div key={index} className="flex flex-col border-b-2">
              <PorojectDocsInput
                label={`${label} Title ${index + 1}`}
                type="text"
                placeholder={`${label} 제목을 입력하세요`}
                name={`${key}-title-${index}`}
                value={item.title}
                onChange={(e) =>
                  handleFieldChange(key, index, "title", e.target.value)
                }
                onEscKeyDown={() => resetField(key, index, "title")}
              />
              <PorojectDocsInput
                label={`${label} 내용 ${index + 1}`}
                type="text"
                placeholder={`${label} 내용을 입력하세요`}
                name={`${key}-text-${index}`}
                value={item.text}
                onChange={(e) =>
                  handleFieldChange(key, index, "text", e.target.value)
                }
                onEscKeyDown={() => resetField(key, index, "text")}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField(key)}
            className="mt-2 w-full rounded-md bg-green-500 py-2 text-sm font-medium text-white hover:bg-green-600"
          >
            + {label} 추가
          </button>
        </section>
      ))}

      <button
        type="submit"
        className="mt-2 w-full rounded-md bg-red-500 py-2 text-white hover:bg-red-600"
      >
        등록
      </button>
    </form>
  );
};

export default PorojectDocsForm;
