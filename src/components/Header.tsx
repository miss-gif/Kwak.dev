import Container from '@/styles/Container'
import styled from '@emotion/styled'
import { linkItems } from '@mocks/data'
import { capitalizeFirstLetter } from '@utils/utils'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Link to={'/'}>
          <h1>Portfolio</h1>
        </Link>

        <nav>
          <ul className="flex gap-6">
            {linkItems.map((item, index) => (
              <Link to={item.name} key={index}>
                <li>{capitalizeFirstLetter(item.name)}</li>
              </Link>
            ))}
          </ul>
        </nav>

        <button>로그인</button>
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
  height: 5rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 9999;
`
