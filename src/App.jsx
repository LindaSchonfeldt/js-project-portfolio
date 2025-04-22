import React from 'react'
import articles from './data/articles.json'
import projects from './data/projects.json'
import content from './data/content.json'
import { GlobalStyle } from './components/GlobalStyle'
import { HeroSection } from './components/HeroSection'
import { SocialLinks } from './components/SocialLinks'
import { SkillSection } from './components/SkillSection'
import { ProjectSection } from './components/ProjectSection'
import { TechSection } from './components/TechSection'
import { ArticleSection } from './components/ArticleSection'
import { ContactSection } from './components/ContactSection'

export const App = () => {
  // Debug what you're importing
  console.log('App level projects:', projects)

  return (
    <>
      <GlobalStyle />
      <HeroSection />
      <SocialLinks />
      <SkillSection />
      <ProjectSection projects={projects} />
      <TechSection content={content.techStack} />
      <ArticleSection articles={articles.articles} />
      <ContactSection />
    </>
  )
}
