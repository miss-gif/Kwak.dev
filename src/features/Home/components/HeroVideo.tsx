import video from '@assets/video/main.mp4'
import styled from '@emotion/styled'

const HeroVideo = () => {
  return (
    <VideoStyled autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </VideoStyled>
  )
}

export default HeroVideo

const VideoStyled = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -9;
  opacity: 0.3;
  object-fit: cover;
  width: 100%;
  height: 100vh;
`
