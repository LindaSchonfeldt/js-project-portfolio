import { Logo } from './Logo'
import { SectionTitle } from './SectionTitle'
import { SocialLinks } from './SocialLinks'
import styled from 'styled-components'

const ContactSectionStyled = styled.section`
  .contactContainer {
    margin-top: 4rem;
  }
  .contactLogo {
    height: 6rem;
    margin-bottom: 1.5rem;
  }
`

export const ContactSection = () => {
  return (
    <ContactSectionStyled className='contactContainer'>
      <Logo className='contactLogo' />
      <div className='contactContent'>
        <SectionTitle title="Let's talk" />
        <p className='contactText'>Linda Schönfeldt </p>
        <p className='contactText'>+46(0)73 042 0035 </p>
        <p className='contactText'>linda.schonfeldt@gmail.com</p>
      </div>
      <SocialLinks />
    </ContactSectionStyled>
  )
}
