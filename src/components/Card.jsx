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

  .imageContainer {
    position: relative;
    margin-bottom: var(--space-sm);
    overflow: hidden; /* Important: contains the zoomed image */

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 144, 75, 0.5);
      transition: opacity 0.3s ease;
    }

    &:hover::after {
      opacity: 0; /* Hide overlay on hover */
    }

    &:hover .cardImage {
      transform: scale(1.1); /* Zoom effect on hover */
    }
  }

  .cardImage {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease; /* Smooth transition for zoom */
  }

  .cardTitle {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
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
  uxui: ({ figma, github, caseStudyId }) => {
    const actions = []
    if (caseStudyId)
      actions.push({
        text: 'Case Study',
        href: `/case-study/${caseStudyId}`,
        variant: 'primary',
        internal: true
      })
    if (figma)
      actions.push({ text: 'View Design', href: figma, variant: 'secondary' })
    if (github)
      actions.push({ text: 'View Code', href: github, variant: 'secondary' })
    return actions
  },
  article: ({ link, id }) => {
    const actions = []
    console.log('Article action creator ID:', id) // Add debug

    // Add internal link to ArticlePage if there's an ID
    if (id) {
      actions.push({
        text: 'Read Full Article',
        href: `/article/${id}`,
        variant: 'primary',
        internal: true
      })
    }

    // Keep the existing PDF download link if available
    if (link) {
      actions.push({
        text: 'Download PDF',
        href: link,
        variant: id ? 'secondary' : 'primary'
      })
    }

    console.log('Return actions:', actions) // Add debug
    return actions
  }
}

/**
 * Card Component
 *
 * @param {Object} props
 * @param {'default'|'code'|'uxui'|'article'} [props.variant='default'] - Card style variant
 * @param {string} [props.image] - URL for card image (uses default if not provided)
 * @param {string} [props.video] - URL for card video (mp4 format)
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
  video,
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
  id,
  caseStudyId,
  children,
  className = ''
}) => {
  console.log('Card rendered with props:', { variant, id, link })

  const imgScr = image || defaultImg
  const actionList =
    actions.length > 0
      ? actions
      : (defaultActions[variant] || (() => []))({
          netlify,
          github,
          figma,
          link,
          id,
          caseStudyId
        })

  console.log('Action list generated:', actionList)

  // Use content if provided, otherwise fall back to description
  const displayContent = content || description

  return (
    <BaseCard $variant={variant.toLowerCase()} id={id} className={className}>
      <div className='imageContainer'>
        {video ? (
          <video className='cardImage' autoPlay muted loop playsInline>
            <source src={video} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={imgScr} alt={alt} className='cardImage' loading='lazy' />
        )}
      </div>
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
          {actionList.map(
            ({ text, href, onClick, target, variant, internal }, i) => (
              <Button
                key={i}
                text={text}
                href={href}
                onClick={onClick}
                target={target}
                variant={variant}
                internal={internal}
              />
            )
          )}
        </ButtonGroup>
      )}
      {tags.length > 0 && <TagList tags={tags} />}
    </BaseCard>
  )
}
