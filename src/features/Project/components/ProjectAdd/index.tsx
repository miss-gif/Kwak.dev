// 3단계 스탭이 있음
// 1. 프로젝트 카드 영역
// 2. 프로젝트 상세 페이지 상단
// 3. 프로젝트 상세 페이지 하단
// 4. 저장하기 버튼, 취소하기 버튼
// 입력 중인 데이터 저장

import Button, { LinkButton } from "@/components/Button";
import MultiStepForm from "./MultiStepForm";

const ProjectAdd = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-4 flex justify-between">
        <LinkButton label="취소" to="/project" color="red" />
        <Button label="프로젝트 등록" />
      </div>

      <MultiStepForm />
    </div>
  );
};

export default ProjectAdd;
