import React from 'react'
import styled, { css } from 'styled-components'

const ButtonStyled = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;

  /* Primary */
  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: var(--primary-color);
      color: #fff;
      border: 1px solid var(--primary-color);
    `}

  /* Secondary */
  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: transparent;
      color: var (--primary-color);
      border: 1px solid var(--primary-color);
    `}

  /* Tertiary */
  ${(props) =>
    props.variant === 'tertiary' &&
    css`
      background: none;
      color: #666;
      text-decoration: underline;
      border: none;
    `}
`
export const ButtonGroup = styled.div`
  display: flex;
  gap: auto;
  margin-top: 1rem;
  justify-content: flex-start;
  width: 100%; /* full width of the parent */
  flex-wrap: wrap;
  flex: 1;
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
    <ButtonStyled
      variant={variant} // pass it here
      className={className}
      onClick={handleClick}
    >
      {text}
    </ButtonStyled>
  )
}
