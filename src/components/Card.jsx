import { useNavigate } from 'react-router-dom'
import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'

import defaultImg from '../assets/img.png'
import siteConfig from '../data/siteConfig.json'
import Button, { ButtonGroup } from './Button'
import { TagList } from './TagList'

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
  video,
  image,
  alt,
  title,
  subtitle,
  content,
  description,
  tags = [],
  netlify,
  github,
  figma,
  link,
  id,
  caseStudyId,
  children,
  className = ''
}) => {
  const navigate = useNavigate()

  const imgScr = image || defaultImg
  const isUnderConstruction =
    (variant === 'uxui' &&
      siteConfig.underConstruction.caseStudies.includes(caseStudyId)) ||
    (variant === 'article' &&
      siteConfig.underConstruction.articles.includes(id))

  const handleCaseStudyClick = () => {
    if (isUnderConstruction) {
      alert('This case study is currently under construction. Check back soon!')
    } else {
      navigate(`/case-study/${caseStudyId}`)
    }
  }

  const handleArticleClick = () => {
    if (isUnderConstruction) {
      alert('This article is currently under construction. Check back soon!')
    } else {
      navigate(`/article/${id}`)
    }
  }

  const actionList = useMemo(() => {
    const actions = []

    // Custom actions based on variant
    if (variant === 'code') {
      if (netlify)
        actions.push({ text: 'Live Demo', href: netlify, variant: 'primary' })
      if (github)
        actions.push({ text: 'View Code', href: github, variant: 'secondary' })
    } else if (variant === 'uxui') {
      if (caseStudyId) {
        actions.push({
          text: isUnderConstruction
            ? '🚧 Under Construction'
            : 'View Case Study',
          href: null,
          onClick: handleCaseStudyClick,
          variant: isUnderConstruction ? 'secondary' : 'primary',
          internal: true
        })
      }
      if (figma)
        actions.push({ text: 'View Design', href: figma, variant: 'secondary' })
      if (github)
        actions.push({ text: 'View Code', href: github, variant: 'secondary' })
    } else if (variant === 'article') {
      if (id) {
        actions.push({
          text: isUnderConstruction
            ? '🚧 Under Construction'
            : 'Read Full Article',
          href: null,
          onClick: handleArticleClick,
          variant: isUnderConstruction ? 'secondary' : 'primary',
          internal: true
        })
      }
      if (link) {
        actions.push({
          text: 'Download PDF',
          href: link,
          variant: id ? 'secondary' : 'primary'
        })
      }
    }

    return actions
  }, [
    variant,
    netlify,
    github,
    figma,
    link,
    id,
    caseStudyId,
    isUnderConstruction
  ])

  // Use content if provided, otherwise fall back to description
  const displayContent = content || description

  return (
    <BaseCard $variant={variant.toLowerCase()} id={id} className={className}>
      <div className='imageContainer'>
        {video ? (
          <>
            {console.log('Rendering video:', video)}
            <video className='cardImage' autoPlay muted loop playsInline>
              <source src={video} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </>
        ) : image ? (
          <>
            {console.log('Rendering image:', image)}
            <img src={image} alt={alt} className='cardImage' loading='lazy' />
          </>
        ) : (
          // Optional: render a placeholder or nothing
          <div className='cardImage'></div>
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
