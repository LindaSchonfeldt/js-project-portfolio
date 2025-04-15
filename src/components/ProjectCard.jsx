import React from 'react'
import projects from '../data/projects.json'

// Card
// image
// Title
// Description
// Buttons
// Link to live demo
// Link to GitHub repo
// Tags (HTML, CSS, JS, React, etc.)

export const ProjectCard = ({ project }) => {
  return (
    <section className='projectCard'>
      <div className='projectCard__image'>
        <img src={project.image} alt={project.title} />
      </div>
      <div className='projectCard__title'></div>
      <h3>{project.title}</h3>
      <div className='projectCard__description'>
        <p>{project.description}</p>
      </div>
      <div className='projectCard__buttons'></div>
      <div className='projectCard__tags'>
        {project.tags.map((tag, index) => (
          <span key={index} className='projectCard__tag'>
            {tag}
          </span>
        ))}
      </div>
    </section>
  )
}
