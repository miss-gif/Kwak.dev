import StickyWrapper from "@/components/common/StickyWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CloseIcon from "@mui/icons-material/Close";

interface ProjectHeaderFilterProps {
  query: string;
  setQuery: (value: string) => void;
  techFilter: string;
  setTechFilter: (value: string) => void;
}

const ProjectHeaderFilter = ({ ...filterData }: ProjectHeaderFilterProps) => {
  const { query, setQuery, techFilter, setTechFilter } = filterData;

  return (
    <StickyWrapper>
      <div className="flex w-full gap-2">
        <div className="relative w-full">
          <Input placeholder="통합 검색 (예: 프로젝트 명, 2024)" value={query} onChange={(e) => setQuery(e.target.value)} />
          {/* 검색어 초기화 버튼 */}
          {query && (
            <>
              <Button type="reset" size="icon" variant="ghost" onClick={() => setQuery("")} className="absolute right-0 top-0">
                <CloseIcon />
              </Button>
            </>
          )}
        </div>

        <div className="relative w-full">
          <Input
            placeholder="기술스택 필터 (예: React)"
            value={techFilter}
            onChange={(e) => {
              setTechFilter(e.target.value);
            }}
          />
          {/* 검색어 초기화 버튼 */}
          {techFilter && (
            <>
              <Button type="reset" size="icon" variant="ghost" onClick={() => setTechFilter("")} className="absolute right-0 top-0">
                <CloseIcon />
              </Button>
            </>
          )}
        </div>
      </div>
    </StickyWrapper>
  );
};

export default ProjectHeaderFilter;
