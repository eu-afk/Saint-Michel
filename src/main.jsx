import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './components/Home/homepage'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
