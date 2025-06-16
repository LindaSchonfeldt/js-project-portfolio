import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

import Button from '../components/Button'
import { NavigationBar } from '../components/NavigationBar'
import caseStudies from '../data/caseStudies.json'
import siteConfig from '../data/siteConfig.json'
import { media } from '../media'

export const StyledCaseStudy = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;

  h1 {
    font-size: 2.5rem;
    margin-top: var(--space-md);
    color: var(--primary-color);
  }

  h2 {
    font-size: 1.5rem;
  }

  .hero {
    margin-bottom: var(--space-lg);
  }

  .top-nav {
    margin: var(--space-md) 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .section-heading {
    margin-top: var(--space-xl);
    margin-bottom: var(--space-md);
    color: var(--primary-color);
  }

  .project-meta {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-md);
    margin: var(--space-lg) 0;

    @media ${media.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${media.desktop} {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .meta-item {
    h4 {
      color: var(--text-muted);
      margin-bottom: var(--space-xs);
    }
  }

  .key-points {
    margin: var(--space-lg) 0;

    ul {
      list-style-type: disc;
      padding-left: 1.5rem;
    }
  }

  .constraints {
    background-color: var(--background-light);
    padding: var(--space-md);
    border-radius: var(--border-radius);
    margin: var(--space-md) 0;
  }
`

export const CaseStudyPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const study = caseStudies.caseStudies?.find(
    (study) => study.id === Number(id) || study.caseStudyId === Number(id)
  )

  // Only scroll to top when the ID changes (new case study), not on every render
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id]) // Add id as dependency

  const handleGoBack = () => {
    console.log('handleGoBack called in CaseStudyPage') // Debug log
    navigate(-1) // Goes back to previous page in history
  }

  if (!study) {
    return (
      <div className='error-container'>
        <h1>Case Study Not Found</h1>
        <p>Sorry, we couldn't find that case study.</p>
        <Button text='Back to Home' internal href='/' />
      </div>
    )
  }

  const isUnderConstruction = siteConfig.underConstruction.caseStudies.includes(
    study.id
  )

  return (
    <StyledCaseStudy>
      <NavigationBar
        showBackButton={true}
        onBackClick={handleGoBack}
        links={[
          { href: '#overview', text: '01. Overview' },
          { href: '#challenge', text: '02. Challenge' },
          { href: '#process', text: '03. Process' },
          { href: '#results', text: '04. Results' },
          { href: '#learnings', text: '05. Learnings' }
        ]}
      />

      <div className='hero'>
        <h1>{study.title}</h1>
        <h2>{study.subtitle}</h2>
        {study.heroImage && (
          <img src={study.heroImage} alt={`${study.title} hero image`} />
        )}
      </div>

      <div className='project-meta'>
        <div className='meta-item'>
          <h4>Role</h4>
          <p>{study.role}</p>
        </div>
        <div className='meta-item'>
          <h4>Timeline</h4>
          <p>{study.timeline}</p>
        </div>
        <div className='meta-item'>
          <h4>Team</h4>
          <ul>
            {study.team.map((member, i) => (
              <li key={i}>{member}</li>
            ))}
          </ul>
        </div>
      </div>

      <section id='overview'>
        <h2 className='section-heading'>01. Overview</h2>
        <p>{study.overview.summary}</p>

        <div className='key-points'>
          <h3>Key Contributions</h3>
          <ul>
            {study.overview.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id='challenge'>
        <h2 className='section-heading'>02. Challenge</h2>
        <p>{study.challenge.problem}</p>

        <div className='goals'>
          <h3>Goals</h3>
          <ul>
            {study.challenge.goals?.map((constraint, index) => (
              <li key={index}>{constraint}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id='process'>
        <h2 className='section-heading'>03. Process</h2>

        <h3>Research</h3>
        <p>{study.process?.research?.description}</p>
        {study.process?.research?.methods && (
          <div>
            <h4>Methods</h4>
            <ul>
              {study.process.research.methods.map((method, index) => (
                <li key={index}>{method}</li>
              ))}
            </ul>
          </div>
        )}
        {study.process?.research?.insights && (
          <div>
            <h4>Key Insights</h4>
            <ul>
              {study.process.research.insights.map((insight, index) => (
                <li key={index}>{insight}</li>
              ))}
            </ul>
          </div>
        )}

        <h3>Design</h3>
        <p>{study.process?.design?.description}</p>
        {study.process?.design?.methods && (
          <div>
            <h4>Methods</h4>
            <ul>
              {study.process.design.methods.map((method, index) => (
                <li key={index}>{method}</li>
              ))}
            </ul>
          </div>
        )}

        <h3>Implementation</h3>
        <p>{study.process?.implementation?.description}</p>
        <p>{study.process?.implementation?.collaboration}</p>
      </section>

      <section id='results'>
        <h2 className='section-heading'>04. Results</h2>
        {study.results?.outcomes && (
          <div>
            <h3>Outcomes</h3>
            <ul>
              {study.results.outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </div>
        )}
        <p>{study.results?.impact}</p>

        {study.results?.testimonials &&
          study.results.testimonials.length > 0 && (
            <div className='testimonials'>
              <h3>Testimonials</h3>
              {study.results.testimonials.map((testimonial, index) => (
                <blockquote key={index}>
                  <p>"{testimonial.quote}"</p>
                  <footer>— {testimonial.author}</footer>
                </blockquote>
              ))}
            </div>
          )}
      </section>

      <section id='learnings'>
        <h2 className='section-heading'>05. Learnings</h2>
        <p>{study.learnings?.reflections}</p>
        <p>{study.learnings?.challenges}</p>

        {study.learnings?.takeaways && (
          <div>
            <h3>Key Takeaways</h3>
            <ul>
              {study.learnings.takeaways.map((takeaway, index) => (
                <li key={index}>{takeaway}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </StyledCaseStudy>
  )
}
