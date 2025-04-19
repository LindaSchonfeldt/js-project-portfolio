export const SecondaryButton = ({ text, onClick, href, target = '_self' }) => {
  const className = 'secondaryButton'

  // Render as anchor if href provided
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={className}
      >
        {text}
      </a>
    )
  }

  // Otherwise render as a normal button
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}
