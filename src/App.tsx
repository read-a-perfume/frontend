import {RouterProvider} from 'react-router-dom'
import {router} from './router'
import { Box } from '@mui/material'
import { Suspense } from 'react'

const App = () => {
  return (
    <Suspense fallback={<Box width="100%" height="100vh" />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
