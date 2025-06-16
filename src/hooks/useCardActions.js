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
        defaultActions.push({
          text: isUnderConstruction
            ? '🚧 Under Construction'
            : 'View Case Study',
          href: null,
          onClick: isUnderConstruction ? null : handleCaseStudyClick,
          variant: isUnderConstruction ? 'disabled' : 'primary',
          internal: true
        })
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
        defaultActions.push({
          text: isUnderConstruction
            ? '🚧 Under Construction'
            : 'Read Full Article',
          href: null,
          onClick: isUnderConstruction ? null : handleArticleClick,
          variant: isUnderConstruction ? 'disabled' : 'primary',
          internal: true
        })
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
