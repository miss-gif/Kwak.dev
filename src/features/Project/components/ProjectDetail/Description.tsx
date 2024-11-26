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

  const handleSave = () => {
    console.log("저장된 데이터: ", formData);
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
                  type="text"
                  placeholder="제목 입력"
                  name="achievement"
                  value={item.text}
                  onChange={handleInputChange}
                  onEscKeyDown={resetFormDataValue}
                />
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="mb-4 text-2xl font-bold">프로젝트 문서</p>

      {/* 목표 */}
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
                type="text"
                placeholder="제목 입력"
                name="achievement"
                value={item.title}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
              <LabelInput
                label="내용"
                type="text"
                placeholder="제목 입력"
                name="achievement"
                value={item.text}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
            </li>
          ))}
        </ul>
      )}

      {/* 주요 기능 */}
      <p className="mb-2 text-xl font-semibold">2. 주요 기능</p>

      {!editMode ? (
        <ul className="mb-4 list-inside list-disc">
          {formData.features.map((item, index) => (
            <li key={index} className="flex gap-1">
              <strong className="shrink-0 text-blue-500">{item.title}</strong>
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
                type="text"
                placeholder="제목 입력"
                name="achievement"
                value={item.title}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
              <LabelInput
                label="내용"
                type="text"
                placeholder="제목 입력"
                name="achievement"
                value={item.text}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
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
                type="text"
                placeholder="제목 입력"
                name="achievement"
                value={item.title}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
              <LabelInput
                label="내용"
                type="text"
                placeholder="제목 입력"
                name="achievement"
                value={item.text}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
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
                type="text"
                placeholder="제목 입력"
                name="achievement"
                value={item.title}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
              />
              <LabelInput
                label="내용"
                type="text"
                placeholder="제목 입력"
                name="achievement"
                value={item.text}
                onChange={handleInputChange}
                onEscKeyDown={resetFormDataValue}
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