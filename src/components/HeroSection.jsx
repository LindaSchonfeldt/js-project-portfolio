import React from 'react'
import { StrictMode } from 'react'

export const HeroSection = () => {
  return (
    <section className='heroContainer'>
      <div className='heroContent'>
        <div>
          <img src='assets/tree.svg' className='logoSmall' alt='' />
        </div>
        <h2 className='heroSubtitle'>I am Linda Schönfeldt</h2>
        <h1 className='heroTitle'>Web Developer with UX Skills</h1>
        <p className='heroText'>
          With a background in service and interaction design, I'm passionate
          about building technology that truly understands user needs and
          creates meaningful impact. What drives me is the desire to bring
          clarity to complexity. I love organizing—whether it's structuring
          information for better usability, designing intuitive user flows,
          mapping out a product roadmap, or learning to write cleaner, more
          maintainable code. Turning chaos into something clear, purposeful, and
          human-centered is where I thrive. I'm especially drawn to
          mission-driven teams that lead with empathy, value curiosity, and care
          deeply about building thoughtful, empowering products.
        </p>
      </div>
      <div className='imageLarge'>
        <img src='assets/linda.svg' alt='' />
      </div>
    </section>
  )
}
