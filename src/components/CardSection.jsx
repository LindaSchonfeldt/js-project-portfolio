import { SectionTitle } from './SectionTitle'
import { ProjectCard } from './ProjectCard'

export const CardSection = () => {
  return (
    <section className='cardSectionContainer'>
      <div className='cardSection__title'>
        <SectionTitle title='' subtitle='' />
      </div>
      <div className='cardSection__content'>
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
