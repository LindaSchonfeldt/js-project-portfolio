export const PrimaryButton = ({ text, onClick, href, target = '_self' }) => {
  const className = 'primaryButton'

  const handleClick = () => {
    if (href) {
      window.open(href, target, 'noopener,noreferrer')
    } else if (onClick) {
      onClick()
    }
  }

  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  )
}
