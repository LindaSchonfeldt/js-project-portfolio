import { SectionTitle } from '../components/SectionTitle'
import { Carousel } from '../components/Carousel'
import CardGrid from '../components/CardGrid'
import styled from 'styled-components'
import { useArticleStore } from '../stores/useArticleStore'

const StyledArticleSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--space-xxl);
  margin-bottom: var(--space-lg);
`

export const ArticleSection = () => {
  const articles = useArticleStore((state) => state.articles)

  return (
    <StyledArticleSection>
      <SectionTitle title='Articles' className='sectionTitle' />
      <div className='carouselWrapper'>
        <Carousel items={articles} variant='article' />
      </div>
      <div className='gridWrapper'>
        <CardGrid articles={articles} variant='article' />
      </div>
    </StyledArticleSection>
  )
}
