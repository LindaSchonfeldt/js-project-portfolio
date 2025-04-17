// Can be used to display Code or UX/UI projects in a grid or carousel format
// Can display projects in a grid or carousel format

export const ProjectSection = ({ projects }) => {
  // Safety check for when projects may not be available yet
  if (!projects || !Array.isArray(projects) || projects.length === 0) {
    console.log('No projects data available:', projects)
    return (
      <section className='projectContainer'>
        <h2 className='sectionTitle'>Projects</h2>
        <p>Projects coming soon!</p>
      </section>
    )
  }

  return (
    <section className='projectContainer'>
      <h2 className='sectionTitle'>Projects</h2>
      <div className='projectsGrid'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
