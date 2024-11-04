import { home } from '@/mocks/data'
import styled from '@emotion/styled'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import EditNoteIcon from '@mui/icons-material/EditNote'
import GitHubIcon from '@mui/icons-material/GitHub'

const HomeLeft = () => {
  return (
    <HomeLeftStyled>
      <div className="">{home.description}</div>
      <div className="flex gap-2">
        <LinkStyled
          href={home.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
          깃허브
        </LinkStyled>
        <LinkStyled
          href={home.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactPageIcon />
          이력서
        </LinkStyled>
        <LinkStyled href={home.study} target="_blank" rel="noopener noreferrer">
          <EditNoteIcon />
          스터디
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
