import { useMemo } from 'react'

// Define action creators per variant
const actionCreators = {
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
      actions.push({ text: 'View Design', href: figma, variant: 'primary' })
    if (github)
      actions.push({ text: 'View Code', href: github, variant: 'secondary' })
    return actions
  },

  article: ({ link }) =>
    link ? [{ text: 'Read Article', href: link, variant: 'secondary' }] : []
}

/**
 * Hook to generate card actions based on variant and available links
 *
 * @param {Object} options
 * @param {'default'|'code'|'uxui'|'article'} options.variant - Card style variant
 * @param {Object[]} [options.actions=[]] - Custom action buttons (override defaults)
 * @param {string} [options.netlify] - URL for "Live Demo" button
 * @param {string} [options.github] - URL for "View Code" button
 * @param {string} [options.figma] - URL for "View Design" button
 * @param {string} [options.link] - URL for "Read Article" button
 * @returns {Array} List of action objects with text, href, and variant
 */
export function useCardActions({
  variant = 'default',
  actions = [],
  netlify,
  github,
  figma,
  link,
  caseStudyId = '' // Add default empty string to prevent undefined issues
}) {
  return useMemo(() => {
    if (actions.length > 0) return actions

    const creator = actionCreators[variant] || (() => [])
    return creator({ netlify, github, figma, link, caseStudyId })
  }, [variant, actions, netlify, github, figma, link, caseStudyId])
}
