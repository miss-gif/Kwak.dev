const ProjectDescription = ({ data }) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h1 className="mb-4 text-2xl font-bold"> 구축 보고</h1>

      <p className="mb-4">본문:</p>

      <p className="mb-4">
        본 프로젝트는 로서의 역량을 효과적으로 어필하기 위해 포트폴리오
        웹사이트를 구축하는 것을 목표로 진행되었습니다.
      </p>

      {/* 목표 */}
      <h2 className="mb-2 text-xl font-semibold">1. 목표:</h2>
      <ul className="mb-4 list-inside list-disc">
        {data.goal.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong>: {item.details.join(", ")}
          </li>
        ))}
      </ul>

      {/* 주요 기능 */}
      <h2 className="mb-2 text-xl font-semibold">2. 주요 기능:</h2>
      <ul className="mb-4 list-inside list-disc">
        {data.features.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong>: {item.details.join(", ")}
          </li>
        ))}
      </ul>

      {/* 사용 기술 */}
      <h2 className="mb-2 text-xl font-semibold">3. 사용 기술:</h2>
      <ul className="mb-4 list-inside list-disc">
        {data.technology.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong>: {item.details.join(", ")}
          </li>
        ))}
      </ul>

      {/* 결과 */}
      <h2 className="mb-2 text-xl font-semibold">4. 결과:</h2>
      <ul className="mb-4 list-inside list-disc">
        {data.result.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong>: {item.details.join(", ")}
          </li>
        ))}
      </ul>

      {/* 성과 */}
      <h2 className="mb-2 text-xl font-semibold">5. 성과:</h2>
      <ul className="mb-4 list-inside list-disc">
        {data.achievement.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong>: {item.details.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDescription;
