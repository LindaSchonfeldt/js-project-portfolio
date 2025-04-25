import { useState } from 'react'
import { SectionTitle } from '../components/SectionTitle'
import TabButtons from '../components/TabButtons'
import CardGrid from '../components/CardGrid'
import { Carousel } from '../components/Carousel'
import styled from 'styled-components'
import { media } from '../components/media'

const StyledProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  /* by default and up through tablet: show carousel, hide grid */
  .carouselWrapper {
    display: block;
  }
  .gridWrapper {
    display: none;
  }

  @media ${media.desktop} {
    .carouselWrapper {
      display: none;
    }
    .gridWrapper {
      display: flex;
    }
  }
`

export const ProjectSection = ({ projects }) => {
  const [activeTab, setActiveTab] = useState('Code') // Default to first tab

  // normalize the activeTab into the variant key your Card expects
  const variantKey = activeTab.toLowerCase().replace(/\W/g, '')

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
        <>
          <div className='carouselWrapper'>
            <Carousel
              items={projectsToDisplay}
              variant={variantKey} // <-- pass “code” or “uxui”
            />
          </div>
          <div className='gridWrapper'>
            <CardGrid
              projects={projectsToDisplay}
              variant={variantKey} // <-- pass “code” or “uxui”
            />
          </div>
        </>
      ) : projectsToDisplay.length === 0 ? (
        <p>No projects available for {activeTab}.</p>
      ) : (
        <p>Something went wrong.</p>
      )}
    </StyledProjectSection>
  )
}
