import Container from '@/styles/Container'
import SectionTitle from './SectionTitle'

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <SectionTitle />
      <Container>{children}</Container>
    </section>
  )
}

export default Section
