import Section from '@/components/sections/Section'
import interviewQuestions from '@/data/interviewQuestions'

const InterviewPage = () => {
  return (
    <Section>
      <ul className="flex flex-col py-6">
        {interviewQuestions.map((question, index) => (
          <li key={index} className="mb-4 p-4 bg-gray-100 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Q. {question.question}</h3>
            <p>{question.answer}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default InterviewPage
