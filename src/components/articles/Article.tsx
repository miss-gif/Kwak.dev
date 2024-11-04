import styled from '@emotion/styled'

const Article = ({ children }: { children: React.ReactNode }) => {
  return <ArticleStyled>{children}</ArticleStyled>
}

export default Article

const ArticleStyled = styled.div`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`
