import { Logo } from '../components/Logo'
import { SectionTitle } from '../components/SectionTitle'
import { SocialLinks } from '../components/SocialLinks'
import styled from 'styled-components'
import { media } from '../components/media'

const StyledContactSection = styled.section`
  margin-top: 6rem;
  .sectionTitle {
    justify-content: left;
    margin: 0.5rem 0 1rem 0;
  }

  p {
    margin: 0;
  }

  .contactContent {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .socialLinks {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media ${media.tablet} {
    .contactContent {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    .contactText {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
    }

    .contactLogo {
      width: 6rem;
      margin-bottom: 1rem;
    }
    .sectionTitle {
      justify-content: center;
    }

    .socialLinks {
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
    p {
      font-size: 20px;
    }
  }
`

export const ContactSection = () => {
  return (
    <StyledContactSection>
      <div className='contactContent'>
        <Logo size='medium' className='contactLogo' />
        <div className='contactText'>
          <SectionTitle className='sectionTitle' title="Let's talk" />
          <p>Linda Schönfeldt </p>
          <p>+46(0)73 042 0035 </p>
          <p>linda.schonfeldt@gmail.com</p>
        </div>
      </div>
      <div className='socialLinks'>
        <SocialLinks />
      </div>
    </StyledContactSection>
  )
}
