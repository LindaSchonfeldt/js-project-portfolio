import { useNavigate } from 'react-router-dom'
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

  /* Disabled - for under construction */
  ${({ $variant }) =>
    $variant === 'disabled' &&
    css`
      background-color: #f5f5f5;
      color: var(--text-muted);
      border: 2px solid #ddd;
      cursor: not-allowed;
      opacity: 0.6;

      /* No hover effects */
      &:hover {
        background-color: #f5f5f5;
        color: #999;
        opacity: 0.6;
      }
    `}
`

const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: column; /* Stack buttons vertically */
  gap: var(--space-xxs);
  width: 100%;
`

export function ButtonGroup({ actions = [] }) {
  console.log('ButtonGroup received actions:', actions) // Debug log

  if (!actions || actions.length === 0) {
    console.log('ButtonGroup: No actions provided')
    return null
  }

  return (
    <StyledButtonGroup>
      {actions.map((action, index) => {
        console.log(`Rendering button ${index}:`, action)
        return (
          <Button
            key={index}
            text={action.text}
            href={action.href}
            onClick={action.onClick}
            target={action.target}
            variant={action.variant || 'primary'}
            internal={action.internal}
            className={action.className}
          />
        )
      })}
    </StyledButtonGroup>
  )
}

export default function Button({
  text,
  href,
  onClick,
  target = '_self',
  variant = 'primary', // 'primary' | 'secondary' | 'tertiary'
  internal = false,
  className = '',
  children
}) {
  const navigate = useNavigate()

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
      {text || children}
    </StyledButton>
  )
}
