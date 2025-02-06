import React from "react";
import { FaPhone, FaClock, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

import "./Navbar.css"; // Importando o CSS

export default function Navbar() {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo">
          <img src="" alt="" />
          <img src="../src/img/logo 2.png" alt="" className="logo" />
          {/* <span className="hospital-name">HOSPITAL SAINT-MICHEL</span>
          <span className="tagline">Cuidar de você é nossa missão divina.</span> */}
        </div>
        <div className="contact-info">
          <div className="info-item">
            <FaPhone />
            <span>EMERGÊNCIA (11) 6818-1255</span>
          </div>
          <div className="info-item">
            <FaClock />
            <span>HORÁRIO DE TRABALHO 09:00 - 20:00 Todo dia</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt />
            <span>LOCALIZAÇÃO Av. Marechal Tito, 3400</span>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-links">
          <Link to='/'>Home</Link>
          <Link to='/sobre'>Sobre</Link>
          <Link to='/servicos'>Servicos</Link>
          <Link to='/doutores'>Doutores</Link>
          <Link to='/contato'>Contato</Link>
        </div>
        <div className="nav-actions">
          <FaSearch className="search-icon" />
          <button className="login-button">LOGIN</button>
        </div>
      </nav>
    </header>
  );
}
