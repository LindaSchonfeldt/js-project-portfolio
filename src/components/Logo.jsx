import React from 'react'
import styled from 'styled-components'
import treeSrc from '../assets/tree.svg'

// Transient prop $size so it doesn’t leak to the DOM
const StyledLogo = styled.img`
  width: ${({ $size }) =>
    $size === 'medium'
      ? '4rem'
      : $size === 'large'
      ? '6rem'
      : '1.7rem'}; /* small default */
  height: auto;
`

export const Logo = ({
  className = '',
  alt = '',
  size = 'small' // 'small' | 'medium' | 'large'
}) => {
  return (
    <StyledLogo src={treeSrc} alt={alt} className={className} $size={size} />
  )
}
