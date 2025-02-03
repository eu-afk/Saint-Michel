import React from 'react'
import './Navbar.css'


const NavBar = () => {
  return (  
    <header className="header">
      
      <a href="/" className="logo">LOGO</a>
     

      <nav className="navbar">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Portfolio</a>
            <a href="/">Services</a>
            <a href="/">Contact</a>
            </nav>
    </header>  
  )
}

export default NavBar