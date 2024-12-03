import { Link } from "react-router-dom";
import { ProjectData } from "../../types/type";
import { Button } from "@/components/ui/button";

interface DimmedCardProps {
  project: ProjectData; // 각 프로젝트 데이터
}

const DimmedCard = ({ project }: DimmedCardProps) => {
  const { projectName, demoUrl, docID } = project;

  return (
    <>
      {/* 호버 시 딤드 효과 */}
      <div className="absolute inset-0 grid bg-steel opacity-0 transition-opacity duration-200 hover:opacity-100">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="mb-5 text-2xl font-semibold text-white">{projectName}</p>

          <Button className="w-52 py-6" asChild>
            <Link to={`/project/${docID}`}>자세히 보기</Link>
          </Button>
          <Button className="w-52 py-6" asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              사이트 바로가기
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default DimmedCard;
