import { personalInfo } from '@/data'

const TextCard = () => {
  const certifications = personalInfo.certifications

  return (
    <ul className="grid gap-8 mt-16">
      {certifications.map((certification, index) => (
        <li
          key={index}
          className="p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
        >
          <h3 className="text-xl font-semibold">{certification.name}</h3>
          <div className="mt-2">
            <time dateTime={certification.date} className="block text-sm">
              {certification.date}
            </time>
            <span className="block text-sm">{certification.organization}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TextCard
