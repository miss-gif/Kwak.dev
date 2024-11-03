import Container from '@/styles/Container'

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Container>{children}</Container>
    </section>
  )
}

export default Section
