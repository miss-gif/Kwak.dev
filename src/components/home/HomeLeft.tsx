import { home } from '@/mocks/data'
import styled from '@emotion/styled'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import EditNoteIcon from '@mui/icons-material/EditNote'
import GitHubIcon from '@mui/icons-material/GitHub'

const HomeLeft = () => {
  return (
    <HomeLeftStyled>
      <div className="flex flex-col">
        {/* 타이틀 */}
        <div className="">
          <p className="text-2xl font-bold">FRONT END & Web Publisher</p>
          <p className="text-7xl font-bold">PORTFOLIO</p>
          <p className="text-7xl font-bold">WEB DEVELOPER</p>
        </div>
        {/* 콘텐츠 */}
        <div className="py-14 ">
          <p>제 포트폴리오에 관심을 가져주셔서 감사합니다. </p>
          <p>전문성을 향상시키기 위해 끊임없이 새로운 기술을 학습하고,</p>
          <p>프로젝트에 적용하여 역량을 강화하고 있습니다.</p>
        </div>
        {/* 링크 그룹 */}
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
          <LinkStyled
            href={home.study}
            target="_blank"
            rel="noopener noreferrer"
          >
            <EditNoteIcon />
            스터디
          </LinkStyled>
        </div>
      </div>
    </HomeLeftStyled>
  )
}

export default HomeLeft

const HomeLeftStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const LinkStyled = styled.a`
  width: 160px;
  height: 50px;
  padding: 15px 30px;
  border: 1px solid #333;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
  svg {
    font-size: 26px;
  }
`
