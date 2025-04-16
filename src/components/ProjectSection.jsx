import { SectionTitle } from './SectionTitle'
import { ProjectCard } from './ProjectCard'

export const ProjectSection = () => {
  return (
    <section className='projectSectionContainer'>
      <div className='projectSection__title'>
        <SectionTitle title='Projects' subtitle='' />
      </div>
      <div className='projectSection__content'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}

// Toggle between Code and UX/UI
// Card
// Image
// Title
// Description
// Buttons
// Link to live demo
// Link to GitHub repo
// Tags (HTML, CSS, JS, React, etc.)
