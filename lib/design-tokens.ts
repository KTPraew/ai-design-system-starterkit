/**
 * Design Tokens - Centralized design system values
 * Use these tokens for consistency across the application
 */

// Color Tokens
export const colors = {
  // Primary Colors
  primary: {
    50: 'oklch(0.975 0 0)',
    100: 'oklch(0.95 0 0)',
    200: 'oklch(0.9 0 0)',
    300: 'oklch(0.8 0 0)',
    400: 'oklch(0.6 0 0)',
    500: 'oklch(0.4 0 0)',
    600: 'oklch(0.3 0 0)',
    700: 'oklch(0.25 0 0)',
    800: 'oklch(0.205 0 0)',
    900: 'oklch(0.145 0 0)',
    950: 'oklch(0.1 0 0)',
  },
  // Semantic Colors
  success: 'oklch(0.646 0.222 41.116)',
  warning: 'oklch(0.828 0.189 84.429)',
  error: 'oklch(0.577 0.245 27.325)',
  info: 'oklch(0.6 0.118 184.704)',
  // Neutral/Gray Colors
  gray: {
    50: 'oklch(0.985 0 0)',
    100: 'oklch(0.97 0 0)',
    200: 'oklch(0.922 0 0)',
    300: 'oklch(0.87 0 0)',
    400: 'oklch(0.708 0 0)',
    500: 'oklch(0.556 0 0)',
    600: 'oklch(0.4 0 0)',
    700: 'oklch(0.3 0 0)',
    800: 'oklch(0.205 0 0)',
    900: 'oklch(0.145 0 0)',
    950: 'oklch(0.05 0 0)',
  },
}

// Typography Tokens
export const typography = {
  // Font Families
  fontFamily: {
    sans: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },
  // Font Sizes
  fontSize: {
    xs: ['12px', { lineHeight: '16px' }],
    sm: ['14px', { lineHeight: '20px' }],
    base: ['16px', { lineHeight: '24px' }],
    lg: ['18px', { lineHeight: '28px' }],
    xl: ['20px', { lineHeight: '28px' }],
    '2xl': ['24px', { lineHeight: '32px' }],
    '3xl': ['30px', { lineHeight: '36px' }],
    '4xl': ['36px', { lineHeight: '40px' }],
    '5xl': ['48px', { lineHeight: '48px' }],
  },
  // Font Weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  // Letter Spacing
  letterSpacing: {
    tight: '-0.02em',
    normal: '0em',
    wide: '0.02em',
    wider: '0.05em',
  },
}

// Spacing Tokens
export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
}

// Border Radius Tokens
export const borderRadius = {
  none: '0',
  sm: 'calc(var(--radius) - 4px)',
  base: 'calc(var(--radius) - 2px)',
  md: 'var(--radius)',
  lg: 'calc(var(--radius) + 4px)',
  xl: 'calc(var(--radius) + 8px)',
  '2xl': 'calc(var(--radius) + 12px)',
  '3xl': 'calc(var(--radius) + 16px)',
  full: '9999px',
}

// Shadow Tokens (Elevation)
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
}

// Duration Tokens (Animations)
export const durations = {
  fast: '150ms',
  base: '200ms',
  slow: '300ms',
  slower: '500ms',
}

// Z-Index Tokens
export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
}

// Breakpoints (Responsive)
export const breakpoints = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}
