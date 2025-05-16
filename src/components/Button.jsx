import React from 'react'
import styled, { css } from 'styled-components'
import { media } from '../media.js'

const hover = css`
  &:hover {
    background-color: var(--primary-color);
    opacity: 0.8;
  }
`
const secondaryHover = css`
  &:hover {
    background-color: var(--primary-color);
    opacity: 0.8;
    color: var(--background-color);
  }
`

const StyledButton = styled.button`
  flex: 1;
  padding: 0.5rem 1rem;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;

  /* Primary */
  ${({ $variant }) =>
    $variant === 'primary' &&
    css`
      background-color: var(--primary-color);
      color: var(--background-color);
      border: 2px solid var(--primary-color);
      transition: all 0.2s ease-in-out;

      ${hover}
    `}

  /* Secondary */
   ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      background-color: transparent;
      color: var(--primary-color);
      border: 2px solid var(--primary-color);
      transition: all 0.2s ease-in-out;

      ${secondaryHover}
    `}

  /* Tertiary */
  ${({ $variant }) =>
    $variant === 'tertiary' &&
    css`
      background: none;
      color: #666;
      text-decoration: underline;
      border: none;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: var(--primary-color);
        text-decoration: none;
      }
    `}
`
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: var(--space-sm);
  gap: var(--space-xs);
  box-sizing: border-box;

  @media ${media.desktop} {
    flex-direction: row;
    gap: var(--space-sm);
  }

  button {
    flex: 1;
  }
`

export default function Button({
  text,
  href,
  onClick,
  target = '_self',
  variant = 'primary', // 'primary' | 'secondary' | 'tertiary'
  internal = false,
  className = ''
}) {
  const handleClick = () => {
    if (href) {
      if (internal) {
        navigate(href)
      } else {
        window.open(href, target, 'noopener,noreferrer')
      }
    } else if (onClick) {
      onClick()
    }
  }

  return (
    <StyledButton
      $variant={variant} // Transient prop
      className={className}
      onClick={handleClick}
    >
      {text}
    </StyledButton>
  )
}
