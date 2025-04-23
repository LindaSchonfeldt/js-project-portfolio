import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  flex: 1;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;

  /* Primary */
  ${({ $variant }) =>
    $variant === 'primary' &&
    css`
      background-color: var(--primary-color);
      color: #fff;
      border: 1px solid var(--primary-color);
    `}

  /* Secondary */
   ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      background-color: transparent;
      color: var (--primary-color);
      border: 1px solid var(--primary-color);
    `}

  /* Tertiary */
  ${({ $variant }) =>
    $variant === 'tertiary' &&
    css`
      background: none;
      color: #666;
      text-decoration: underline;
      border: none;
    `}
`
export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
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
