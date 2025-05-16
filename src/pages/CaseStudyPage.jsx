import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { media } from '../media'
import Button from '../components/Button'
import caseStudies from '../data/caseStudies.json'

export const StyledCaseStudy = styled.section`
  display: flex;
  flex-direction: column;

  ${media.tablet} {
  }

  ${media.desktop} {
  }
`

export const CaseStudyPage = ({ title, children }) => {
  const { id } = useParams()
  const study = caseStudies.find((study) => study.id === id)

  if (!study) return <div>Case study not found</div>

  return (
    <StyledCaseStudy>
      <h1>Case Study: {id}</h1>
      <h2>{study.title}</h2>
      <p>{study.description}</p>
      <Button internal href='/'>
        Back
      </Button>
    </StyledCaseStudy>
  )
}
