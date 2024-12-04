import React from "react";
import BasicModal from "@/components/Modal";

interface TechStackModalProps {
  techStack: string[];
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TechStackModal = ({ techStack, handleCheckboxChange }: TechStackModalProps) => {
  return (
    <div className="flex items-center">
      <label className="min-w-24 shrink-0 text-sm font-medium">기술 스택</label>
      {/* BasicModal 컴포넌트를 열어 기술 스택을 선택 */}
      <BasicModal techStack={techStack} handleCheckboxChange={handleCheckboxChange} />
    </div>
  );
};

export default TechStackModal;
