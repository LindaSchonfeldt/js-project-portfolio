import { useEffect } from 'react'
import { useState } from 'react'
import { SectionTitle } from './SectionTitle'
import TabButtons from './TabButtons'
import CardGrid from './CardGrid'
import { Carousel } from './Carousel'
import styled from 'styled-components'
import { media } from './media'

const ProjectSectionStyled = styled.section`
  /* by default and up through tablet: show carousel, hide grid */
  .carouselWrapper {
    display: block;
  }
  .gridWrapper {
    display: none;
  }

  /* at desktop & up: hide carousel, show grid */
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

  // Safety check for when projects may not be available yet
  if (!projects) {
    return (
      <ProjectSectionStyled className='projectContainer'>
        <SectionTitle title='Projects' />
        <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
        <p>Projects coming soon!</p>
      </ProjectSectionStyled>
    )
  }

  // Get projects based on active tab
  const projectsToDisplay =
    activeTab === 'Code' ? projects.code || [] : projects.uxui || []

  console.log('About to render cards with:', projectsToDisplay)

  return (
    <ProjectSectionStyled className='projectContainer'>
      <SectionTitle title='Projects' />
      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
      {projectsToDisplay.length > 0 ? (
        <>
          <div className='carouselWrapper'>
            <Carousel
              items={projectsToDisplay}
              variant={activeTab} // <-- pass “Code” or “UX/UI”
            />
          </div>
          <div className='gridWrapper'>
            <CardGrid
              projects={projectsToDisplay}
              variant={activeTab} // <-- pass “Code” or “UX/UI”
            />
          </div>
        </>
      ) : projectsToDisplay.length === 0 ? (
        <p>No projects available for {activeTab}.</p>
      ) : (
        <p>Something went wrong.</p>
      )}
    </ProjectSectionStyled>
  )
}
