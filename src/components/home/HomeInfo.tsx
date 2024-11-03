import HomeLeft from '@/components/home/HomeLeft'
import HomeRight from '@/components/home/HomeRight'
import styled from '@emotion/styled'

const HomeInfo = () => {
  return (
    <HomeInfoStyled>
      <HomeLeft />
      <HomeRight />
    </HomeInfoStyled>
  )
}

export default HomeInfo

const HomeInfoStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0 2rem;
`
