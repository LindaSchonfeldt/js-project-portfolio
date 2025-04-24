import { Logo } from './Logo'
import { SectionTitle } from './SectionTitle'
import { SocialLinks } from './SocialLinks'
import styled from 'styled-components'
import { media } from './media'

const StyledContactSection = styled.section`
  margin-top: 6rem;
  .sectionTitle {
    justify-content: left;
  }

  p {
    margin: 0;
  }

  .contactContent {
    margin: 1rem;
  }

  @media ${media.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;

    .contactLogo {
      width: 6rem;
      margin-bottom: 1rem;
    }
    .sectionTitle {
      justify-content: center;
    }
  }
  @media ${media.desktop} {
    .contactLogo {
      width: 8rem;
      margin-bottom: 1rem;
    }
    .sectionTitle {
      font-size: 4rem;
    }

    .contactContent {
      margin: 2rem;
    }
  }
  @media ${media.largeDesktop} {
  }
`

export const ContactSection = () => {
  return (
    <StyledContactSection>
      <Logo size='medium' className='contactLogo' />
      <div className='contactContent'>
        <SectionTitle className='sectionTitle' title="Let's talk" />
        <div className='contactText'>
          <p>Linda Schönfeldt </p>
          <p>+46(0)73 042 0035 </p>
          <p>linda.schonfeldt@gmail.com</p>
        </div>
      </div>
      <SocialLinks />
    </StyledContactSection>
  )
}
