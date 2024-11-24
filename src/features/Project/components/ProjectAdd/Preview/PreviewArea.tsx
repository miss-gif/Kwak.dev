import { useFormStore } from "@/stores/projectStore";
import { useEffect } from "react";

const url = "https://via.placeholder.com/500.jpg";

const PreviewArea = () => {
  const data = useFormStore((state) => state.forms);

  useEffect(() => {
    console.log("현재 저장된 데이터:", data);
  }, [data]);

  return (
    <div className="w-1/3">
      <div className="shadow-style sticky top-20 overflow-hidden rounded-md border bg-white">
        {/* 썸네일 */}
        <img src={url} alt="" className="h-48 w-full object-cover" />
        {/* 카드 내용 */}
        <div className="p-6">
          {/* 제목 */}
          <h3 className="mb-2 text-2xl font-semibold text-gray-800">제목</h3>

          {/* 작업 기간과 작업 인원 */}
          <div className="mb-4 flex items-center justify-between text-sm text-gray-600">
            <span className="font-semibold">기간</span>
            <div className="flex gap-1">
              <span className="rounded-md bg-gray-800 px-1 text-white">
                뱃지
              </span>
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
    </div>
  );
};

export default PreviewArea;
