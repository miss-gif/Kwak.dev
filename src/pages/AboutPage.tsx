import Career from '@/components/about/Career'
import Certificate from '@/components/about/Certificate'
import Intro from '@/components/about/Intro'
import Article from '@/components/articles/Article'
import Section from '@/components/sections/Section'
import SkillViewer from '@/components/skill/SkillViewer'

const AboutPage = () => {
  return (
    <Section>
      <div className="flex flex-col">
        <Intro />

        <Article title="Skill">
          <SkillViewer />
        </Article>

        <Article title="Education">
          <Career />
        </Article>

        <Article title="Certificate">
          <Certificate />
        </Article>
      </div>
    </Section>
  )
}

export default AboutPage
