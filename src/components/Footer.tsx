import Container from '@/components/common/Container'
import styled from '@emotion/styled'

const getCurrentYear = () => {
  return new Date().getFullYear()
}

const Footer = () => {
  const currentYear = getCurrentYear()

  return (
    <FooterStyled>
      <Container>
        <p> ⓒ {currentYear} miss-gif. All Rights Reserved.</p>
      </Container>
    </FooterStyled>
  )
}

export default Footer

const FooterStyled = styled.footer`
  padding: 10px 0;
  background: rgba(0, 0, 0, 0.1);
`
