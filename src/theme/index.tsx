import {createTheme} from '@mui/material'
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
    '100': '#F1E8BD', //disabled
    light: '#FD8142',
    main: '#FE7156',
    dark: '#FF5838',
  },
  secondary: {
    main: '#379070',
  },
  info: {
    main: '#5D9EFF',
  },
  success: {
    main: '#9EFF5D',
  },
  warning: {
    main: '#FF763B',
  },
  error: {
    '100': '#FFC8CD', //disabled
    light: '#F16464',
    main: '#FF3B3B',
    dark: '#DF0014',
  },
  grey: {
    '100': '#FAFAFA', //1
    '200': '#EFEFEF', //2
    '300': '#E7E7E7', //3
    '400': '#B4B4B4', //4
    '500': '#707070', //5
    '600': '#212121', //5-1
    '700': '#303030', //6
    '800': '#131313', //7
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
