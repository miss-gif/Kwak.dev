import Container from '@/components/common/Container'

const getCurrentYear = () => {
  return new Date().getFullYear()
}

const Footer = () => {
  const currentYear = getCurrentYear()

  return (
    <footer>
      <Container>
        <p> ⓒ {currentYear} miss-gif. All Rights Reserved.</p>
      </Container>
    </footer>
  )
}

export default Footer
