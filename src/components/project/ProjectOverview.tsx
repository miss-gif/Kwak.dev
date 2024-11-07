const ProjectOverview = () => {
  return (
    <div className="">
      <h3 className="mb-2 text-xl font-bold">제목</h3>
      <p className="mb-4 text-gray-700">간략한 설명</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded bg-gray-200 p-4">썸네일</div>
        <div className="space-y-4">
          <div className="">
            <div className="rounded bg-gray-100 p-2">
              <div className="font-semibold">클라이언트</div>
              <div className="text-gray-600">취업기획</div>
            </div>
            <div className="rounded bg-gray-100 p-2">
              <div className="font-semibold">작업기간</div>
              <div className="text-gray-600">2024-11-08 ~ 024-11-08</div>
            </div>
            <div className="rounded bg-gray-100 p-2">
              <div className="font-semibold">작업인원</div>
              <div className="text-gray-600">1명</div>
            </div>
            <div className="rounded bg-gray-100 p-2">
              <div className="font-semibold">사용기술</div>
              <div className="text-gray-600">React</div>
            </div>
          </div>

          <p>기여도</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded bg-gray-100 p-2">
              <div className="font-semibold">기획</div>
              <div className="text-gray-600">var</div>
            </div>
            <div className="rounded bg-gray-100 p-2">
              <div className="font-semibold">디자인</div>
              <div className="text-gray-600">var</div>
            </div>
            <div className="rounded bg-gray-100 p-2">
              <div className="font-semibold">퍼블리싱</div>
              <div className="text-gray-600">var</div>
            </div>
            <div className="rounded bg-gray-100 p-2">
              <div className="font-semibold">개발</div>
              <div className="text-gray-600">var</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded bg-blue-500 p-2 text-center text-white">
              사이트 바로가기
            </div>
            <div className="rounded bg-blue-500 p-2 text-center text-white">
              깃허브 바로가기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
