
// import LoginPage from "./components/Login/LoginPage"
import './index.css'
import Footer from "./components/Footer/Footer"
import NavBar from "./components/Navbar/NavBar"
import HomePage from "../src/Pages/Home/HomePage"
import './index.css'
import Login from "./Pages/Login/LoginPage"
import SobrePage from "./Pages/Sobre/SobrePage"
import Servicos from "./Pages/Serviços/Servicos"
import Medico from './Pages/Medicos/Medico'
import Doutores from './components/Doutores/Doutores'

function App() {

  return (
    <>
      <Medico/>
      {/* <Servicos /> */}
      <SobrePage />
      <Servicos />
    </>
  )
}

export default App
