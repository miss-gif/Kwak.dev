import styled from '@emotion/styled'

const Container = ({ children }: { children: React.ReactNode }) => {
  return <ContainerStyled>{children}</ContainerStyled>
}

export default Container

export const ContainerStyled = styled.div`
  padding: 0 2rem;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
