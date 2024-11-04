import Article from '../articles/Article'

const Education = () => {
  return (
    <Article>
      <h3 className="text-xl font-bold mb-4">Experience</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          기업 요구를 반영한 프로젝트 중심 프론트엔드 React(리액트) 개발자 양성
          과정
        </li>
        <li>[과정평가형]정보처리산업기사(자바(Java)프로그래밍 활용 웹개발)A</li>
        <li>대구가톨릭대학교 도서관학과/일어일문학과</li>
      </ul>
    </Article>
  )
}

export default Education
