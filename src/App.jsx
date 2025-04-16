import React from 'react'
import projects from './data/projects.json' // Importing projects data from JSON file
import { HeroSection } from './components/HeroSection'
import { SocialLinks } from './components/SocialLinks'
import { SkillSection } from './components/SkillSection'
import { CardSection } from './components/CardSection'

export const App = () => {
  return (
    <>
      <HeroSection />
      <SocialLinks />
      <SkillSection />
    </>
  )
}
