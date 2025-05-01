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
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 1rem;

  .cardTitle {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .cardImage {
    display: block;
    width: 100%;
    object-fit: cover;
    margin-bottom: var(--space-sm);
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
    gap: var(--space-xs);
  }

  > button {
    flex: 1; /* each button takes equal share */
  }

  /* variant styles toggled by props */
  ${({ $variant }) => $variant === 'code' && css``}
  ${({ $variant }) => $variant === 'uxui' && css``}
  ${({ $variant }) => $variant === 'article' && css``}
`

// define per‐variant defaults
const defaultActions = {
  code: ({ netlify, github }) => {
    const actions = []
    if (netlify)
      actions.push({ text: 'Live Demo', href: netlify, variant: 'primary' })
    if (github)
      actions.push({ text: 'View Code', href: github, variant: 'secondary' })
    return actions
  },
  uxui: ({ figma, github }) => {
    const actions = []
    if (figma)
      actions.push({ text: 'View Design', href: figma, variant: 'primary' })
    if (github)
      actions.push({ text: 'View Code', href: github, variant: 'secondary' })
    return actions
  },
  article: ({ link }) =>
    link ? [{ text: 'Read Article', href: link, variant: 'secondary' }] : []
}

/**
 * Card Component
 *
 * @param {Object} props
 * @param {'default'|'code'|'uxui'|'article'} [props.variant='default'] - Card style variant
 * @param {string} [props.image] - URL for card image (uses default if not provided)
 * @param {string} [props.alt] - Alt text for image
 * @param {string} [props.title] - Card title
 * @param {string} [props.subtitle] - Smaller text below the title (e.g. date)
 * @param {React.ReactNode|string} [props.content] - Main card content
 * @param {string} [props.description] - Alternative to content (used if content not provided)
 * @param {string[]} [props.tags=[]] - Tags to display at the bottom
 * @param {Object[]} [props.actions=[]] - Custom action buttons
 * @param {string} [props.netlify] - URL for "Live Demo" button (code variant)
 * @param {string} [props.github] - URL for "View Code" button (code/uxui variants)
 * @param {string} [props.figma] - URL for "View Design" button (uxui variant)
 * @param {string} [props.link] - URL for "Read Article" button (article variant)
 * @param {React.ReactNode} [props.children] - Any additional JSX to render
 * @param {string} [props.className=''] - Additional CSS class names
 * @returns {React.ReactElement}
 */

export const Card = ({
  variant = 'default', // Code, UX/UI, article or default
  image,
  alt,
  title,
  subtitle,
  content,
  description,
  tags = [],
  actions = [],
  netlify,
  github,
  figma,
  link,
  children,
  className = ''
}) => {
  const imgScr = image || defaultImg
  const actionList =
    actions.length > 0
      ? actions
      : (defaultActions[variant] || (() => []))({
          netlify,
          github,
          figma,
          link
        })

  // Use content if provided, otherwise fall back to description
  const displayContent = content || description

  return (
    <BaseCard $variant={variant.toLowerCase()} className={className}>
      <img src={imgScr} alt={alt} className='cardImage' loading='lazy' />{' '}
      {title && <h3 className='cardTitle'>{title}</h3>}
      {subtitle && <p className='cardSubtitle'>{subtitle}</p>}
      {displayContent && (
        <div className='cardContent'>
          {typeof displayContent === 'string' ? (
            <p>{displayContent}</p>
          ) : (
            displayContent
          )}
        </div>
      )}
      {/* any completely custom JSX */}
      {children}
      {actionList.length > 0 && (
        <ButtonGroup>
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
        </ButtonGroup>
      )}
      {tags.length > 0 && <TagList tags={tags} />}
    </BaseCard>
  )
}
