import Button from "@/components/Button";

const DescriptionForm = () => {
  return (
    <div className="rounded-md">
      {/* 성과 */}
      <div className="my-6 rounded-md bg-slate-800 p-4">
        <p className="mb-2 text-xl font-semibold">성과</p>
        <ul className="mb-4 list-inside list-disc">
          <li>
            <strong className="text-blue-500">내용</strong>
          </li>
        </ul>
      </div>

      <p className="mb-4 text-2xl font-bold">프로젝트 문서</p>

      {/* 목표 */}
      <p className="mb-2 text-xl font-semibold">1. 목표</p>
      <ul className="mb-4 list-inside list-disc">
        <li>
          <strong className="text-blue-500">내용</strong>
        </li>
      </ul>

      {/* 주요 기능 */}
      <p className="mb-2 text-xl font-semibold">2. 주요 기능</p>
      <ul className="mb-4 list-inside list-disc">
        <li>
          <strong className="text-blue-500">내용</strong>
        </li>
      </ul>

      {/* 사용 기술 */}
      <p className="mb-2 text-xl font-semibold">3. 사용 기술</p>
      <ul className="mb-4 list-inside list-disc">
        <li>
          <strong className="text-blue-500">내용</strong>
        </li>
      </ul>

      {/* 결과 */}
      <p className="mb-2 text-xl font-semibold">4. 결과</p>
      <ul className="mb-4 list-inside list-disc">
        <li>
          <strong className="text-blue-500">내용</strong>
        </li>
      </ul>

      <div className="mt-2 flex gap-2">
        <Button label="취소" type="reset" width="w-full" color="red" />
        <Button label="저장" type="submit" width="w-full" />
      </div>
    </div>
  );
};

export default DescriptionForm;
