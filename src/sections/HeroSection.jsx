import React from 'react'
import { Logo } from '../components/Logo.jsx'
import styled from 'styled-components'
import { media } from '../media.js'
import portrait from '../assets/linda.svg'
import { SocialLinks } from '../components/SocialLinks.jsx'

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);

  .heroContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .heroLogo {
    margin-bottom: var(--space-xxs);
  }

  .heroTitle {
    font-size: 3.8rem;
    line-height: 0.9;
    margin: var(--space-sm) var(--space-xs) var(--space-sm) 0;
    color: var(--primary-color);
  }

  .heroSubtitle {
    font-size: 1.2rem;
    margin: 0;
  }

  .heroText {
    margin-top: var(--space-xs);
    width: 100%;
  }

  .heroImage {
    width: 20rem;
  }

  @media ${media.tablet} {
    .heroTitle {
      font-size: 5rem;
    }

    .heroImage {
      width: 30rem;
    }
  }

  @media ${media.desktop} {
    flex-direction: row;
    align-items: flex-start; /* align items to top */

    .heroContent {
      width: 50vw;
      padding: var(--space-sm);
    }

    .heroImage {
      width: 24rem;
    }

    .heroTitle {
      font-size: 5rem;
    }

    .socialLinks {
      margin-top: var(--space-lg);
    }
  }

  @media ${media.largeDesktop} {
    .heroContent {
      width: 30vw;
      padding: var(--space-sm);
      margin-right: var(--space-lg);
    }

    .heroTitle {
      font-size: 6rem;
    }
    .heroImage {
      width: 30rem;
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
            What drives me is the desire to bring clarity to complexity. I love
            organizing — whether it's structuring information for better
            usability, designing intuitive user flows, mapping out a product
            roadmap, or learning to write cleaner, more maintainable code.
            Turning chaos into something clear, purposeful, and human-centered
            is where I thrive.
          </p>
          <p>
            I'm especially drawn to mission-driven teams that lead with empathy,
            value curiosity, and care deeply about building thoughtful,
            empowering products.
          </p>
        </div>
        <div className='socialLinks' aria-hidden='true'>
          <SocialLinks />
        </div>
      </div>
      <img src={portrait} className='heroImage' alt='' />
    </StyledHeroSection>
  )
}
