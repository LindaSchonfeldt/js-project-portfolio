import { Card } from './Card'

export default function CardGrid({ projects, variant }) {
  // Debug what we're getting
  console.log('CardGrid received:', projects, 'variant=', variant)

  // Single safety check
  if (!projects || !Array.isArray(projects) || projects.length === 0) {
    console.log('No cards data available:', projects)
    return (
      <div className='cardGrid'>
        <p>Projects coming soon!</p>
      </div>
    )
  }

  // Use the prop name “projects” here—not “projectsToDisplay”
  console.log('About to render CardGrid with:', projects)

  return (
    <div className='cardGrid'>
      {/* Map through projects with index as fallback key */}
      {projects.map((project, i) => (
        <Card
          key={project.id || `project-${i}`}
          variant={variant}
          image={project.image}
          title={project.title}
          content={project.description}
          tags={project.tags}
          actions={[
            { text: 'Live Demo', href: project.link, variant: 'primary' },
            { text: 'View Code', href: project.github, variant: 'secondary' }
          ]}
        />
      ))}
    </div>
  )
}
