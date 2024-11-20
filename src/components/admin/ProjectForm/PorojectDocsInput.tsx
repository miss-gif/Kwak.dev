// 섹션에서 제목과 내용 입력란 추가를 위한 컴포넌트
interface PorojectDocsInputProps {
  label: string;
  sectionKey: string;
  value: { title: string; content: string }[];
}

export const PorojectDocsInput = ({ label, value }: PorojectDocsInputProps) => {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <div className="flex flex-col gap-2">
        {value.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="제목"
              value={item.title}
              className="w-full rounded-md border border-gray-300 p-2 focus:ring focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="내용"
              value={item.content}
              className="w-full rounded-md border border-gray-300 p-2 focus:ring focus:ring-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
