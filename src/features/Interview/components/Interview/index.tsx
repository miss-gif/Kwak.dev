import interviewQuestions from "@/data/interviewQuestions";
import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import InterviewContent from "./Interview-Content";
import InterviewSearchBar from "./Interview-SearchBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Inner from "@/layouts/Inner";
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
      <InterviewSearchBar query={query} setQuery={setQuery} clearQuery={clearQuery} />

      <Inner>
        <OftenQuestion />
      </Inner>

      <div className="mt-4">
        <Inner>
          <Tabs defaultValue="answered">
            <TabsList className="grid w-[400px] grid-cols-2">
              <TabsTrigger value="answered">답변 된 질문</TabsTrigger>
              <TabsTrigger value="unanswered">답변을 기다리는 질문</TabsTrigger>
            </TabsList>

            <TabsContent value="answered">
              <InterviewContent filteredQuestions={filteredQuestions} query={query} />
            </TabsContent>

            <TabsContent value="unanswered">
              <div>123</div>
            </TabsContent>
          </Tabs>
        </Inner>
      </div>
    </div>
  );
};

export default Interview;
