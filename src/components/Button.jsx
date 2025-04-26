import React from 'react'
import styled, { css } from 'styled-components'
import { media } from './media'

const hover = css`
  &:hover {
    background-color: var(--primary-color);
    opacity: 0.8;
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

      ${hover}
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
  margin-top: 1rem;
  gap: 0.5rem;
  box-sizing: border-box;

  @media ${media.desktop} {
    flex-direction: row;
    gap: 1rem;
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
  className = ''
}) {
  const handleClick = () => {
    if (href) window.open(href, target, 'noopener,noreferrer')
    else onClick?.()
  }

  return (
    <StyledButton
      $variant={variant} // use transient prop here
      className={className}
      onClick={handleClick}
    >
      {text}
    </StyledButton>
  )
}
