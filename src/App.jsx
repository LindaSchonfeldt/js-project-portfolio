import React from 'react'
import { HeroSection } from './components/HeroSection'
import { SocialLinks } from './components/SocialLinks'
import { SkillSection } from './components/SkillSection'
import { ProjectSection } from './components/ProjectSection'

export const App = () => {
  return (
    <>
      <HeroSection />
      <SocialLinks />
      <SkillSection />
      <ProjectSection />
    </>
  )
}
