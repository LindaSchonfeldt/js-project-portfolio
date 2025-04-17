import { SectionTitle } from './SectionTitle'
import TabButtons from './TabButtons'
import { useState } from 'react'
import CardGrid from './CardGrid'

export const ProjectSection = ({ projects }) => {
  // Safety check for when projects may not be available yet
  if (!projects) {
    console.log('No projects data available:', projects)
    return (
      <section className='projectContainer'>
        <SectionTitle title='Projects' />
        <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
        <p>Projects coming soon!</p>
      </section>
    )
  }

  const [activeTab, setActiveTab] = useState('Code') // Default to first tab

  // Get projects based on active tab
  const projectsToDisplay =
    activeTab === 'Code' ? projects.code || [] : projects.uxui || []

  console.log('About to render CardGrid with:', projectsToDisplay)

  return (
    <section className='projectContainer'>
      <SectionTitle title='Projects' />
      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />

      {projectsToDisplay.length > 0 ? (
        <CardGrid projects={projectsToDisplay} />
      ) : (
        <p>No projects available for {activeTab}.</p>
      )}
    </section>
  )
}
