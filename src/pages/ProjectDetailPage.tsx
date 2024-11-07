import Section from "@/components/sections/Section";

const ProjectDetailPage = () => {
  return (
    <Section>
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-4 text-2xl font-bold">
          제목: 프론트엔드 개발 포트폴리오 웹사이트 구축 보고
        </h1>

        <p className="mb-4">본문:</p>

        <p className="mb-4">
          본 프로젝트는 프론트엔드 개발자로서의 역량을 효과적으로 어필하기 위해
          포트폴리오 웹사이트를 구축하는 것을 목표로 진행되었습니다.
        </p>

        <h2 className="mb-2 text-xl font-semibold">1. 목표:</h2>
        <ul className="mb-4 list-inside list-disc">
          <li>
            프로젝트 한눈에 보기: 진행했던 다양한 프론트엔드 개발 프로젝트를 한
            곳에 모아 시각적으로 효과적으로 보여줌으로써, 개발 경험과 역량을
            명확하게 전달합니다.
          </li>
          <li>
            기술 스택 강조: 프로젝트별로 사용된 프론트엔드 기술 스택을 상세히
            기재하여, 숙련된 기술력을 입증합니다.
          </li>
          <li>
            전문성 어필: 포트폴리오 웹사이트 자체를 개발함으로써, 프론트엔드
            개발에 대한 높은 이해도와 실무 능력을 보여줍니다.
          </li>
        </ul>

        <h2 className="mb-2 text-xl font-semibold">2. 주요 기능:</h2>
        <ul className="mb-4 list-inside list-disc">
          <li>
            프로젝트 목록: 진행한 프로젝트를 간략하게 소개하고, 상세 페이지로
            이동할 수 있는 링크 제공
          </li>
          <li>
            프로젝트 상세 페이지: 각 프로젝트별 기술 스택, 개발 과정, 결과물
            등을 상세히 설명
          </li>
          <li>
            기술 스택: 사용한 프론트엔드 기술 스택을 목록 형태로 정리하여 한눈에
            확인 가능
          </li>
          <li>연락처: 이메일, 깃허브 등을 통해 연락할 수 있는 정보 제공</li>
        </ul>

        <h2 className="mb-2 text-xl font-semibold">3. 사용 기술:</h2>
        <ul className="mb-4 list-inside list-disc">
          <li>
            [사용된 프레임워크/라이브러리]: React, Vue.js 등 (실제 사용한 기술
            명시)
          </li>
          <li>[사용된 언어]: JavaScript, HTML, CSS 등</li>
          <li>
            [기타]: 추가로 사용한 도구나 기술 (예: 버전 관리 시스템, 디자인 툴
            등)
          </li>
        </ul>

        <h2 className="mb-2 text-xl font-semibold">4. 결과:</h2>
        <ul className="mb-4 list-inside list-disc">
          <li>[포트폴리오 URL]: 구축된 포트폴리오 웹사이트 주소</li>
          <li>
            [성과]: 포트폴리오를 통해 얻고자 하는 목표 (예: 취업, 프리랜서 활동
            등)
          </li>
        </ul>

        <p className="mt-4">결론:</p>

        <p>
          본 프로젝트를 통해 프론트엔드 개발자로서의 역량을 효과적으로 어필할 수
          있는 포트폴리오 웹사이트를 성공적으로 구축하였습니다. 앞으로도
          지속적인 학습과 개발을 통해 더욱 발전된 포트폴리오를 만들어나갈
          것입니다.
        </p>
      </div>
    </Section>
  );
};

export default ProjectDetailPage;
