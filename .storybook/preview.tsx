import type {Preview} from '@storybook/react'
import {CssBaseline, ThemeProvider} from '@mui/material'
import {theme} from '../src/theme/index'
import React from 'react'
import {withRouter} from 'storybook-addon-react-router-v6'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

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
    reactRouter: {routePath: ''},
  },
}

const client = new QueryClient()

//MUI 테마연동

export const withMuiTheme = Story => {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export const decorators = [withRouter, withMuiTheme]
