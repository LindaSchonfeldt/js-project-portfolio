import { Card } from './Card'
import { media } from '../media.js'
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
  console.log('CardGrid received:', { projects, articles, variant }) // Add debug

  const items = projects || articles || []

  return (
    <StyledCardGrid>
      {items.map((item) => {
        console.log('CardGrid rendering item:', item) // Add debug
        return (
          <Card
            key={item.id}
            variant={variant}
            id={item.id}
            caseStudyId={variant === 'uxui' ? item.id : undefined} // Important for UX/UI
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            tags={item.tags}
            image={item.image}
            video={item.video}
            alt={item.alt}
            netlify={item.netlify}
            github={item.github}
            figma={item.figma}
            link={item.link}
          />
        )
      })}
    </StyledCardGrid>
  )
}
