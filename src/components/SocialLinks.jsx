export const SocialLinks = () => {
  return (
    <div className='socialContainer'>
      <h2 className='visuallyHidden'>Connect With Me</h2>

      <div className='socialIcons'>
        {/* LinkedIn */}
        <a
          href='https://www.linkedin.com/in/linda-sch%C3%B6nfeldt/'
          target='_blank'
          rel='noopener noreferrer'
          role='img'
          aria-label='Visit my LinkedIn profile'
        >
          <img src='/assets/linkedin.svg' alt='' className='socialIcon' />
        </a>

        {/* GitHub */}
        <a
          href='https://github.com/LindaSchonfeldt'
          target='_blank'
          rel='noopener noreferrer'
          role='img'
          aria-label='Visit my GitHub'
        >
          <img src='/assets/github.svg' alt='' className='socialIcon' />
        </a>

        {/* Dribbble */}
        <a
          href='https://dribbble.com/lindaschonfeldt'
          target='_blank'
          rel='noopener noreferrer'
          role='img'
          aria-label='Visit my Dribble'
        >
          <img src='/assets/dribbble.svg' alt='' className='socialIcon' />
        </a>

        {/* Instagram */}
        <a
          href='https://www.instagram.com/linda.schonfeldt/'
          target='_blank'
          rel='noopener noreferrer'
          role='img'
          aria-label='Visit my Instagram'
        >
          <img src='/assets/instagram.svg' alt='' className='socialIcon' />
        </a>
      </div>
    </div>
  )
}
