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
    padding: 0 16px; /* add side padding */

    overscroll-behavior-x: contain; /* prevent scroll chaining */
    scrollbar-width: none; /* hide scrollbar in Firefox */
    -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
  }

  .carouselTrack {
    display: flex;
    gap: 16px;
    width: max-content; /* expand to fit all items */
  }

  .carouselItem {
    flex: 0 0 auto; /* don't stretch */
    scroll-snap-align: start; /* snap at start of each item */
  }

  .carouselItem > .card {
    width: 100%;
    margin: 0.5rem;
  }

  @media ${media.tablet} {
    .carouselTrack {
      gap: 24px;
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
