import Button from "@/components/Button";
import { useState } from "react";
import { ProjectData } from "../../types/type";
import LabelInput from "../ProjectForm/LabelInput";

interface DescriptionProps {
  data: ProjectData;
  editMode: boolean;
}

const Description = ({ data, editMode }: DescriptionProps) => {
  const [formData, setFormData] = useState(data);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof typeof formData,
    index: number,
    field: "title" | "text",
  ) => {
    const { value } = e.target;
    setFormData((prev) => {
      const updatedArray = Array.isArray(prev[key]) ? [...prev[key]] : [];
      updatedArray[index] = {
        ...updatedArray[index],
        [field]: value,
      };
      return { ...prev, [key]: updatedArray };
    });
  };

  const resetFormDataValue = (
    key: keyof typeof formData,
    index: number,
    field: "title" | "text",
  ) => {
    setFormData((prev) => {
      const updatedArray = Array.isArray(prev[key]) ? [...prev[key]] : [];
      updatedArray[index] = { ...updatedArray[index], [field]: "" };
      return { ...prev, [key]: updatedArray };
    });
  };

  const handleSave = async () => {
    try {
      console.log("저장된 데이터: ", formData);
      alert("데이터가 성공적으로 저장되었습니다!");
    } catch (error) {
      console.error("저장 중 오류 발생: ", error);
    }
  };

  return (
    <div className="rounded-md">
      {/* 성과 */}
      <div className="my-6 flex flex-col gap-2 rounded-md bg-slate-800 p-4 text-white">
        <p className="text-xl font-semibold">성과</p>
        {!editMode ? (
          <ul>
            {formData.achievement.map((item, index) => (
              <li key={index} className="flex gap-1">
                {item.text}
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {formData.achievement.map((item, index) => (
              <li key={index} className="text-blue-500">
                <LabelInput
                  name="achievement"
                  value={item.text}
                  onChange={(e) =>
                    handleInputChange(e, "achievement", index, "text")
                  }
                  onEscKeyDown={() =>
                    resetFormDataValue("achievement", index, "text")
                  }
                />
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="mb-4 text-2xl font-bold">프로젝트 문서</p>
      <p className="mb-2 text-xl font-semibold">1. 목표</p>
      {!editMode ? (
        <ul className="mb-4 list-inside list-disc">
          {formData.goal.map((item, index) => (
            <li key={index} className="flex gap-1">
              <strong className="text-blue-500">{item.title}</strong>
              {item.text}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mb-4 list-inside list-disc">
          {formData.goal.map((item, index) => (
            <li key={index} className="list-none">
              <LabelInput
                label="제목"
                name={`goal-title-${index}`}
                value={item.title || ""}
                onChange={(e) => handleInputChange(e, "goal", index, "title")}
                onEscKeyDown={() => resetFormDataValue("goal", index, "title")}
              />
              <LabelInput
                label="내용"
                name={`goal-text-${index}`}
                value={item.text || ""}
                onChange={(e) => handleInputChange(e, "goal", index, "text")}
                onEscKeyDown={() => resetFormDataValue("goal", index, "text")}
              />
            </li>
          ))}
        </ul>
      )}

      {/* 주요 기능 */}
      <p className="mb-2 text-xl font-semibold">2. 주요 기능</p>

      {!editMode ? (
        <ul className="mb-4 list-inside list-disc">
          {formData.goal.map((item, index) => (
            <li key={index} className="flex gap-1">
              <strong className="text-blue-500">{item.title}</strong>
              {item.text}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mb-4 list-inside list-disc">
          {formData.features.map((item, index) => (
            <li key={index} className="list-none">
              <LabelInput
                label="제목"
                name={`features-title-${index}`}
                value={item.title || ""}
                onChange={(e) =>
                  handleInputChange(e, "features", index, "title")
                }
                onEscKeyDown={() =>
                  resetFormDataValue("features", index, "title")
                }
              />
              <LabelInput
                label="내용"
                name={`features-text-${index}`}
                value={item.text || ""}
                onChange={(e) =>
                  handleInputChange(e, "features", index, "text")
                }
                onEscKeyDown={() =>
                  resetFormDataValue("features", index, "text")
                }
              />
            </li>
          ))}
        </ul>
      )}

      {/* 사용 기술 */}
      <p className="mb-2 text-xl font-semibold">3. 사용 기술</p>
      {!editMode ? (
        <ul className="mb-4 list-inside list-disc">
          {formData.technology.map((item, index) => (
            <li key={index} className="flex gap-1">
              <strong className="text-blue-500">{item.title}</strong>
              {item.text}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mb-4 list-inside list-disc">
          {formData.technology.map((item, index) => (
            <li key={index} className="list-none">
              <LabelInput
                label="제목"
                name={`technology-title-${index}`}
                value={item.title}
                onChange={(e) =>
                  handleInputChange(e, "technology", index, "title")
                }
                onEscKeyDown={() =>
                  resetFormDataValue("technology", index, "title")
                }
              />
              <LabelInput
                label="내용"
                name={`technology-text-${index}`}
                value={item.text}
                onChange={(e) =>
                  handleInputChange(e, "technology", index, "text")
                }
                onEscKeyDown={() =>
                  resetFormDataValue("technology", index, "text")
                }
              />
            </li>
          ))}
        </ul>
      )}

      {/* 결과 */}
      <p className="mb-2 text-xl font-semibold">4. 결과</p>
      {!editMode ? (
        <ul className="mb-4">
          {formData.result.map((item, index) => (
            <li key={index} className="flex gap-1">
              <strong className="text-blue-500">{item.title}</strong>
              {item.text}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mb-4 list-inside list-disc">
          {formData.result.map((item, index) => (
            <li key={index} className="list-none">
              <LabelInput
                label="제목"
                name={`result-title-${index}`}
                value={item.title}
                onChange={(e) => handleInputChange(e, "result", index, "title")}
                onEscKeyDown={() =>
                  resetFormDataValue("result", index, "title")
                }
              />
              <LabelInput
                label="내용"
                name={`result-text-${index}`}
                value={item.text}
                onChange={(e) => handleInputChange(e, "result", index, "text")}
                onEscKeyDown={() => resetFormDataValue("result", index, "text")}
              />
            </li>
          ))}
        </ul>
      )}
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

export default Description;
