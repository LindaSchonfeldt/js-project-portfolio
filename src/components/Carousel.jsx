import React, { useState } from 'react'
import { Card } from './Card'
import './Carousel.css'

export const Carousel = ({ items, variant }) => {
  const [index, setIndex] = useState(0)
  const length = Array.isArray(items) ? items.length : 0

  // Determine if these are “article” cards by checking for excerpt
  const isArticle = items.length > 0 && items[0].hasOwnProperty('excerpt')

  const handlePrevious = () => {
    setIndex((i) => (i === 0 ? length - 1 : i - 1))
  }

  const handleNext = () => {
    setIndex((i) => (i === length - 1 ? 0 : i + 1))
  }

  if (length === 0) {
    return <p>No items to display</p>
  }

  return (
    <div className='carousel'>
      <button onClick={handlePrevious}>‹</button>
      <div className='carouselViewport'>
        <div
          className='carouselTrack'
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => {
            // Render an “article” style card
            if (isArticle) {
              return (
                <div key={item.id || i} className='carouselItem'>
                  <Card
                    image={item.image}
                    title={item.title}
                    subtitle={item.publishedDate}
                    content={item.excerpt}
                    actions={[
                      {
                        text: 'Read Article',
                        href: item.link,
                        variant: 'secondary'
                      }
                    ]}
                  />
                </div>
              )
            }
            // Otherwise render a “project” card
            return (
              <div key={item.id || i} className='carouselItem'>
                <Card
                  variant={variant}
                  image={item.image}
                  title={item.title}
                  content={item.description}
                  tags={item.tags}
                  actions={[
                    {
                      text: 'Live Demo',
                      href: item.link,
                      variant: 'primary'
                    },
                    {
                      text: 'View Code',
                      href: item.github,
                      variant: 'secondary'
                    }
                  ]}
                />
              </div>
            )
          })}
        </div>
      </div>
      <button onClick={handleNext}>›</button>
      <p className='carouselCounter'>
        {index + 1} / {length}
      </p>
    </div>
  )
}
