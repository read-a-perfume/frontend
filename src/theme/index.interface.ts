import { ThemeOptions } from "@mui/material"

export interface Palette {
  primary: {
    '100': string
    light: string
    main: string
    dark: string
  }
  secondary: {
    main: string
  }
  info: {
    main: string
  }
  success: {
    main: string
  }
  warning: {
    main: string
  }
  error: {
    '100': string
    light: string
    main: string
    dark: string
  }
  grey: {
    '100': string
    '200': string
    '300': string
    '400': string
    '500': string
    '600': string
    '700': string
    '800': string
  }
}

// 폰트 스타일 타입 정의
export interface Typography {
  fontFamily: string
  htmlFontSize: number
  hero: {
    fontSize: string
    fontWeight: number
  }
  h1: {
    fontSize: string
    fontWeight: number
  }
  h2: {
    fontSize: string
    fontWeight: number
  }
  h3: {
    fontSize: string
    fontWeight: number
  }
  h4: {
    fontSize: string
    fontWeight: number
  }
  body1: {
    fontSize: string
  }
  body2: {
    fontSize: string
  }
  body3: {
    fontSize: string
  }
  body4: {
    fontSize: string
  }
  body5: {
    fontSize: string
  }
}

export type CustomThemeOptions = ThemeOptions & {
  palette: Palette
  typography: Typography
}
