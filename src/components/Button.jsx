import React from 'react'

const VARIANT_CLASS = {
  primary: 'primaryButton',
  secondary: 'secondaryButton',
  tertiary: 'tertiaryButton'
}

export default function Button({
  text,
  onClick,
  href,
  target = '_self',
  variant = 'primary', // 'primary' | 'secondary' | 'tertiary'
  className = ''
}) {
  const baseClass = VARIANT_CLASS[variant] || VARIANT_CLASS.primary
  const classes = `${baseClass} ${className}`.trim()

  const handleClick = () => {
    if (href) {
      window.open(href, target, 'noopener,noreferrer')
    } else if (onClick) {
      onClick()
    }
  }

  return (
    <button className={classes} onClick={handleClick}>
      {text}
    </button>
  )
}
