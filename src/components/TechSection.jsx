import React from 'react'
import { SectionTitle } from './SectionTitle'
import './TechSection.css'

export const TechSection = ({ content }) => {
  if (!Array.isArray(content) || content.length === 0) {
    return (
      <section className='techSection'>
        <SectionTitle title='Tech' />
        <p>No technologies to display.</p>
      </section>
    )
  }

  const names = content.map((tech) => tech.name).join(', ')

  return (
    <section className='techSection'>
      <SectionTitle title='Tech' />
      <p className='techList'>{names}</p>
    </section>
  )
}
