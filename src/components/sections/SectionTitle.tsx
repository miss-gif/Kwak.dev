import Container from '@/components/common/Container'
import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SectionTitle = () => {
  const prams = useLocation()

  useEffect(() => {
    console.log(prams)
  }, [prams])

  return (
    <>
      <SectionTitleStyled>
        <Container>
          <ImageStyled
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png"
            alt="11"
          />
          <h2 className="text-7xl">{prams.pathname}</h2>
        </Container>
      </SectionTitleStyled>
    </>
  )
}

export default SectionTitle

const SectionTitleStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`

const ImageStyled = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -9;
  opacity: 0.3;
  object-fit: cover;
  width: 100%;
  height: 40vh;
`
