import styled from 'styled-components'

const StyledSocialLinks = styled.div`
  margin-top: 2rem;

  .socialIcons {
    display: flex;
    flex-direction: row;
  }

  /* Wrap each link so we can add hover transforms */
  .socialIcons a {
    display: inline-block;
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  .socialIcon {
    width: 32px;
    height: auto;
    fill: var(--secondary-color);
    transition: all 0.3s ease-in-out;
  }
`

export const SocialLinks = () => {
  return (
    <StyledSocialLinks>
      <h2 className='visuallyHidden'>Connect With Me</h2>
      <div className='socialIcons'>
        {/* LinkedIn */}
        <a
          href='https://www.linkedin.com/in/linda-sch%C3%B6nfeldt/'
          target='_blank'
          rel='noopener noreferrer'
          role='img'
          aria-label='Visit my LinkedIn profile'
        ></a>

        {/* GitHub */}
        <a
          href='https://github.com/LindaSchonfeldt'
          target='_blank'
          rel='noopener noreferrer'
          role='img'
          aria-label='Visit my GitHub'
        >
          {' '}
        </a>

        {/* Dribbble */}
        <a
          href='https://dribbble.com/lindaschonfeldt'
          target='_blank'
          rel='noopener noreferrer'
          role='img'
          aria-label='Visit my Dribble'
        ></a>

        {/* Instagram */}
        <a
          href='https://www.instagram.com/linda.schonfeldt/'
          target='_blank'
          rel='noopener noreferrer'
          role='img'
          aria-label='Visit my Instagram'
        ></a>
      </div>
    </StyledSocialLinks>
  )
}
