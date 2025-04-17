import { ProjectCard } from './ProjectCard'

export default function CardGrid({ projects }) {
  // Debug what we're getting
  console.log('CardGrid received:', projects)

  // Single safety check
  if (!projects || !Array.isArray(projects) || projects.length === 0) {
    console.log('No cards data available:', projects)
    return (
      <div className='cardGrid'>
        <p>Projects coming soon!</p>
      </div>
    )
  }

  return (
    <div className='cardGrid'>
      {/* Map through projects with index as fallback key */}
      {projects.map((project, index) => (
        <ProjectCard key={project.id || `project-${index}`} project={project} />
      ))}
    </div>
  )
}
