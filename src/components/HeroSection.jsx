import React from 'react'
import { Logo } from './Logo'
import styled from 'styled-components'
import { media } from './media.js'
import portrait from '../assets/linda.svg'

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .heroContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .heroLogo {
    margin-bottom: 0.2rem;
  }

  .heroTitle {
    font-size: 3rem;
    line-height: 0.9;
    margin: 1rem 0 0.5rem;
    color: var(--primary-color);
  }

  .heroSubtitle {
    font-size: 1.2rem;
    margin: 0;
  }

  .heroText {
    width: 100%;
  }

  .heroImage {
    width: 80%;
    height: auto;
  }

  @media ${media.tablet} {
    .heroTitle {
      font-size: 5rem;
    }
  }

  @media ${media.desktop} {
    flex-direction: row;
    align-items: flex-start; /* align items to top */

    .heroContent {
      width: 50%;
      padding: 2rem;
    }

    .heroImage {
      width: 50%;
    }

    .heroTitle {
      font-size: 5rem;
    }
  }

  @media ${media.largeDesktop} {
    .heroTitle {
      font-size: 8rem;
    }
  }
`

export const HeroSection = () => {
  return (
    <StyledHeroSection>
      <div className='heroContent'>
        <Logo size='small' className='heroLogo' />
        <h2 className='heroSubtitle'>I am Linda Schönfeldt</h2>
        <h1 className='heroTitle'>Web Developer with UX Skills</h1>
        <div className='heroText'>
          <p>
            With a background in service and interaction design, I'm passionate
            about building technology that truly understands user needs and
            creates meaningful impact.{' '}
          </p>
          <p>
            What drives me is the desire to bring clarity to complexity. I{' '}
            <b>love </b> organizing — whether it's structuring information for
            better usability, designing intuitive user flows, mapping out a
            product roadmap, or learning to write cleaner, more maintainable
            code. Turning chaos into something clear, purposeful, and
            human-centered is where I thrive.
          </p>
          <p>
            I'm especially drawn to mission-driven teams that lead with empathy,
            value curiosity, and care deeply about building thoughtful,
            empowering products.
          </p>
        </div>
      </div>
      <img src={portrait} className='heroImage' alt='' />
    </StyledHeroSection>
  )
}
