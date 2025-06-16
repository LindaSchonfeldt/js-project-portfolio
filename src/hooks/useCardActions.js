import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { useUnderConstruction } from './useUnderConstruction'

export function useCardActions({
  variant = 'default',
  actions = [],
  netlify,
  github,
  figma,
  link,
  caseStudyId = '',
  id = ''
}) {
  const navigate = useNavigate()
  const isUnderConstruction = useUnderConstruction(
    variant === 'uxui' ? 'casestudy' : 'article',
    variant === 'uxui' ? caseStudyId : id
  )

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

  return useMemo(() => {
    if (actions.length > 0) return actions

    const defaultActions = []

    // Code variant
    if (variant === 'code') {
      if (netlify)
        defaultActions.push({
          text: 'Live Demo',
          href: netlify,
          variant: 'primary'
        })
      if (github)
        defaultActions.push({
          text: 'View Code',
          href: github,
          variant: 'secondary'
        })
    }

    // UX/UI variant
    else if (variant === 'uxui') {
      if (caseStudyId) {
        if (isUnderConstruction) {
          defaultActions.push({
            text: '🚧 Under Construction',
            href: null,
            onClick: null,
            variant: 'disabled',
            internal: true
          })
        } else {
          defaultActions.push({
            text: 'View Case Study',
            href: null,
            onClick: handleCaseStudyClick,
            variant: 'primary',
            internal: true
          })
        }
      }
      if (figma)
        defaultActions.push({
          text: 'View Design',
          href: figma,
          variant: 'secondary'
        })
      if (github)
        defaultActions.push({
          text: 'View Code',
          href: github,
          variant: 'secondary'
        })
    }

    // Article variant
    else if (variant === 'article') {
      if (id) {
        if (isUnderConstruction) {
          defaultActions.push({
            text: '🚧 Under Construction',
            href: null,
            onClick: null,
            variant: 'disabled',
            internal: true
          })
        } else {
          defaultActions.push({
            text: 'Read Full Article',
            href: null,
            onClick: handleArticleClick,
            variant: 'primary',
            internal: true
          })
        }
      }
      if (link) {
        defaultActions.push({
          text: 'Download PDF (Swedish)',
          href: link,
          variant: id ? 'secondary' : 'primary',
          target: '_blank'
        })
      }
    }

    return defaultActions
  }, [
    variant,
    actions,
    netlify,
    github,
    figma,
    link,
    caseStudyId,
    id,
    isUnderConstruction,
    handleCaseStudyClick,
    handleArticleClick
  ])
}
