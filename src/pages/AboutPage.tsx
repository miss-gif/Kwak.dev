import AboutLeft from '@/components/about/AboutLeft'
import AboutRight from '@/components/about/AboutRight'
import Section from '@/components/sections/Section'

const AboutPage = () => {
  return (
    <Section>
      <div className="flex ">
        {/* <AboutLeft /> */}
        <AboutRight />
      </div>
    </Section>
  )
}

export default AboutPage
