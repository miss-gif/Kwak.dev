import HomeLeft from '@/components/home/HomeLeft'
import styled from '@emotion/styled'
import HomeNotice from './HomeNotice'

const HomeInfo = () => {
  return (
    <HomeInfoStyled>
      <div className="flex justify-between">
        <HomeLeft />
        <div className="flex flex-col gap-4">
          <HomeNotice />
          <HomeNotice />
          <HomeNotice />
        </div>
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
