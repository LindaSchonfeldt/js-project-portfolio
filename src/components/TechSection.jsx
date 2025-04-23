import React from 'react'
import { SectionTitle } from './SectionTitle'
import styled from 'styled-components'

const StyledTechSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .techList {
    display: flex;
    flex-direction: column;
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
        <SectionTitle title='Tech' />
        <p>No technologies to display.</p>
      </StyledTechSection>
    )
  }

  const names = content.map((tech) => tech.name).join(', ')

  return (
    <StyledTechSection>
      <SectionTitle title='Tech' />
      <p className='techList'>{names}</p>
    </StyledTechSection>
  )
}
