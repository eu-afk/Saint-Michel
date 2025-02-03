import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './components/Home/homepage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
)
