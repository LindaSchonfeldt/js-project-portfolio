import React from 'react'
import { Logo } from './Logo'
import './HeroSection.css'
import styled from 'styled-components'

const HeroSectionStyled = styled.section`
  .heroLogo {
    height: 1.7rem;
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
`

export const HeroSection = () => {
  return (
    <HeroSectionStyled className='heroSection'>
      <div className='heroContent'>
        <Logo className='heroLogo' />
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
    </HeroSectionStyled>
  )
}
