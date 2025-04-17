// Can be used to display Code or UX/UI projects in a grid or carousel format
// Can display projects in a grid or carousel format

import TabButtons from './TabButtons'
import { CodeProjects } from './CodeProjects'
import { UXUIProjects } from './UXUIProjects'
import { useState } from 'react'
import CardGrid from './CardGrid'

export const ProjectSection = ({ projects }) => {
  const [activeTab, setActiveTab] = useState('Code') // Default to first tab
  console.log('ProjectSection projects:', projects) // Debug what you're importing
  // Safety check for when projects may not be available yet
  if (
    !projects ||
    !Array.isArray(projects.projects) ||
    projects.projects.length === 0
  ) {
    console.log('No projects data available:', projects)
    return (
      <section className='projectContainer'>
        <h2 className='sectionTitle'>Projects</h2>
        <TabButtons />
        <p>Projects coming soon!</p>
      </section>
    )
  }

  return (
    <section className='projectContainer'>
      <h2 className='sectionTitle'>Projects</h2>
      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content changes based on active tab */}
      {activeTab === 'Code' && <CodeProjects />}
      {activeTab === 'UX/UI' && <UXUIProjects />}
      <CardGrid projects={projects.projects} />
      {/* Display Code or UX/UI projects in a grid- or carousel format depending on screen-size */}
    </section>
  )
}
