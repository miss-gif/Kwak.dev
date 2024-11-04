import HomeLeft from '@/components/home/HomeLeft'
import styled from '@emotion/styled'

const HomeInfo = () => {
  return (
    <HomeInfoStyled>
      <div className="">
        <p className="text-8xl">PORTFOLIO</p>
        <p className="text-8xl">WEB DEVELOPER</p>
      </div>
      <div className="flex">
        <HomeLeft />
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
`
