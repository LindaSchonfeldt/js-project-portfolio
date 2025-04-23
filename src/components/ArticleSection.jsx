import { SectionTitle } from './SectionTitle'
import { Carousel } from './Carousel'
import CardGrid from './CardGrid'
import { media } from './media'
import styled from 'styled-components'

const StyledArticleSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  .carouselWrapper {
    display: block;
  }
  .gridWrapper {
    display: none;
  }

  @media ${media.desktop} {
    .carouselWrapper {
      display: none;
    }
    .gridWrapper {
      display: flex;
    }
  }
`

export const ArticleSection = ({ articles }) => {
  return (
    <StyledArticleSection>
      <SectionTitle title='My Words' className='sectionTitle' />
      <Carousel items={articles} variant='articles' />
      <CardGrid articles={articles} />
    </StyledArticleSection>
  )
}
