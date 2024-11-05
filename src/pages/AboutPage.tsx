import Career from '@/components/about/Career'
import Certificate from '@/components/about/Certificate'
import Intro from '@/components/about/Intro'
import Skill from '@/components/about/Skill'
import SkillSet from '@/components/about/SkillSet'
import Article from '@/components/articles/Article'
import Section from '@/components/sections/Section'

import { useState } from 'react'

const AboutPage = () => {
  const [showSkill, setShowSkill] = useState(false)

  const handleToggle = () => {
    setShowSkill(!showSkill)
  }

  return (
    <Section>
      <div className="flex flex-col">
        <Intro />

        <Article title="Skill">
          <button onClick={handleToggle}>
            {showSkill ? '주력기 보기' : '숙련도 보기'}
          </button>
          {showSkill ? <Skill /> : <SkillSet />}
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
