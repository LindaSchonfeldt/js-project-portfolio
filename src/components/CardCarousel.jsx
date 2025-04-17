// Carousel component for displaying cards
// This component can be used to display a carousel of cards, such as project cards

export default function CardCarousel({ projects }) {
  // Safety check for when cards may not be available yet
  if (!projects || !Array.isArray(projects) || projects.length === 0) {
    console.log('No cards data available:', projects)
    return (
      <section className='cardCarousel'>
        <p>Projects coming soon!</p>
      </section>
    )
  }

  return (
    <section className='cardCarousel'>
      <div className='carouselContainer'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
