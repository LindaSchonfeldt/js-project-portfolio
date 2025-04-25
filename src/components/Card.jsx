import React from 'react'
import Button, { ButtonGroup } from './Button'
import { TagList } from './TagList'
import styled, { css } from 'styled-components'
import defaultImg from '../assets/img.png'

const BaseCard = styled.div`
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

  .cardActions {
    margin-top: auto; /* pushes buttons down */
    display: flex;
    width: 100%; /* make wrapper full width */
    gap: 0.5rem; /* optional spacing */
  }

  > button {
    flex: 1; /* each button takes equal share */
  }

  /* variant styles toggled by props */
  ${({ $variant }) =>
    $variant === 'code' &&
    css`
      border-color: #ff3e00;
    `}
  ${({ $variant }) =>
    $variant === 'uxui' &&
    css`
      border-color: #009f7f;
    `}
  ${({ $variant }) =>
    $variant === 'article' &&
    css`
      border-color: #0050ef;
    `}
`

// define per‐variant defaults
const defaultActions = {
  code: ({ netlify, github }) => [
    { text: 'Live Demo', href: netlify, variant: 'primary' },
    { text: 'View Code', href: github, variant: 'secondary' }
  ],
  uxui: ({ figma, github }) => [
    { text: 'View Design', href: figma, variant: 'primary' },
    { text: 'View Code', href: github, variant: 'secondary' }
  ],
  article: ({ link }) => [
    { text: 'Read Article', href: link, variant: 'secondary' }
  ]
}

/**
 * props:
 *  • variant     'Code' | 'UX/UI' | 'default'
 *  • image?      string URL
 * *• alt?        string
 *  • title?      string
 *  • subtitle?   string
 *  • content?    ReactNode or string
 *  • tags?       string[]
 *  • actions?    { text, href?, onClick?, variant: 'primary'|'secondary' }[]
 *  • children?   ReactNode   // any extra custom JSX
 */

export const Card = ({
  variant = 'default', // Code, UX/UI, article or default
  image,
  alt,
  title,
  subtitle,
  content,
  tags = [],
  actions = [],
  link,
  netlify,
  github,
  figma,
  children,
  className = ''
}) => {
  const imgScr = image || defaultImg
  const actionList =
    actions.length > 0
      ? actions
      : (defaultActions[variant] || (() => []))({ netlify, github, figma })
  return (
    <BaseCard $variant={variant.toLowerCase()} className={className}>
      <img src={imgScr} alt={alt} className='cardImage' />{' '}
      {title && <h3 className='cardTitle'>{title}</h3>}
      {subtitle && <p className='cardSubtitle'>{subtitle}</p>}
      {content && (
        <div className='cardContent'>
          {typeof content === 'string' ? <p>{content}</p> : content}
        </div>
      )}
      {/* any completely custom JSX */}
      {children}
      {actionList.length > 0 && (
        <ButtonGroup>
          <div className='cardActions'>
            {actionList.map(({ text, href, onClick, target, variant }, i) => (
              <Button
                key={i}
                text={text}
                href={href}
                onClick={onClick}
                target={target}
                variant={variant}
              />
            ))}
          </div>
        </ButtonGroup>
      )}
      {tags.length > 0 && <TagList tags={tags} />}
    </BaseCard>
  )
}
