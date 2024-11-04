import Container from '@/components/common/Container'
import { Theme } from '@/types/theme'
import styled from '@emotion/styled'
import { linkItems } from '@mocks/data'
import { capitalizeFirstLetter } from '@utils/utils'
import { Link } from 'react-router-dom'
import BasicButtons from '../common/Button'
import ToggleThemeSwitch from './ToggleThemeSwitch'
import { useEffect } from 'react'

const Header = ({ toggleTheme }: Theme) => {
  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const header = document.querySelector('.header')
    if (header) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (scrollTop > 0) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    }
  }

  // 스크롤 이벤트 등록
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderStyled className="header">
      <Container>
        <Link to={'/'}>
          <h1>Portfolio</h1>
        </Link>

        <nav>
          <ul className="flex gap-6">
            {linkItems.map((item, index) => (
              <li>
                <Link to={item.name} key={index}>
                  {capitalizeFirstLetter(item.name)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-6">
          <ToggleThemeSwitch onClick={toggleTheme} />
          <BasicButtons>로그인</BasicButtons>
        </div>
      </Container>
    </HeaderStyled>
  )
}

export default Header

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 9999;

  &.scrolled {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
  }
`
