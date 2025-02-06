import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './Pages/Home/HomePage.jsx'
import Sobre from './Pages/Sobre/SobrePage.jsx'
import Servicos from './Pages/Serviços/Servicos.jsx'
import Doutores from './Pages/Medicos/Medico.jsx'
import Contatos from './Pages/Contatos/Contato.jsx'
import ErroPage from './components/PaginaDeErro/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErroPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/sobre",
        element: <Sobre />
      },
      {
        path: "/servicos",
        element: <Servicos />
      },
      {
        path: "/doutores",
        element: <Doutores />
      },
      {
        path: "/contato",
        element: <Contatos />
      },
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
