import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {useQueryErrorResetBoundary} from '@tanstack/react-query'
import {CssBaseline, ThemeProvider as MuiThemeProvider} from '@mui/material'
import {ThemeProvider as EmotionThemeProvider} from '@emotion/react'
import {Global} from '@emotion/react'
import globalReset from '@theme/global-reset'
import {RecoilRoot} from 'recoil'
import {ErrorBoundary} from 'react-error-boundary'
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

interface ProviderProps {
  children: React.ReactNode
}

interface Props {
  children: React.ReactNode
}

const QueryErrorBoundary = ({children}: Props) => {
  const {reset} = useQueryErrorResetBoundary() // (*)

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({resetErrorBoundary}) => (
        <div>
          Error!!
          <button onClick={() => resetErrorBoundary()}>Try again</button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  )
}

const EmotionTheme = ({children}: Props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <Global styles={globalReset} />
        <CssBaseline />
        {children}
      </EmotionThemeProvider>
    </MuiThemeProvider>
  )
}

const GlobalProvider = ({children}: ProviderProps) => {
  return (
    <QueryClientProvider client={client}>
      <QueryErrorBoundary>
        <RecoilRoot>
          <EmotionTheme>{children}</EmotionTheme>
        </RecoilRoot>
      </QueryErrorBoundary>
    </QueryClientProvider>
  )
}

export default GlobalProvider
