import { Card } from './Card'

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
    <div className='cardGrid'>
      {items.map((item, i) => {
        if (articles) {
          // render an “article” card
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
          // render a “project” card
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
    </div>
  )
}
