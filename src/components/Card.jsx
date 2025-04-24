import React from 'react'
import Button, { ButtonGroup } from './Button'
import { TagList } from './TagList'
import styled from 'styled-components'
import defaultImg from '../assets/img.png'

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: var(--background-color);
  border: 2px solid #000;
  width: 100%;
  height: 100%;

  .cardTitle {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  .cardImage {
    width: 100%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  .cardContent {
    flex: 1; /* push footer/tags/buttons to bottom */
  }

  .cardSubtitle {
    font-size: 0.8rem;
    font-weight: 700;
  }
`

/**
 * props:
 *  • image?      string URL
 *  • title?      string
 *  • subtitle?   string
 *  • content?    ReactNode or string
 *  • tags?       string[]
 *  • actions?    { text, href?, onClick?, variant: 'primary'|'secondary' }[]
 *  • children?   ReactNode   // any extra custom JSX
 */

export const Card = ({
  variant, // Code or UX/UI
  image,
  title,
  subtitle,
  content,
  tags = [],
  actions = [],
  children,
  className = ''
}) => {
  // choose a class (or wrap in different layout)
  const cardClass = `card ${variant === 'Code' ? 'card–code' : 'card–uxui'}`
  const imgScr = image || defaultImg

  return (
    <StyledCard className={`${cardClass} ${className}`}>
      <img src={imgScr} alt={title} className='cardImage' />{' '}
      {title && <h3 className='cardTitle'>{title}</h3>}
      {subtitle && <p className='cardSubtitle'>{subtitle}</p>}
      {content && (
        <div className='cardContent'>
          {typeof content === 'string' ? <p>{content}</p> : content}
        </div>
      )}
      {/* any completely custom JSX */}
      {children}
      {tags.length > 0 && <TagList tags={tags} />}
      {actions.length > 0 && (
        <ButtonGroup>
          <div className='cardActions'>
            {actions.map((action, i) => {
              const {
                text,
                href,
                onClick,
                target,
                variant: btnVariant
              } = action
              const common = {
                text,
                href,
                onClick,
                target,
                variant: btnVariant
              }

              return action.variant === 'primary' ? (
                <Button key={`action-${i}`} {...common} />
              ) : (
                <Button key={`action-${i}`} {...common} />
              )
            })}
          </div>
        </ButtonGroup>
      )}
    </StyledCard>
  )
}
