import type {Preview} from '@storybook/react'
import {CssBaseline, ThemeProvider} from '@mui/material'
import {theme} from '../src/theme/index'
import React from 'react'

export const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

//MUI 테마연동

export const withMuiTheme = Story => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [withMuiTheme]
