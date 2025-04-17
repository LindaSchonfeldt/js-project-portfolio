import { ProjectCard } from './ProjectCard'

// CardGrid to display a grid of cards
// This component can be used to display a grid of cards, such as project cards
export default function CardGrid({ projects, category }) {
  // Filter projects based on category
  const filteredProjects = projects.filter(
    (project) => project.category === category
  )
  console.log('Filtered projects:', filteredProjects) // Debug what you're importing
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
    <div className='cardGrid'>
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
