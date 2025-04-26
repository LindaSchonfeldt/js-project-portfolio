import styled from 'styled-components'
import { media } from './media'

const SectionTitleStyled = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  margin-bottom: var(--space-lg);
  color: ${({ color }) => color || 'var(--primary-color)'};
  margin: 0;
  padding: 0;

  @media ${media.tablet} {
    font-size: 3rem;
    margin-bottom: var(--space-lg);
  }

  @media ${media.desktop} {
    font-size: 4rem;
  }
`

export const SectionTitle = ({ title, color, className }) => (
  <SectionTitleStyled className={className} color={color}>
    {title}
  </SectionTitleStyled>
)
