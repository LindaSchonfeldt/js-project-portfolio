import { HeroSection } from '../sections/HeroSection'
import { SkillSection } from '../sections/SkillSection'
import { ProjectSection } from '../sections/ProjectSection'
import { TechSection } from '../sections/TechSection'
import { ContactSection } from '../sections/ContactSection'
import projects from '../data/projects.json'
import content from '../data/content.json'

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <SkillSection />
        <ProjectSection projects={projects} />
        <TechSection content={content.techStack} />
        <ContactSection />
      </main>
    </>
  )
}
