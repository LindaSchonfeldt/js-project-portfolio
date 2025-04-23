import { Logo } from './Logo'
import { SectionTitle } from './SectionTitle'
import { SocialLinks } from './SocialLinks'
import styled from 'styled-components'
import { media } from './media'

const StyledContactSection = styled.section`
  margin-top: 4rem;

  @media ${media.tablet} {
    ${Logo} {
      size: 'large';
      margin-bottom: 1rem;
    }
  }
  @media ${media.desktop} {
  }
  @media ${media.largeDesktop} {
  }
`

export const ContactSection = () => {
  return (
    <StyledContactSection>
      <Logo size='medium' className='contactLogo' />
      <div className='contactContent'>
        <SectionTitle title="Let's talk" />
        <p className='contactText'>Linda Schönfeldt </p>
        <p className='contactText'>+46(0)73 042 0035 </p>
        <p className='contactText'>linda.schonfeldt@gmail.com</p>
      </div>
      <SocialLinks />
    </StyledContactSection>
  )
}
