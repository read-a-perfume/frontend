import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import CssBaseline from '@mui/material/CssBaseline'
import {ThemeProvider as MuiThemeProvider} from '@mui/material'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {theme} from '@theme/index'
import App from './App.tsx'
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
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
