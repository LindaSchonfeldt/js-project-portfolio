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
        <p>No projects available for {activeTab}.</p>
      ) : (
        <p>Something went wrong.</p>
      )}
    </StyledProjectSection>
  )
}
