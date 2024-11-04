import HomeLeft from '@/components/home/HomeLeft'
import HomeRight from '@/components/home/HomeRight'
import styled from '@emotion/styled'

const HomeInfo = () => {
  return (
    <HomeInfoStyled>
      <div className="">
        <p className="text-8xl">PORTFOLIO</p>
        <p className="text-8xl">WEB DEVELOP</p>
      </div>
      <div className="flex">
        <HomeLeft />
        <HomeRight />
      </div>
    </HomeInfoStyled>
  )
}

export default HomeInfo

const HomeInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  width: 100%;
  height: 100vh;
  padding: 0 2rem;
`
