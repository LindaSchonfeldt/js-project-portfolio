import { Card } from './Card'
import { media } from './media'
import styled from 'styled-components'

const StyledCardGrid = styled.div`
  display: none;

  @media ${media.tablet} {
    display: none;
  }

  @media ${media.desktop} {
    .gridWrapper {
      /* Override the default block display */
      display: flex;
      justify-content: center; /* centers its child CardGrid */
    }

    display: grid;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 var(--space-lg);

    /* Grid layout */
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 1fr; /* All rows have equal height */
    gap: var(--space-sm);
    justify-content: center;
    align-items: stretch; /* stretch items to fill the row height */
  }

  @media ${media.largeDesktop} {
    max-width: 1200px;
    margin: 0 auto;
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
          // Common props
          image={item.image}
          alt={item.alt}
          title={item.title}
          tags={item.tags}
          // Per‐variant props
          subtitle={articles ? item.publishedDate : undefined}
          content={articles ? item.description : item.description}
          // Defaults: Card will pick actions from defaultActions[variantKey]
          link={item.link}
          netlify={item.netlify}
          github={item.github}
          figma={item.figma}
        />
      ))}
    </StyledCardGrid>
  )
}
