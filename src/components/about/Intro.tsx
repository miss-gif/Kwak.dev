import styled from '@emotion/styled'

const Intro = () => {
  return (
    <IntroStyled>
      <h3 className="text-2xl mb-4">
        안녕하세요! 프론트엔드 개발자 <strong>곽도억</strong>입니다.
      </h3>
      <p className="leading-8  mb-4">
        저는 사용자 중심의 웹 개발을 통해 더 나은 디지털 경험을 제공하고자
        노력하는 개발자입니다. <br />웹 개발은 단순한 기술 구현을 넘어,
        사용자와의 소통을 위한 중요한 매개체라고 생각합니다. <br /> 다양한
        프로젝트를 수행하며,
        <strong>[구체적인 프로젝트 예시]</strong>와 같은 경험을 통해 사용자 행동
        패턴 분석, 디자인 시스템 구축 등을 수행했습니다.
        <br /> 이를 바탕으로 직관적이고 효율적인 사용자 인터페이스를 설계하고
        개발하며,
        <strong>[구체적인 성과]</strong>를 달성했습니다.
      </p>
      <p>
        끊임없이 새로운 기술을 탐구하고, 팀원들과의 협업을 통해 최고의 결과를
        만들어내는 데 기여하고 싶습니다.
      </p>
    </IntroStyled>
  )
}

export default Intro

const IntroStyled = styled.div`
  padding: 100px 30px;
`
