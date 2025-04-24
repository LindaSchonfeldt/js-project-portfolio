import styled from 'styled-components'

const SectionTitleStyled = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: ${({ color }) => color || 'var(--primary-color)'};
  margin: 0;
  padding: 0;
`

export const SectionTitle = ({ title, color, className }) => (
  <SectionTitleStyled className={className} color={color}>
    {title}
  </SectionTitleStyled>
)
