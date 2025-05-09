import { createGlobalStyle } from 'styled-components'
import { media } from './media'

export const GlobalStyle = createGlobalStyle`
:root {
  /* ──── Color Palette ──── */
  --primary-color: #0d453a;
  --secondary-color: #fd6f00;
  --accent-color: #ff904b;
  --background-color: #ffffff;
  --text-color: #202020;

  /* ──── Font Families ──── */
  --text-headlines: 'Josefin Sans', sans-serif;
  --text-body: 'Raleway', serif;

   /* ─── Spacing Scale ─── */
  --space-xxs: 0.25rem;  /* 4px */
  --space-xs:  0.5rem;   /* 8px */
  --space-sm:  1rem;     /* 16px */
  --space-md:  1.5rem;   /* 24px */
  --space-lg:  2rem;     /* 32px */
  --space-xl:  3rem;     /* 48px */
  --space-xxl: 4rem;     /* 64px */
}

 *, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ──────────── Base body styles ──────────── */
body {
  background: var(--background-color);
  color: var(--text-color);
  font-family: var(--text-body);
  margin: 40px 16px 80px;
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
}

@media ${media.largeDesktop} {
  body {        
    margin: 160px 240px 320px;
    }
  }
`
