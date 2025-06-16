import { useState } from 'react'
import { SectionTitle } from '../components/SectionTitle'
import TabButtons from '../components/TabButtons'
import CardGrid from '../components/CardGrid'
import { Carousel } from '../components/Carousel'
import { makeSafeId } from '../utils/stringUtils.js'
import styled from 'styled-components'
import { useCaseStudyStore } from '../stores/useCaseStudyStore'
import projectData from '../data/projects.json'

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

  svg {
    font-size: 2rem;
    color: var(--text-muted);
    margin-bottom: var(--space-sm);
  }

  button {
    margin-top: var(--space-sm);
  }
`

export const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState('Code')
  const safe = makeSafeId(activeTab)

  // Get data from different sources
  const codeProjects = projectData.code || []
  const uxuiProjects = useCaseStudyStore((state) => state.caseStudies) || []

  // Get projects based on active tab
  const projectsToDisplay = activeTab === 'Code' ? codeProjects : uxuiProjects

  // Add debug logs
  console.log('ActiveTab:', activeTab)
  console.log('ProjectsToDisplay:', projectsToDisplay)
  console.log('Variant:', safe.toLowerCase())

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
            <Carousel items={projectsToDisplay} variant={safe.toLowerCase()} />
          </div>
          <div className='gridWrapper'>
            <CardGrid
              projects={projectsToDisplay}
              variant={safe.toLowerCase()}
            />
          </div>
        </div>
      ) : (
        <EmptyStateMessage>
          <p>No projects available for {activeTab}.</p>
        </EmptyStateMessage>
      )}
    </StyledProjectSection>
  )
}
