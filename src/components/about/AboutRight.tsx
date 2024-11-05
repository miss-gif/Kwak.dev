import { useState } from 'react'
import Article from '../articles/Article'
import Career from './Career'
import Certificate from './Certificate'
import Intro from './Intro'
import Skill from './Skill'
import SkillSet from './SkillSet'

const AboutRight = () => {
  const [skillClick, setSkillClick] = useState(false)

  return (
    <div className="w-full flex flex-col gap-8">
      <Intro />

      <Article title="Skill">
        {skillClick && <Skill />}
        <SkillSet />
      </Article>

      <Article title="Certificate">
        <Certificate />
      </Article>

      <Article title="Education">
        <Career />
      </Article>
    </div>
  )
}

export default AboutRight
