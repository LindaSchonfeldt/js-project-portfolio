import { Card } from './Card'
import styled from 'styled-components'
import { media } from '../media.js'

const StyledCarousel = styled.div`
  position: relative;
  overflow: hidden;

  .carouselViewport {
    width: 100%; /* Never grow wider than the carousel */
    overflow-x: auto; /* Allow horizontal scroll */
    -webkit-overflow-scrolling: touch; /* Momentum scroll on iOS */
    scroll-snap-type: x mandatory; /* Auto‑snap to items */
    padding: 0 var(--space-sm); /* Add side padding */

    overscroll-behavior-x: contain; /* Prevent scroll chaining */
    scrollbar-width: none; /* Hide scrollbar in Firefox */
    -ms-overflow-style: none; /* Hide scrollbar in IE and Edge */
  }

  .carouselTrack {
    display: flex;
    gap: var(--space-sm);
    width: max-content; /* expand to fit all items */
  }

  .carouselItem {
    flex: 0 0 auto; /* don't stretch */
    scroll-snap-align: start; /* snap at start of each item */
  }

  .carouselItem > .card {
    width: 100%;
    margin: var(--space-xs);
  }

  @media ${media.tablet} {
    .carouselTrack {
      gap: var(--space-md);
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
  const length = items.length
  if (!length) return <p>No items to display</p>

  return (
    <StyledCarousel>
      <div className='carouselViewport'>
        <div className='carouselTrack'>
          {items.map((item, i) => (
            <div key={item.id || i} className='carouselItem'>
              <Card variant={variant} {...item} />
            </div>
          ))}
        </div>
      </div>
    </StyledCarousel>
  )
}
