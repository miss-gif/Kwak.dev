import { home } from '@/mocks/data'
import styled from '@emotion/styled'
import { FaGithub } from 'react-icons/fa'
import { RxNotionLogo } from 'react-icons/rx'
import { PiNotePencil } from 'react-icons/pi'

const HomeLeft = () => {
  return (
    <HomeLeftStyled>
      <div className="">
        <p className="text-8xl">PORTFOLIO</p>
        <p className="text-8xl">WEB DEVELOP</p>
      </div>

      <div className="">{home.description}</div>
      <div className="flex gap-2">
        <LinkStyled
          href={home.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          깃허브 링크
        </LinkStyled>
        <LinkStyled
          href={home.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RxNotionLogo />
          이력서 링크
        </LinkStyled>
        <LinkStyled href={home.study} target="_blank" rel="noopener noreferrer">
          <PiNotePencil />
          스터디 링크
        </LinkStyled>
      </div>
    </HomeLeftStyled>
  )
}

export default HomeLeft

const HomeLeftStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    font-size: 32px;
  }
`
