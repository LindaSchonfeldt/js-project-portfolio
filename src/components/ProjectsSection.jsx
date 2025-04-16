import React from 'react'
import { ProjectCard } from './ProjectCard'

export const ProjectsSection = ({ projects = [] }) => {
  return (
    <section className='projectsContainer'>
      <h2 className='sectionTitle'>Projects</h2>
      <div className='projectsGrid'>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={project.id || index} project={project} />
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </section>
  )
}
