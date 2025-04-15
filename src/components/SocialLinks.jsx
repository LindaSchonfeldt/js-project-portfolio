import React from 'react'
import linkedinSvg from '../assets/linkedin.svg' // Import the SVG
import githubSvg from '../assets/github.svg'
import dribbbleSvg from '../assets/dribbble.svg'
import instagramSvg from '../assets/instagram.svg'

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
          <img src={linkedinSvg} alt='' className='socialIcon' />
        </a>

        {/* GitHub */}
        <a
          href='https://github.com/LindaSchonfeldt'
          target='_blank'
          rel='noopener noreferrer'
          role='img'
          aria-label='Visit my GitHub'
        >
          <img src={githubSvg} alt='' className='socialIcon' />
        </a>

        {/* Dribbble */}
        <a
          href='https://dribbble.com/lindaschonfeldt'
          target='_blank'
          rel='noopener noreferrer'
          role='img'
          aria-label='Visit my Dribble'
        >
          <img src={dribbbleSvg} alt='' className='socialIcon' />
        </a>

        {/* Instagram */}
        <a
          href='https://www.instagram.com/linda.schonfeldt/'
          target='_blank'
          rel='noopener noreferrer'
          role='img'
          aria-label='Visit my Instagram'
        >
          <img src={instagramSvg} alt='' className='socialIcon' />
        </a>
      </div>
    </div>
  )
}
