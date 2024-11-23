const OverviewArea = () => {
  return (
    <div className="w-1/2 bg-red-400">
      {/* 썸네일 */}
      <img src="" alt="" className="h-48 w-full object-cover" />
      {/* 카드 내용 */}
      <div className="p-6">
        {/* 제목 */}
        <h3 className="mb-2 text-2xl font-semibold text-gray-800">제목</h3>

        {/* 작업 기간과 작업 인원 */}
        <div className="mb-4 flex items-center justify-between text-sm text-gray-600">
          <span className="font-semibold">기간</span>
          <div className="flex gap-1">
            <span className="rounded-md bg-gray-800 px-1 text-white">뱃지</span>
          </div>
        </div>

        {/* 간략한 설명 */}
        <p className="mb-4 line-clamp-2 text-gray-700">설명</p>

        {/* 사용 기술 */}
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-800">
            기술
          </span>
        </div>
      </div>
    </div>
  );
};

export default OverviewArea;
