import React from 'react'
import { Logo } from './Logo'
import styled from 'styled-components'
import { media } from './media.js'

const StyledHeroSection = styled.section`
  .heroLogo {
    margin-bottom: 0.2rem;
  }

  .heroSection {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .heroTitle {
    font-size: 3rem;
    line-height: 0.9;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
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
    width: 100%;
    height: auto;
  }

  @media ${media.mobile} {
    .heroTitle {
      font-size: 3.5rem;
    }

    .heroSubtitle {
      font-size: 1.3rem;
    }

    .heroImage {
      width: 80%;
    }
  }

  @media ${media.tablet} {
    .heroSection {
      flex-direction: row;
      align-items: flex-start;
    }

    .heroContent {
      width: 100%;
    }

    .heroTitle {
      width: 100%;
      font-size: 5rem;
    }

    .heroText {
      width: 80%;
    }

    .heroImage {
      width: 80%;
    }
  }

  @media ${media.desktop} {
    .heroContent {
      width: 100%;
    }

    .heroTitle {
      font-size: 5rem;
    }

    .heroText {
      width: 80%;
    }

    .heroImage {
      width: 80%;
    }
  }

  @media ${media.largeDesktop} {
    .heroContent {
      width: 50%;
    }

    .heroTitle {
      font-size: 8rem;
    }

    .heroText {
      width: 80%;
    }

    .heroImage {
      width: 80%;
    }
  }
`

export const HeroSection = () => {
  return (
    <StyledHeroSection className='pageSection'>
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
      <img src='/assets/linda.svg' className='heroImage' alt='' />
    </StyledHeroSection>
  )
}
