import { ProjectData } from "../../types/type";

type ProjectDescriptionProps = {
  data: ProjectData;
  editMode: boolean;
};

const ProjectDescription = ({ data, editMode }: ProjectDescriptionProps) => {
  return (
    <div className="rounded-md">
      {/* 성과 */}
      <div className="my-6 rounded-md bg-slate-800 p-4">
        <p className="mb-2 text-xl font-semibold">성과</p>
        <ul className="mb-4 list-inside list-disc">
          {data.achievement.map((item, index) => (
            <li key={index}>
              <strong className="text-blue-500">{item.title}</strong>
              {item.details.join(", ")}
            </li>
          ))}
        </ul>
      </div>

      <p className="mb-4 text-2xl font-bold">프로젝트 문서</p>

      {/* 목표 */}
      <p className="mb-2 text-xl font-semibold">1. 목표</p>
      <ul className="mb-4 list-inside list-disc">
        {data.goal.map((item, index) => (
          <li key={index}>
            <strong className="text-blue-500">{item.title}</strong>
            {item.details.join(", ")}
          </li>
        ))}
      </ul>

      {/* 주요 기능 */}
      <p className="mb-2 text-xl font-semibold">2. 주요 기능</p>
      <ul className="mb-4 list-inside list-disc">
        {data.features.map((item, index) => (
          <li key={index}>
            <strong className="text-blue-500">{item.title}</strong>
            {item.details.join(", ")}
          </li>
        ))}
      </ul>

      {/* 사용 기술 */}
      <p className="mb-2 text-xl font-semibold">3. 사용 기술</p>
      <ul className="mb-4 list-inside list-disc">
        {data.technology.map((item, index) => (
          <li key={index}>
            <strong className="text-blue-500">{item.title}</strong>
            {item.details.join(", ")}
          </li>
        ))}
      </ul>

      {/* 결과 */}
      <p className="mb-2 text-xl font-semibold">4. 결과</p>
      <ul className="mb-4 list-inside list-disc">
        {data.result.map((item, index) => (
          <li key={index}>
            <strong className="text-blue-500">{item.title}</strong>
            {item.details.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDescription;
