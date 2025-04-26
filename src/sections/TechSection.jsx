import React from 'react'
import { SectionTitle } from '../components/SectionTitle'
import styled from 'styled-components'
import { media } from '../components/media'

const StyledTechSection = styled.section`
  width: 100vw; /* Full width of the viewport */
  margin-left: calc(-50vw + 50%); /* Offset to ignore body margins */
  margin-right: calc(-50vw + 50%); /* Offset to ignore body margins */
  background-color: var(--primary-color);
  color: var(--background-color);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 0;
  margin-top: 2rem;

  .contentWrapper {
    width: 100%;
    max-width: 1200px;
    padding: 0 2rem; /* Add padding to align with body margins */
    margin: 0 auto; /* Center the content */
  }

  @media ${media.tablet} {
    .contentWrapper {
      padding: 3rem 4rem; /* Increase padding for larger screens */
    }
  }

  @media ${media.desktop} {
    .contentWrapper {
      padding: 3rem 10rem; /* Further increase padding for desktop */
    }
  }

  .techList {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem; /* Add spacing between items */
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.5;
  }
`

export const TechSection = ({ content }) => {
  if (!Array.isArray(content) || content.length === 0) {
    return (
      <StyledTechSection>
        <div className='contentWrapper'>
          <SectionTitle title='Tech' color='var(--background-color)' />
          <p>No technologies to display.</p>
        </div>
      </StyledTechSection>
    )
  }

  const names = content.map((tech) => tech.name).join(', ')

  return (
    <StyledTechSection>
      <div className='contentWrapper'>
        <SectionTitle title='Tech' color='var(--background-color)' />
        <p className='techList'>{names}</p>
      </div>
    </StyledTechSection>
  )
}
