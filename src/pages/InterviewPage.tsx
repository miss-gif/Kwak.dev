import { useState, useEffect } from 'react'
import Fuse from 'fuse.js'
import Section from '@/components/sections/Section'
import interviewQuestions from '@/data/interviewQuestions'
import CloseIcon from '@mui/icons-material/Close'

const InterviewPage = () => {
  const [query, setQuery] = useState('')
  const [filteredQuestions, setFilteredQuestions] = useState(interviewQuestions)

  // fuse.js 설정
  const fuse = new Fuse(interviewQuestions, {
    keys: ['question'],
    threshold: 0.3,
  })

  // 검색어가 변경될 때마다 필터링
  useEffect(() => {
    if (query) {
      const results = fuse.search(query)
      setFilteredQuestions(results.map((result) => result.item))
    } else {
      setFilteredQuestions(interviewQuestions)
    }
  }, [query])

  // 검색어 초기화 함수
  const clearQuery = () => setQuery('')

  return (
    <Section>
      <div className="flex flex-col py-4 w-full">
        {/* 검색 입력 필드 */}
        <div className="sticky top-20 z-10  flex items-center py-6 w-full">
          <input
            type="text"
            placeholder="키워드를 입력해 인터뷰 질문을 찾아보세요"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-6 border-4 border-rose-300 rounded-lg w-full"
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
        </div>

        <ul className="flex flex-col gap-4 mt-4">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((question, index) => (
              <li
                key={index}
                className="p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 hover:border-2 hover:border-blue-300"
              >
                <h3 className="text-xl font-semibold">
                  Q. {question.question}
                </h3>
                <p
                  className={`mt-2 leading-relaxed transition-all duration-300 ${
                    query ? 'blur-0' : 'blur-sm'
                  } hover:blur-0`}
                >
                  {question.answer}
                </p>
              </li>
            ))
          ) : (
            <p className="text-center text-2xl py-10">검색 결과가 없습니다.</p>
          )}
        </ul>
      </div>
    </Section>
  )
}

export default InterviewPage
