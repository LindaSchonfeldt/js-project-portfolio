import { useState } from 'react'
import { SectionTitle } from '../components/SectionTitle'
import TabButtons from '../components/TabButtons'
import CardGrid from '../components/CardGrid'
import { Carousel } from '../components/Carousel'
import { makeSafeId } from '../utils/stringUtils.js'
import styled from 'styled-components'

export const StyledProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: var(--space-xxl);
  margin-bottom: var(--space-lg);
`

const EmptyStateMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  text-align: center;
  padding: var(--space-md);
  margin-top: var(--space-md);
  background-color: var(--background-light);
  border-radius: var(--border-radius);
  border: 1px dashed var(--border-color);

  p {
    font-size: var(--font-size-md);
    color: var(--text-muted);
    margin-bottom: var(--space-sm);
  }

  /* You could add an icon if desired */
  svg {
    font-size: 2rem;
    color: var(--text-muted);
    margin-bottom: var(--space-sm);
  }

  /* Add a button to encourage user action if appropriate */
  button {
    margin-top: var(--space-sm);
  }
`

export const ProjectSection = ({ projects }) => {
  const [activeTab, setActiveTab] = useState('Code') // Default to first tab

  const safe = makeSafeId(activeTab)

  // Safety check for when projects may not be available yet
  if (!projects) {
    return (
      <StyledProjectSection>
        <SectionTitle title='Projects' />
        <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
        <p>Projects coming soon!</p>
      </StyledProjectSection>
    )
  }

  // Get projects based on active tab
  const projectsToDisplay =
    activeTab === 'Code' ? projects.code || [] : projects.uxui || []

  return (
    <StyledProjectSection>
      <SectionTitle title='Projects' />
      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
      {projectsToDisplay.length > 0 ? (
        <div
          role='tabpanel'
          id={`tabpanel-${safe}`}
          aria-labelledby={`tab-${safe}`}
        >
          <div className='carouselWrapper'>
            <Carousel
              items={projectsToDisplay}
              variant={safe} // <-- pass “code” or “uxui”
            />
          </div>
          <div className='gridWrapper'>
            <CardGrid
              projects={projectsToDisplay}
              variant={safe} // <-- pass “code” or “uxui”
            />
          </div>
        </div>
      ) : projectsToDisplay.length === 0 ? (
        <EmptyStateMessage>
          <p>No projects available for {activeTab}.</p>
        </EmptyStateMessage>
      ) : (
        <p>Something went wrong.</p>
      )}
    </StyledProjectSection>
  )
}
