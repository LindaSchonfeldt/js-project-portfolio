import styled from 'styled-components'

const SectionTitleStyled = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);

  .sectionTitle {
    margin: 0;
    padding: 0;
  }

  div.sectionTitle {
    margin: 0;
    padding: 0;
  }

  .sectionTitle h2 {
    margin: 0;
  }
`

export const SectionTitle = ({ title }) => (
  <SectionTitleStyled className='sectionTitle'>{title}</SectionTitleStyled>
)
