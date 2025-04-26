import { SectionTitle } from '../components/SectionTitle'
import { Carousel } from '../components/Carousel'
import CardGrid from '../components/CardGrid'
import styled from 'styled-components'

const StyledArticleSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--space-xxl);
  margin-bottom: var(--space-lg);
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
