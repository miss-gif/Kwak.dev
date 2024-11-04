import Container from '@/components/common/Container'
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
