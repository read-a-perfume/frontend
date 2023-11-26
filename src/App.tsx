import {RouterProvider} from 'react-router-dom'
import {router} from './router'
import GlobalProvider from '@layouts/global-provider'

const App = () => {
  return (
    <GlobalProvider>
      <RouterProvider router={router} />;
    </GlobalProvider>
  )
}

export default App
