// 3단계 스탭이 있음
// 1. 프로젝트 카드 영역
// 2. 프로젝트 상세 페이지 상단
// 3. 프로젝트 상세 페이지 하단
// 4. 저장하기 버튼, 취소하기 버튼
// 입력 중인 데이터 저장

import LinkButton from "@/components/LinkButton";
import Description from "./Description";
import Overview from "./Overview";
import Preview from "./Preview";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProjectAdd = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Preview />
        <Overview />
        <Description />
      </div>

      {/* 링크 버튼 */}
      <div className="flex justify-center gap-2">
        <LinkButton title={<ArrowBackIosNewIcon />} link="" />
        <LinkButton title={<ArrowForwardIosIcon />} link="" />
      </div>
    </div>
  );
};

export default ProjectAdd;
