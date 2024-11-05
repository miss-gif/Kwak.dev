import Container from '@/components/common/Container'
import HeroVideo from '@/components/home/HeroVideo'
import HomeInfo from './../components/home/HomeInfo'

const HomePage = () => {
  return (
    <section>
      <Container>
        <HeroVideo />
        <HomeInfo />
      </Container>
    </section>
  )
}

export default HomePage
