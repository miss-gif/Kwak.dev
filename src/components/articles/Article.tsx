import styled from '@emotion/styled'

const Article = ({
  children,
  title,
}: {
  children?: React.ReactNode
  title?: string
}) => {
  return (
    <ArticleStyled>
      {title && <TitleStyled>{title}</TitleStyled>}
      {children}
    </ArticleStyled>
  )
}

export default Article

const ArticleStyled = styled.article`
  border-radius: 4px;
`

const TitleStyled = styled.h2`
  text-transform: uppercase;
  padding: 60px 40px;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
`
