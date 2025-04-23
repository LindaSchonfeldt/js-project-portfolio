import { SectionTitle } from './SectionTitle'
import { Carousel } from './Carousel'
import CardGrid from './CardGrid'
import { media } from './media'
import styled from 'styled-components'

const StyledArticleSection = styled.div`
  margin-top: 4rem;

  @media (media.tablet) {
    margin: 0 16px;
  }
  @media (media.desktop) {
    margin: 0 32px;
  }
  @media (media.largedesktop) {
    margin: 0 64px;
  }
`

export const ArticleSection = ({ articles }) => {
  return (
    <StyledArticleSection>
      <SectionTitle title='My Words' />
      <Carousel items={articles} variant='articles' />
      <CardGrid articles={articles} />
    </StyledArticleSection>
  )
}
