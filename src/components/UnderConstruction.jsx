import styled from 'styled-components'
import { SectionTitle } from '../components/SectionTitle'

const StyledUnderConstruction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  text-align: center;
  padding: var(--space-md);
  background-color: var(--background-light);
  border-radius: var(--border-radius);
  border: 1px dashed var(--border-color);

  .constructionText {
    font-size: var(--font-size-md);
    color: var(--text-muted);
    margin-top: var(--space-sm);
  }
`

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-md);

  .construction-card {
    background-color: white;
    padding: var(--space-xl);
    border-radius: var(--border-radius);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 500px;
    width: 100%;

    .constructionText {
      font-size: var(--font-size-md);
      color: var(--text-muted);
      margin-top: var(--space-sm);
    }
  }
`

export const UnderConstruction = ({ overlay = false }) => {
  if (overlay) {
    return (
      <StyledOverlay>
        <div className='construction-card'>
          <SectionTitle title='Under Construction' />
          <p className='constructionText'>
            This page is currently under construction. Please check back later!
          </p>
        </div>
      </StyledOverlay>
    )
  }

  return (
    <StyledUnderConstruction>
      <SectionTitle title='Under Construction' />
      <p className='constructionText'>
        This section is currently under construction. Please check back later!
      </p>
    </StyledUnderConstruction>
  )
}
