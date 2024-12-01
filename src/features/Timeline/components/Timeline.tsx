import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BatteryCharging60Icon from "@mui/icons-material/BatteryCharging60";
import CelebrationIcon from "@mui/icons-material/Celebration";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import WorkOffIcon from "@mui/icons-material/WorkOff";
import Timeline from "@mui/lab/Timeline";
import TimeItem from "./TimeItem";

export default function LeftAlignedTimeline() {
  return (
    <Timeline>
      <TimeItem color="inherit" icon={<CelebrationIcon />} year="1991" label="출생" text="대구 출신" />
      <TimeItem color="primary" icon={<SchoolIcon />} year="2007" label="고등학교 입학" text="특성화/마이스터고 멀티미디어과" />
      <TimeItem color="warning" icon={<WorkIcon />} year="" label="학교도서관" text="근로장학생" />
      <div className="text-green-500">
        <TimeItem color="inherit" icon={<MilitaryTechIcon />} year="2009" label="NAVER POWER 지식iN 선정" text="일본 서브컬쳐 분야" />
      </div>
      <TimeItem color="warning" icon={<WorkOffIcon />} year="" label="학교도서관" text="근로장학생" />
      <TimeItem color="primary" icon={<SchoolIcon />} year="2010" label="고등학고 졸업" text="특성화/마이스터고 멀티미디어과" />
      <TimeItem color="primary" icon={<SchoolIcon />} year="" label="대학교 입학" text="문헌정보학과" />
      <TimeItem color="primary" icon={<SchoolIcon />} year="2011" label="복수전공" text="일어일문학과" />
      <TimeItem color="primary" icon={<SchoolIcon />} year="" label="대학교 휴학" text="군 휴학 및 아르바이트 병행" />
      <TimeItem color="inherit" icon={<FlightTakeoffIcon />} year="2014" label="워킹홀리데이 출국" text="일본, 오사카" />
      <TimeItem color="warning" icon={<WorkIcon />} year="" label="천하일품 (天下一品) 입사" text="일본 요식업 프랜차이즈" />
      <TimeItem color="warning" icon={<WorkOffIcon />} year="2015" label="천하일품 (天下一品) 퇴사" text="일본 요식업 프랜차이즈" />
      <TimeItem color="inherit" icon={<FlightLandIcon />} year="" label="워킹홀리데이 귀국" text="일본, 오사카" />
      <TimeItem color="primary" icon={<SchoolIcon />} year="" label="대학교 복학" text="" />
      <TimeItem color="primary" icon={<SchoolIcon />} year="2018" label="대학교 졸업" text="문헌정보학과 / 일어일문학과" />
      <TimeItem color="warning" icon={<WorkIcon />} year="2019" label="멘야산다이메 입사" text="요식업 프랜차이즈" />
      <TimeItem color="warning" icon={<WorkOffIcon />} year="" label="멘야산다이메 퇴사" text="요식업 프랜차이즈" />
      <TimeItem color="primary" icon={<SchoolIcon />} year="" label="국비교육" text="생산관리와 회계사무원 양성 과정" />
      <TimeItem color="primary" icon={<SchoolIcon />} year="" label="국비교육 수료" text="생산관리와 회계사무원 양성 과정" />
      <TimeItem color="warning" icon={<WorkIcon />} year="2020" label="베스트하비 입사" text="일반 사무원" />
      <TimeItem color="warning" icon={<WorkOffIcon />} year="2021" label="베스트하비 퇴사" text="일반 사무원" />
      <TimeItem color="primary" icon={<SchoolIcon />} year="" label="국비교육" text="node.js기반 풀스택 과정" />
      <p className="text-blue-500">
        <TimeItem color="primary" icon={<SchoolIcon />} year="2022" label="국비교육 수료" text="node.js기반 풀스택 과정" />
      </p>
      <TimeItem color="inherit" icon={<AutoAwesomeIcon />} year="" label="인터넷 강의 및 개인 프로젝트 작업" text="패캠, 인프런, 유데미 강의를 통해 학습" />
      <TimeItem color="inherit" icon={<BatteryCharging60Icon />} year="2023" label="아르바이트" text="아르바이트 및 개인 학습" />
      <TimeItem color="primary" icon={<SchoolIcon />} year="2024" label="KDT 국비교육" text="React(리액트) 프론트엔드 과정" />
      <p className="text-blue-500">
        <TimeItem color="primary" icon={<SchoolIcon />} year="" label="KDT 국비교육 수료" text="React(리액트) 프론트엔드 과정" />
      </p>
      <TimeItem color="inherit" icon={<AutoAwesomeIcon />} year="" label="인터넷 강의 및 개인 프로젝트 작업" text="패캠, 인프런, 유데미 강의를 통해 학습" />
    </Timeline>
  );
}
