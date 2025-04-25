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
      display: grid;
      max-width: 1200px;
      grid-template-columns: minmax(0, 300px);
      justify-content: center;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-auto-rows: 1fr; /* equal‐height rows */
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
