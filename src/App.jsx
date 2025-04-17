import React from 'react'
import projects from './data/projects.json' // Importing projects data from JSON file
import content from './data/content.json' // Importing content data from JSON file
import { HeroSection } from './components/HeroSection'
import { SocialLinks } from './components/SocialLinks'
import { SkillSection } from './components/SkillSection'
import { ProjectSection } from './components/ProjectSection'
import { TechSection } from './components/TechSection'
import { ContactSection } from './components/ContactSection'

export const App = () => {
  // Debug what you're importing
  console.log('App level projects:', projects)

  return (
    <>
      <HeroSection />
      <SocialLinks />
      <SkillSection />
      <ProjectSection projects={projects} />
      <TechSection content={content.techStack} />
      <ContactSection />
    </>
  )
}
