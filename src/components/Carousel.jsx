import React, { useState } from 'react'
import { Card } from './Card' // Importing the ProjectCard component

export const Carousel = (items) => {
  const [index, setIndex] = useState(0)
  const length = items.length

  const handlePrevious = () => {
    const newIndex = index - 1
    setIndex(newIndex < 0 ? length - 1 : newIndex)
  }

  const handleNext = () => {
    const newIndex = index + 1
    setIndex(newIndex >= length ? 0 : newIndex)
  }

  if (!Array.isArray(items) || length === 0) {
    return <p>No items to display</p>
  }

  console.log('About to render Carousel with:', projectsToDisplay)

  return (
    <div className='carousel'>
      <button onClick={handlePrevious}>Previous</button>
      <div className='carouselContent'>
        {items.map((project, i) => (
          <div
            key={project.id || i}
            className={`carouselItem ${i === index ? 'active' : ''}`}
          >
            <Card project={project} />
          </div>
        ))}
      </div>
      <button onClick={handleNext}>Next</button>
      <p>
        {index + 1} / {length}
      </p>
    </div>
  )
}
