import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {RecoilRoot} from 'recoil'
import {CssBaseline, ThemeProvider as MuiThemeProvider} from '@mui/material'
import {Global} from '@emotion/react'
import globalReset from '@theme/global-reset'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {theme} from '@theme/index'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: true,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen />
      <RecoilRoot>
        <MuiThemeProvider theme={theme}>
          <Global styles={globalReset} />
          <CssBaseline />
          <App />
        </MuiThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
)
