export const PrimaryButton = ({ text, onClick, href, target = '_self' }) => {
  const className = 'primaryButton'

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

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}
