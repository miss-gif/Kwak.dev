const HomeRight = () => {
  return (
    <div>
      <div className="home__img-wrapper">
        {/* 이미지 영역 */}
        <div title="Click!">
          <div className="home__banner__front">
            <img src="/Avatar1.png" alt="" className="home__profile" />
          </div>
          <div className="home__banner__back">
            <img src="" alt="" className="home__profile" />
          </div>
        </div>
        <p className="home__data home__data-one">
          <span className="text-lg">
            2 <b>+</b>
          </span>
          <span className="text-sm text-cs">
            Years of <span>Experience</span>
          </span>
        </p>

        <p className="home__data home__data-two">
          <span className="text-lg">
            19<b>+</b>
          </span>
          <span className="text-sm text-cs">
            Completed <span>Portfolio</span>
          </span>
        </p>
      </div>
    </div>
  )
}

export default HomeRight
