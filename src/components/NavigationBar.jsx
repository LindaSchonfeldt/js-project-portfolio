import styled from 'styled-components'
import { media } from '../media'

const StyledNavigationBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
  padding: var(--space-md);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;

  .navbarLinks {
    list-style: none;
    display: flex;
    gap: var(--space-lg);
    margin: 0;
    padding: 0;

    li {
      a {
        text-decoration: none;
        color: var(--primary-color);
        font-size: var(--font-size-md);
        transition: color 0.3s;

        &:hover {
          color: var(--secondary-color);
        }
      }
    }
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

export const NavigationBar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbarLinks'>
        <li>
          <a href='#overview'>01. Overview</a>
        </li>
        <li>
          <a href='#process'>02. Process</a>
        </li>
        <li>
          <a href='#results'>03. Results</a>
        </li>
        <li>
          <a href='#takeaways'>04. Takeaways</a>
        </li>
      </ul>
    </nav>
  )
}
