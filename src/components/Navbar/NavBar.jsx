import React from 'react'
import './Navbar.css'


const NavBar = () => {
  return (
    <>
    <nav>
      <div className='container-header'><img src='./src/assets/img/logo.png' alt="" className='logo-first'/></div>
      </nav>
      <header className="header">
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Portfolio</a>
          <a href="/">Services</a>
          <a href="/">Contact</a>
        </nav>
      </header>
    </>
  )
}

export default NavBar