import Button from "@/components/Button";
import { techStack } from "@/features/Project/data/techStack";
import CheckboxGroup from "../components/CheckboxGroup";
import LabelInput from "../components/LabelInput";
import RadioGroup from "../components/RadioGroup";
import usePreviewForm from "../use-PreviewForm";

const PreviewForm = () => {
  const {
    formData,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
    resetFormDataValue,
    reset,
  } = usePreviewForm();

  return (
    <form
      className="mx-auto w-2/3 rounded-md bg-neutral-100 p-4 shadow"
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
        options={techStack}
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
