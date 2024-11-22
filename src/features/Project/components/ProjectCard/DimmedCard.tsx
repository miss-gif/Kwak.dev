import { Link } from "react-router-dom";

interface DimmedCardProps {
  title: string; // 프로젝트 제목
  id: number;
  links: {
    demoUrl: string; // 프로젝트 데모 URL
    githubUrl: string; // 프로젝트 깃허브 URL
  };
}

const DimmedCard = ({ title, id, links }: DimmedCardProps) => {
  return (
    <>
      {/* 호버 시 딤드 효과 */}
      <div className="absolute inset-0 flex items-center justify-center rounded-md bg-gray-900 opacity-0 transition-opacity duration-200 hover:opacity-100">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="pb-3 text-2xl font-semibold text-white">{title}</p>
          <Link
            to={`/project/${id}`}
            className="w-52 rounded bg-none px-4 py-3 text-center text-black transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
          >
            자세히 보기
          </Link>
          <a
            href={links.demoUrl}
            className="w-52 rounded bg-none px-4 py-3 text-center text-black transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
          >
            사이트 바로가기
          </a>
        </div>
      </div>
    </>
  );
};

export default DimmedCard;
