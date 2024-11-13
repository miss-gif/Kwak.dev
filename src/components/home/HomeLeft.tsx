import { home } from "@/mocks/data";
import styled from "@emotion/styled";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import EditNoteIcon from "@mui/icons-material/EditNote";
import GitHubIcon from "@mui/icons-material/GitHub";

const HomeLeft = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col">
        {/* 타이틀 */}
        <div className="">
          <p className="text-2xl font-bold">to design the world by coding</p>
          <p className="text-7xl font-bold">PORTFOLIO</p>
          <p className="text-7xl font-bold">WEB DEVELOPER</p>
        </div>
        {/* 콘텐츠 */}
        <div className="py-14 leading-8">
          저는 끊임없이 새로운 기술을 배우고,
          <br /> 이를 실제 프로젝트에 적용하며 성장하는 프론트엔드 개발자입니다.
          <br /> 사용자 중심의 디자인을 통해 효율적이고 직관적인 웹 서비스를
          개발하는 것을 목표로 합니다. <br />
        </div>
        {/* 링크 그룹 */}
        <div className="flex gap-2">
          <a
            className="flex items-center gap-1 rounded-md px-2 py-3 transition duration-300 ease-in-out hover:bg-fire hover:text-white"
            href={home.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            깃허브
          </a>
          <a
            className="flex items-center gap-1 rounded-md px-2 py-3 transition duration-300 ease-in-out hover:bg-fire hover:text-white"
            href={home.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactPageIcon />
            이력서
          </a>
          <a
            className="flex items-center gap-1 rounded-md px-2 py-3 transition duration-300 ease-in-out hover:bg-fire hover:text-white"
            href={home.study}
            target="_blank"
            rel="noopener noreferrer"
          >
            <EditNoteIcon />
            스터디
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
