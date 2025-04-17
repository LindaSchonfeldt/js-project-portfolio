import { SectionTitle } from './SectionTitle'
import { SocialLinks } from './SocialLinks'

export const ContactSection = () => {
  return (
    <section className='contactContainer'>
      {/* <div className='contactImage'>
        <img src='/assets/contact.svg' alt='' />
      </div> */}
      <SectionTitle title="Let's talk" />
      <p className='contactText'>Linda Schönfeldt </p>
      <p className='contactText'>+46(0)73 042 0035 </p>
      <p className='contactText'>linda.schonfeldt@gmail.com</p>
      <SocialLinks />
    </section>
  )
}
