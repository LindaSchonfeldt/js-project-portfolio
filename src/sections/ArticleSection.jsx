import { SectionTitle } from '../components/SectionTitle'
import { Carousel } from '../components/Carousel'
import CardGrid from '../components/CardGrid'
import { media } from '../components/media'
import styled from 'styled-components'

const StyledArticleSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  margin-bottom: 2rem;

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
      display: block;
    }
  }
`

export const ArticleSection = ({ articles }) => {
  return (
    <StyledArticleSection>
      <SectionTitle title='My Words' className='sectionTitle' />
      <div className='carouselWrapper'>
        <Carousel items={articles} variant='article' />
      </div>
      <div className='gridWrapper'>
        <CardGrid articles={articles} variant='article' />
      </div>
    </StyledArticleSection>
  )
}
