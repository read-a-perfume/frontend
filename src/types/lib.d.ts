//이곳은 API 타입이 아닌 외부 라이브러리 타입충돌시 타입 선언 하기위한곳
declare module '@storybook/addon-actions/decorator'

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
