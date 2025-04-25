import React from 'react'
import articles from './data/articles.json'
import projects from './data/projects.json'
import content from './data/content.json'
import { GlobalStyle } from './components/GlobalStyle'
import { HeroSection } from './sections/HeroSection'
import { SkillSection } from './sections/SkillSection'
import { ProjectSection } from './sections/ProjectSection'
import { TechSection } from './sections/TechSection'
import { ArticleSection } from './sections/ArticleSection'
import { ContactSection } from './sections/ContactSection'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <HeroSection />
      <SkillSection />
      <ProjectSection projects={projects} />
      <TechSection content={content.techStack} />
      <ArticleSection articles={articles.articles} />
      <ContactSection />
    </>
  )
}
