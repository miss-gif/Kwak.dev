import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import StickyWrapper from "@/components/common/StickyWrapper";
import interviewQuestions from "@/data/interviewQuestions";
import CloseIcon from "@mui/icons-material/Close";
import Fuse from "fuse.js";
import { useEffect, useState } from "react";

const InterviewPage = () => {
  const [query, setQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] =
    useState(interviewQuestions);

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

  const props = {
    title: "소개",
    subtitle: "✨ 서브타이틀",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        {/* 검색 입력 필드 */}
        <StickyWrapper>
          <input
            type="text"
            placeholder="키워드를 입력해 인터뷰 질문을 찾아보세요"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border-2 border-blue-300 px-4 py-6"
          />
          {/* 검색어 초기화 버튼 */}
          {query && (
            <button
              onClick={clearQuery}
              className="absolute right-4 text-gray-500 hover:text-gray-700"
            >
              <CloseIcon />
            </button>
          )}
        </StickyWrapper>

        <ul className="mt-4 flex flex-col gap-4">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((question, index) => (
              <li
                key={index}
                className="rounded-lg border border-gray-300 p-6 shadow-sm transition-shadow duration-200 hover:border-2 hover:border-blue-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">
                  Q. {question.question}
                </h3>
                <p
                  className={`mt-2 leading-relaxed transition-all duration-300 ${
                    query ? "blur-0" : "blur-sm"
                  } hover:blur-0`}
                >
                  {question.answer}
                </p>
              </li>
            ))
          ) : (
            <p className="py-10 text-center text-2xl">검색 결과가 없습니다.</p>
          )}
        </ul>
      </SectionWrapper>
    </PageLayout>
  );
};

export default InterviewPage;
