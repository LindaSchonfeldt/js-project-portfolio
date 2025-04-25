import { Card } from './Card'
import { media } from './media'
import styled from 'styled-components'

const StyledCardGrid = styled.div`
  display: none;

  @media ${media.tablet} {
    display: none;
  }

  @media ${media.desktop} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 1fr; /* all rows equal height */
    gap: 1.5rem;
    margin: 2rem auto 0;
    padding: 0 2rem;

    justify-content: center;
    align-items: stretch; /* stretch items to fill the row height */
  }

  @media ${media.largeDesktop} {
    max-width: 1400px;
    padding: 0 4rem;
  }
`

export default function CardGrid({ projects, articles, variant }) {
  const items = projects ?? articles ?? []
  if (!items.length) {
    return (
      <div className='cardGrid'>
        <p>No items to display.</p>
      </div>
    )
  }

  const variantKey = articles ? 'article' : variant.toLowerCase()

  return (
    <StyledCardGrid>
      {items.map((item, i) => (
        <Card
          key={item.id ?? i}
          variant={variantKey}
          // common props
          image={item.image}
          alt={item.alt}
          title={item.title}
          tags={item.tags}
          // per‐variant props
          subtitle={articles ? item.publishedDate : undefined}
          content={articles ? item.description : item.description}
          // defaults: Card will pick actions from defaultActions[variantKey]
          link={item.link}
          netlify={item.netlify}
          github={item.github}
          figma={item.figma}
        />
      ))}
    </StyledCardGrid>
  )
}
