import StickyWrapper from "@/components/common/StickyWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CloseIcon from "@mui/icons-material/Close";

interface InterviewSearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  clearQuery: () => void;
}

const InterviewSearchBar = ({ query, setQuery, clearQuery }: InterviewSearchBarProps) => {
  return (
    <>
      {/* 검색 입력 필드 */}
      <StickyWrapper>
        <div className="relative w-full">
          <Input placeholder="검색어를 입력해 주세요." value={query} onChange={(e) => setQuery(e.target.value)} />
          {/* 검색어 초기화 버튼 */}
          {query && (
            <>
              <Button type="reset" size="icon" variant="ghost" onClick={clearQuery} className="absolute right-0 top-0">
                <CloseIcon />
              </Button>
            </>
          )}
        </div>
      </StickyWrapper>
    </>
  );
};

export default InterviewSearchBar;
