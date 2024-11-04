import Section from '@/components/sections/Section'

const InterviewPage = () => {
  return (
    <Section>
      <div className="flex flex-col py-6">
        <div className="mb-4 p-4 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-bold mb-2">
            Q. 프론트엔드로 전향한 이유?
          </h2>
          <p>
            웹 디자이너로 활동하며 사용자 중심 디자인, 협업, 프론트엔드 기초
            지식을 쌓았습니다. 사용자와의 소통에 대해 중요성을 인지하고, 더
            밀접하게 상호작용 가능한 프로젝트를 개발하고자 프론트엔드 개발자로
            전향을 결심하게 되었습니다. React, Styled Components, Redux Toolkit
            등 다양한 프레임워크와 라이브러리를 도입해 발전할 수 있는 새로운
            도전에 나서고 있습니다.
          </p>
        </div>
        <div className="mb-4 p-4 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-bold mb-2">
            Q. 일에 있어 가장 중요하게 생각하는 것이 있다면?
          </h2>
          <p>
            항상 역지사지 마인드로 사용자 중심 개발을 추구합니다. 직관적이고
            친숙한 UI 제공과 Chrome Lighthouse를 활용해 성능 최적화에
            신경쓰면서, 다양한 사용자들이 편리하게 서비스를 이용 할 수 있도록
            기여하고자 합니다.
          </p>
        </div>
        <div className="mb-4 p-4 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-bold mb-2">
            Q. 자기계발을 위해 어떤 것들을 해왔는지?
          </h2>
          <p>
            지속적인 학습을 위해 스터디와 온라인 강의에 적극 참여하고, 낯선
            기술에도 포기 하지 않고 메타인지 방식을 활용해 문제 해결 능력을 쌓고
            있습니다. 열린 마음으로 피드백을 소중히 여기고, 개발 과정에서 항상
            개선할 점을 찾기 위해 노력하고 있습니다.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default InterviewPage
