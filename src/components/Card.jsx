import React from 'react'
import { PrimaryButton } from './PrimaryButton'
import { SecondaryButton } from './SecondaryButton'
import { TagList } from './TagList'

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

  return (
    <div className={`card ${className}`}>
      {image && <img src={image} alt={title} className='cardImage' />}
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
        <div className='cardActions'>
          {actions.map((action, i) => {
            const common = {
              key: i,
              text: action.text,
              href: action.href,
              onClick: action.onClick,
              target: action.target
            }
            return action.variant === 'primary' ? (
              <PrimaryButton {...common} />
            ) : (
              <SecondaryButton {...common} />
            )
          })}
        </div>
      )}
    </div>
  )
}
