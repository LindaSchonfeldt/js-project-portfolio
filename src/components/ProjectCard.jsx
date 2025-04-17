import React from 'react'
import { TagList } from './TagList'

export const ProjectCard = ({ project }) => {
  return (
    <section className='projectCard'>
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
        <TagList tags={project.tags} />
      </div>
    </section>
  )
}
