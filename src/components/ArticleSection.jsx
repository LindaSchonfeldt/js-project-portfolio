import { SectionTitle } from './SectionTitle'
import { Carousel } from './Carousel'
import CardGrid from './CardGrid'
import { media } from './media'
import styled from 'styled-components'

const ArticleSectionStyled = styled.div`
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
    <ArticleSectionStyled className='articleSection'>
      <SectionTitle title='My Words' />
      <Carousel items={articles} variant='articles' />
      <CardGrid articles={articles} />
    </ArticleSectionStyled>
  )
}
