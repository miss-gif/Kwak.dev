import HomeLeft from '@/components/home/HomeLeft'
import HomeNotice from './HomeNotice'

const HomeInfo = () => {
  return (
    <div className="flex flex-col justify-center gap-10 w-full md:h-svh ">
      <div className="flex flex-col md:flex-row md:justify-between h-svh items-center justify-center">
        <HomeLeft />
        <div className="md:flex md:flex-col gap-4 ">
          <HomeNotice />
          <HomeNotice />
          <HomeNotice />
        </div>
      </div>
    </div>
  )
}

export default HomeInfo
