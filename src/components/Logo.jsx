export const Logo = ({ className = '', alt = '' }) => {
  // Destructure className and add a default alt
  return <img src='/assets/tree.svg' className={className} alt={alt} /> // Apply the passed className and alt
}
