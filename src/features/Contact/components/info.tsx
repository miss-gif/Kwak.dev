import styled from '@emotion/styled'

const AboutLeft = () => {
  return (
    <AboutLeftStyled className="w-1/4">
      <div>
        <p>곽도억</p>
        <p>대구광역시 거주</p>
        <p>Web Developer</p>
        <p>Front Developer</p>
      </div>
      <div className="네비게이션"></div>
    </AboutLeftStyled>
  )
}

export default AboutLeft

const AboutLeftStyled = styled.div`
  position: sticky;
  top: 120px;
  height: 100%;
`
