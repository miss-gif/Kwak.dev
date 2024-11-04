import Article from '../articles/Article'

const Experience = () => {
  return (
    <Article>
      <h3 className="text-xl font-bold mb-4">Education</h3>
      <div className="mb-6">
        <h4 className="text-lg font-semibold">
          주문이요 (음식주문 플랫폼) 협업 3차 프로젝트
        </h4>
        <p className="text-sm">Web Developer | 2024-06-23 ~ 2024-07-23</p>
        <ul className="list-disc list-inside ml-4">
          <li>
            음식 주문 플랫폼을 개발하며 프로젝트를 총괄하고 UI/UX 디자인, 공통
            컴포넌트 및 레이아웃 설계, 라우터 설정, 깃허브 관리, 사용자 기능
            등을 담당했습니다. Redux Toolkit을 사용한 상태 관리와 MUI를 활용한
            UI 컴포넌트 커스터마이징 경험을 얻었습니다.
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold">
          주문이요 (음식주문 플랫폼) 협업 3차 프로젝트
        </h4>
        <p className="text-sm">
          2차 프로젝트에서 구현한 기능을 고도화하는 작업을 진행 중입니다. 기존
          시스템의 성능을 개선하고, 사용자 피드백을 반영하여 기능을 추가하며
          지속적으로 서비스를 개선하고 있습니다.
        </p>
        <p className="text-sm">Web Developer | 20.06 - 22.11</p>
        <ul className="list-disc list-inside ml-4"></ul>
      </div>
    </Article>
  )
}

export default Experience
