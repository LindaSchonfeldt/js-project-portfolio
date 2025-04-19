import { useEffect } from 'react'
import { useState } from 'react'
import { SectionTitle } from './SectionTitle'
import TabButtons from './TabButtons'
import CardGrid from './CardGrid'
import { Carousel } from './Carousel'

export const ProjectSection = ({ projects }) => {
  const [activeTab, setActiveTab] = useState('Code') // Default to first tab
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // update isMobile on resize
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Safety check for when projects may not be available yet
  if (!projects) {
    return (
      <section className='projectContainer'>
        <SectionTitle title='Projects' />
        <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
        <p>Projects coming soon!</p>
      </section>
    )
  }

  // Get projects based on active tab
  const projectsToDisplay =
    activeTab === 'Code' ? projects.code || [] : projects.uxui || []

  console.log('About to render cards with:', projectsToDisplay)

  return (
    <section className='projectContainer'>
      <SectionTitle title='Projects' />
      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />

      {projectsToDisplay.length > 0 ? (
        isMobile ? (
          <Carousel
            items={projectsToDisplay}
            variant={activeTab} // <-- pass “Code” or “UX/UI”
          />
        ) : (
          <CardGrid
            projects={projectsToDisplay}
            variant={activeTab} // <-- pass “Code” or “UX/UI”
          />
        )
      ) : (
        <p>No projects available for {activeTab}.</p>
      )}
    </section>
  )
}
