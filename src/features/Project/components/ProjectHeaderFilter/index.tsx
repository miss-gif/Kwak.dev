import StickyWrapper from "@/components/common/StickyWrapper";
import FilterInput from "./FilterInput";

interface ProjectHeaderFilterProps {
  query: string;
  setQuery: (value: string) => void;
  techFilter: string;
  setTechFilter: (value: string) => void;
  keywords: string;
  setKeywords: (value: string) => void;
}

const ProjectHeaderFilter = ({ ...filterData }: ProjectHeaderFilterProps) => {
  console.log(filterData);
  const { query, setQuery, techFilter, setTechFilter, keywords, setKeywords } =
    filterData;

  return (
    <StickyWrapper>
      <FilterInput
        placeholder="프로젝트 제목 검색"
        value={query}
        onChange={setQuery}
        onClear={() => setQuery("")}
      />
      <FilterInput
        placeholder="기술 스택 필터 (예: React)"
        value={techFilter}
        onChange={setTechFilter}
        onClear={() => setTechFilter("")}
      />
      <FilterInput
        placeholder="키워드 필터 (예: 반응형, 작업영역, 작업형태)"
        value={keywords}
        onChange={setKeywords}
        onClear={() => setKeywords("")}
      />
    </StickyWrapper>
  );
};

export default ProjectHeaderFilter;
