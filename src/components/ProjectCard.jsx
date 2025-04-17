import React from 'react'
import { Tag } from './Tag'

export const ProjectCard = ({ project }) => {
  return (
    <section className='projectCardSection'>
      {/*   <div className='projectCardImage'>
        <img src={project.image} alt={project.title} />
      </div> */}
      <div className='projectCard__title'>
        <h3>{project.title}</h3>
      </div>
      <div className='projectCard__description'>
        <p>{project.description}</p>
      </div>
      <div className='projectCardButtons'></div>
      <div className='cardTags'>
        {Array.isArray(project.tags) &&
          project.tags.map((tag, index) => <Tag key={index} tag={tag} />)}
      </div>
    </section>
  )
}
