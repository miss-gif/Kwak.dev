import Container from '@/components/common/Container'
import { linkItems } from '@/mocks/data'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const SectionTitle = () => {
  const location = useLocation()
  const [currentName, setCurrentName] = useState('')

  useEffect(() => {
    const currentPath = location.pathname.replace('/', '')
    const matchedItem = linkItems.find((item) => item.path === currentPath)
    setCurrentName(matchedItem ? matchedItem.name : '프로젝트')
  }, [location.pathname])

  return (
    <SectionTitleStyled>
      <Container>
        <CoverImageStyled
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png"
          alt="임시"
        />
        <h2 className="text-7xl">{currentName}</h2>
      </Container>
    </SectionTitleStyled>
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

const CoverImageStyled = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -9;
  opacity: 0.3;
  object-fit: cover;
  width: 100%;
  height: 40vh;
`
