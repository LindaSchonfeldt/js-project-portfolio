import styled from 'styled-components'
import { media } from '../media'
import Button from './Button'

const StyledNavigationBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  padding: var(--space-md);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed; /* Change from sticky to fixed */
  top: 0;
  left: 0; /* Add this */
  right: 0; /* Add this */
  z-index: 1000;
  width: 100%;

  .back-container {
    flex: 1;
    display: flex;
    justify-content: flex-start; /* Align button to the left */
  }

  .backButton {
    color: var(--background-color);
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.3s ease;
    padding: var(--space-xs) var(--space-sm); /* Control button size */
    width: auto; /* Don't stretch */

    &:hover {
      color: var(--secondary-color);
      text-decoration: underline; /* Add underline on hover */
    }
  }

  .navbarLinks {
    list-style: none;
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    margin: 0;
    padding: 0;
    flex: 1; /* Take up equal space */
    justify-content: center; /* Center the navigation links */

    li {
      a {
        text-decoration: none;
        color: var(--background-color);
        font-weight: 500;
        font-size: var(--font-size-md);
        transition: color 0.3s;

        &:hover {
          color: var(--secondary-color);
        }
      }
    }
  }

  .spacer {
    flex: 1; /* Take up equal space to balance the back button */
  }

  @media ${media.tablet} {
    .navbarLinks {
      gap: var(--space-xl);
    }
  }

  @media ${media.desktop} {
    .navbarLinks {
      gap: var(--space-xxl);
    }
  }
`

export const NavigationBar = ({
  showBackButton = false,
  onBackClick = null,
  backButtonHref = '/',
  links = [
    { href: '#overview', text: '01. Overview' },
    { href: '#challenge', text: '02. Challenge' },
    { href: '#process', text: '03. Process' },
    { href: '#results', text: '04. Results' },
    { href: '#learnings', text: '05. Learnings' }
  ]
}) => {
  const handleBackClick = (e) => {
    console.log('handleBackClick called') // Debug log
    if (onBackClick) {
      console.log('onBackClick exists, calling it') // Debug log
      e.preventDefault()
      onBackClick()
    } else {
      console.log('onBackClick is null') // Debug log
    }
  }

  return (
    <StyledNavigationBar>
      {showBackButton && (
        <div className='back-container'>
          <button
            className='backButton'
            onClick={handleBackClick}
            style={{
              color: 'var(--background-color)',
              background: 'none',
              border: 'none',
              fontSize: '1rem',
              cursor: 'pointer',
              padding: 'var(--space-xs) var(--space-sm)'
            }}
          >
            Back
          </button>
        </div>
      )}

      <ul className='navbarLinks'>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>

      {showBackButton && <div className='spacer'></div>}
    </StyledNavigationBar>
  )
}
