import React, { useState } from 'react'
import { Card } from './Card'
import styled from 'styled-components'
import { media } from './media'

const StyledCarousel = styled.div`
  position: relative;
  overflow: hidden;

  .carouselViewport {
    width: 100%; /* never grow wider than the carousel */
    overflow-x: auto; /* allow horizontal scroll */
    -webkit-overflow-scrolling: touch; /* momentum scroll on iOS */
    scroll-snap-type: x mandatory; /* auto‑snap to items */
    overscroll-behavior-x: contain; /* prevent scroll chaining */
    scrollbar-width: none; /* hide scrollbar in Firefox */
    -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
  }

  .carouselTrack {
    display: flex;
    gap: 16px; /* space between items */
  }

  .carouselItem {
    flex: 0 0 auto; /* don't stretch */
    width: 280px; /* preset card width */
    scroll-snap-align: start; /* snap at start of each item */
  }

  /* optional: make the card itself fill its container */
  .carouselItem > .card {
    width: 100%;
  }

  /* Hide the prev/next buttons and counter */
  & > button {
    display: none;
  }
  & > .carouselCounter {
    display: none;
  }

  @media ${media.tablet} {
    .carouselItem {
      flex: 0 0 calc(33.333% - 10.666px); /* (100%/3) minus half the gap */
    }
  }

  @media ${media.desktop} {
    display: none;
  }

  @media ${media.largeDesktop} {
    display: none;
  }
`

export const Carousel = ({ items, variant }) => {
  const [index, setIndex] = useState(0)
  const length = items.length
  if (!length) return <p>No items to display</p>

  const handlePrevious = () => {
    setIndex((i) => (i === 0 ? length - 1 : i - 1))
  }

  const handleNext = () => {
    setIndex((i) => (i === length - 1 ? 0 : i + 1))
  }

  return (
    <StyledCarousel>
      <button onClick={() => setIndex((i) => (i ? i - 1 : length - 1))}>
        ‹
      </button>
      <div className='carouselViewport'>
        <div
          className='carouselTrack'
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div key={item.id || i} className='carouselItem'>
              <Card variant={variant} {...item} />
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => setIndex((i) => (i === length - 1 ? 0 : i + 1))}>
        ›
      </button>
      <p className='carouselCounter'>
        {index + 1} / {length}
      </p>
    </StyledCarousel>
  )
}
