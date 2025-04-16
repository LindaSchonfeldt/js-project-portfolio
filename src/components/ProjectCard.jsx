import React from 'react'
import projects from '../data/projects.json'
import { Tag } from './Tag'

// Card
// image
// Title
// Description
// Buttons
// Link to live demo
// Link to GitHub repo
// Tags (HTML, CSS, JS, React, etc.)

export const Card = ({ project }) => {
  return (
    <section className='cardSection'>
      <div className='cardImage'>
        <img src={project.image} alt={project.title} />
      </div>
      <div className='card__title'></div>
      <h3>{project.title}</h3>
      <div className='projectCard__description'>
        <p>{project.description}</p>
      </div>
      <div className='cardButtons'></div>
      <div className='cardTags'>
        {project.tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
    </section>
  )
}
