import { Card } from './Card'
import { media } from './media'
import styled from 'styled-components'

const StyledCardGrid = styled.div`
  /* hide grid by default (mobile) */
  display: none;

  @media ${media.tablet} {
    display: none;
  }

  @media ${media.desktop} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media ${media.largeDesktop} {
  }
`

export default function CardGrid({ projects, articles, variant }) {
  // projects or articles, default to projects
  const items = projects ?? articles ?? []

  // Single safety check for items
  if (!Array.isArray(items) || items.length === 0) {
    return (
      <div className='cardGrid'>
        <p>No items to display.</p>
      </div>
    )
  }

  return (
    <StyledCardGrid className='cardGrid'>
      {items.map((item, i) => {
        if (articles) {
          // Render an “article” card
          return (
            <Card
              key={item.id || `article-${i}`}
              image={item.image}
              title={item.title}
              subtitle={item.publishedDate}
              content={item.excerpt}
              actions={[
                { text: 'Read Article', href: item.link, variant: 'secondary' }
              ]}
            />
          )
        } else {
          // Render a “project” card
          return (
            <Card
              key={item.id || `project-${i}`}
              variant={variant} // “Code” or “UX/UI”
              image={item.image}
              title={item.title}
              content={item.description}
              tags={item.tags}
              actions={[
                { text: 'Live Demo', href: item.link, variant: 'primary' },
                { text: 'View Code', href: item.github, variant: 'secondary' }
              ]}
            />
          )
        }
      })}
    </StyledCardGrid>
  )
}
