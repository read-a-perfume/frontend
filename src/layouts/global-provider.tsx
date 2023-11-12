import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {useQueryErrorResetBoundary} from '@tanstack/react-query' // (*)
import {ErrorBoundary} from 'react-error-boundary' // (*)
import {ThemeProvider} from '@mui/material'
import {Global} from '@emotion/react'
import globalReset from '@theme/global-reset.js'
import {theme} from '@theme/index.js'

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

const GlobalProvider = ({children}: ProviderProps) => {
  return (
    <QueryClientProvider client={client}>
      <QueryErrorBoundary>
        <Global styles={globalReset} />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </QueryErrorBoundary>
    </QueryClientProvider>
  )
}

export default GlobalProvider
