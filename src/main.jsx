import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Route.jsx'
import { StateContextProvider } from './contexts/StateContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateContextProvider>
         <RouterProvider router={router} />
    </StateContextProvider>
  </StrictMode>,
)
