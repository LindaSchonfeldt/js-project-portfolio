import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { media } from '../media'
import Button from '../components/Button'
import caseStudies from '../data/caseStudies.json'
import { NavigationBar } from '../components/NavigationBar'

export const StyledCaseStudy = styled.section`
  display: flex;
  flex-direction: column;

  ${media.tablet} {
  }

  ${media.desktop} {
  }
`

export const CaseStudyPage = () => {
  const { id } = useParams()
  const study = caseStudies.caseStudies?.find(
    (study) => study.id === id || study.caseStudyId === id
  )

  console.log('Case Study:', study)
  console.log('Case Study ID:', id)

  if (!study) {
    return (
      <div className='error-container'>
        <h1>Case Study Not Found</h1>
        <p>Sorry, we couldn't find that case study.</p>
        <Button text='Back to Home' internal href='/' />
      </div>
    )
  }

  return (
    <StyledCaseStudy>
      <div className='topNav'>
        <Button internal href='/'>
          Back
        </Button>
      </div>

      <section id='overview'>
        <h1>Case Study: {id}</h1>
        <h2>{study.title}</h2>
        <p>{study.description}</p>
      </section>

      <NavigationBar
        links={[
          { href: '#overview', text: '01. Overview' },
          { href: '#process', text: '02. Process' },
          { href: '#results', text: '03. Results' },
          { href: '#takeaways', text: '04. Takeaways' }
        ]}
      />

      <section id='process'>
        <h2>Process</h2>
        <p>{study.process}</p>
      </section>

      <section id='results'>
        <h2>Results</h2>
        <p>{study.results}</p>
      </section>

      <section id='takeaways'>
        <h2>Takeaways</h2>
        <p>{study.takeaways}</p>
      </section>
    </StyledCaseStudy>
  )
}

/* // In each section component
export const HeroSection = () => {
  return (
    <StyledHeroSection id="home">
    </StyledHeroSection>
  )
} */
