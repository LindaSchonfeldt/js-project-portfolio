import { createGlobalStyle } from 'styled-components'
import { media } from './media'

export const GlobalStyle = createGlobalStyle`
:root {
  --primary-color: #0d453a;
  --secondary-color: #fd6f00;
  --accent-color: #ff904b;
  --background-color: #ffffff;
  --text-color: #202020;
  --text-headlines: 'Josefin Sans', sans-serif;
  --text-body: 'Raleway', serif;
}

 *, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ──────────── Base body styles ──────────── */
body {
  background: var(--color-background);
  color: var(--color-text);
  font-family: var(--text-body);
  margin: 40px 16px 80px;
} 

/* ──────────── Breakpoint overrides ──────────── */
@media ${media.tablet} {
  body {
    margin: 80px 64px 160px;
  }
}

@media ${media.desktop} {
  body {
    margin: 120px 180px 240px;
  }

  h2 {
    font-size: 5rem;
    margin-bottom: 2rem;
  }
}

@media ${media.largeDesktop} {
  body {        
    margin: 160px 240px 320px;
    }
  }

  /* ──────────── Other globals ──────────── */
  h1, h2, h3, h4 {
    font-family: var(--text-headlines);
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  ul { list-style: none;}
  li { margin-bottom: 0.5rem; line-height: 1.2; }
  p { margin-bottom: 1rem; line-height: 1.5; }

  /* Section titles */
  .sectionTitle {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
  }

  /* Accessibility helper */
  .visuallyHidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
  }
`
