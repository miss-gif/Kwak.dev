import { formatTextByDot } from "@/utils/formatTextByDot";

interface Question {
  question: string;
  answer: string;
}

interface InterviewContentProps {
  filteredQuestions: Question[];
  query: string;
}

const InterviewContent = ({ filteredQuestions, query }: InterviewContentProps) => {
  return (
    <>
      <ul className="mt-4 flex flex-col gap-4">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question, index) => (
            <li key={index} className="shadow-style rounded-md border border-gray-300 p-6 hover:border-blue-300">
              <h3 className="text-xl font-semibold">Q. {question.question}</h3>
              <p
                className={`my-4 whitespace-pre-line leading-loose transition-all duration-300 ${
                  query ? "blur-0" : "blur-sm"
                } hover:blur-0`}
              >
                {formatTextByDot(question.answer)}
              </p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">검색 결과가 없습니다.</p>
        )}
      </ul>
    </>
  );
};

export default InterviewContent;
