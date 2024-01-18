import createTheme from '@mui/material/styles/createTheme'
import {Palette, Typography, CustomThemeOptions} from './index.interface'

declare module '@mui/material/styles' {
  interface PaletteColor {
    '100': string
  }
  interface TypographyVariants {
    hero: React.CSSProperties
    body3: React.CSSProperties
    body4: React.CSSProperties
    body5: React.CSSProperties
  }
}

// // // Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    hero: true
    body3: true
    body4: true
    body5: true
  }
}

const palette: Palette = {
  primary: {
    main: '#FE7156',
  },
  secondary: {
    main: '#0B0B0B',
  },
  grey: {
    '100': '#F8F8FA',
    '200': '#F1F1F5',
    '300': '#EDEDED',
    '400': '#DBDBDB',
    '500': '#D2D2D2',
    '600': '#A9A9A9',
  },
}

const typography: Typography = {
  fontFamily: ['Pretendard', 'sans-serif'].join(','),
  htmlFontSize: 16,
  hero: {
    // 42px
    fontSize: '2.625rem',
    fontWeight: 600,
  },
  h1: {
    // 28px
    fontSize: '1.75rem',
    fontWeight: 600,
  },
  h2: {
    // 24px
    fontSize: '1.375rem',
    fontWeight: 600,
  },
  h3: {
    // 22px
    fontSize: '1.25rem',
    fontWeight: 600,
  },
  h4: {
    // 20px
    fontSize: '1.25rem',
    fontWeight: 300,
  },
  body1: {
    // 18px
    fontSize: '1.125rem',
  },
  body2: {
    // 16px
    fontSize: '1rem',
  },
  body3: {
    // 14px
    fontSize: '0.875rem',
  },
  body4: {
    // 12px
    fontSize: '0.8125rem',
  },
  body5: {
    // 10px
    fontSize: '0.75rem',
  },
}

const customTheme: CustomThemeOptions = {
  typography,
  palette,
}

export const theme = createTheme(customTheme)
