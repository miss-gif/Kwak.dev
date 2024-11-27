import StickyWrapper from "@/components/common/StickyWrapper";
import FilterInput from "./FilterInput";

interface ProjectHeaderFilterProps {
  query: string;
  setQuery: (value: string) => void;
  techFilter: string;
  setTechFilter: (value: string) => void;
}

const ProjectHeaderFilter = ({ ...filterData }: ProjectHeaderFilterProps) => {
  console.log(filterData);
  const { query, setQuery, techFilter, setTechFilter } = filterData;

  return (
    <StickyWrapper>
      <FilterInput
        placeholder="통합 검색 (예: 반응형, 2024)"
        value={query}
        onChange={setQuery}
        onClear={() => setQuery("")}
      />
      <FilterInput
        placeholder="기술스택 필터 (예: React)"
        value={techFilter}
        onChange={setTechFilter}
        onClear={() => setTechFilter("")}
      />
    </StickyWrapper>
  );
};

export default ProjectHeaderFilter;
