import Certificate from './Certificate'
import Education from './Education'
import Experience from './Experience'
import Intro from './Intro'
import Skill from './Skill'

const AboutRight = () => {
  return (
    <div className="w-3/4 flex flex-col gap-8">
      <Intro />
      <Skill />
      <Certificate />
      <Experience />
      <Education />
    </div>
  )
}

export default AboutRight
