import { home } from '@/mocks/data'
import styled from '@emotion/styled'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import EditNoteIcon from '@mui/icons-material/EditNote'
import GitHubIcon from '@mui/icons-material/GitHub'

const HomeLeft = () => {
  return (
    <HomeLeftStyled>
      <div className="max-w-[800px] mt-5">
        <p>제 포트폴리오에 관심을 가져주셔서 감사합니다. </p>
        <p>전문성을 향상시키기 위해 끊임없이 새로운 기술을 학습하고,</p>
        <p>프로젝트에 적용하여 역량을 강화하고 있습니다.</p>
      </div>

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
  gap: 6px;
  svg {
    font-size: 26px;
  }
`
