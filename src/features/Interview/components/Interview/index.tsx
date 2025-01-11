import { Tabs, TabsContent } from "@/components/ui/tabs";
import interviewQuestions from "@/data/interviewQuestions";
import Inner from "@/layouts/Inner";
import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import InterviewAnswered from "./Interview-Answered";
import InterviewSearchBar from "./Interview-SearchBar";
import InterviewTabs from "./Interview-Tabs";
import InterviewUnanswered from "./Interview-Unanswered";
import OftenQuestion from "./Often-Question";

const Interview = () => {
  const [query, setQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState(interviewQuestions);

  // fuse.js 설정
  const fuse = new Fuse(interviewQuestions, {
    keys: ["question"],
    threshold: 0.3,
  });

  // 검색어가 변경될 때마다 필터링
  useEffect(() => {
    if (query) {
      const results = fuse.search(query);
      setFilteredQuestions(results.map((result) => result.item));
    } else {
      setFilteredQuestions(interviewQuestions);
    }
  }, [query]);

  // 검색어 초기화 함수
  const clearQuery = () => setQuery("");

  return (
    <div>
      {/* 현재 기능을 비공개 중 */}
      <div className="hidden">
        <InterviewSearchBar query={query} setQuery={setQuery} clearQuery={clearQuery} />
      </div>

      <Inner>
        <OftenQuestion />
      </Inner>

      {/* 현재 기능을 비공개 중 */}
      <div className="mt-4 hidden">
        <Inner>
          <Tabs defaultValue="answered">
            <InterviewTabs />

            <TabsContent value="answered">
              <InterviewAnswered filteredQuestions={filteredQuestions} query={query} />
            </TabsContent>

            <TabsContent value="unanswered">
              <InterviewUnanswered />
            </TabsContent>
          </Tabs>
        </Inner>
      </div>
    </div>
  );
};

export default Interview;
