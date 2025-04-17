// CardGrid to display a grid of cards
// This component can be used to display a grid of cards, such as project cards
import { ProjectCard } from './ProjectCard'

export default function CardGrid({ projects }) {
  // Safety check for when cards may not be available yet
  if (!projects || !Array.isArray(projects) || projects.length === 0) {
    console.log('No cards data available:', projects)
    return (
      <section className='cardGrid'>
        <p>Projects coming soon!</p>
      </section>
    )
  }
  return (
    <section className='cardGrid'>
      <div className='gridContainer'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
