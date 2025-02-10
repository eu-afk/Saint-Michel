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
          <img src="../src/img/LogoAzul.png" alt="Logo" className="logo" />
          <img src="../src/img/fraseAzul.png" alt="Logo" className="logo-frase" />
        </div>
        <div className="contact-info">
          <div className="info-item">
            <img src="src/img/icons8-volume-da-campainha-30.png " alt="Phone" className="icon-img" />
            <span>EMERGÊNCIA
              <br /> (11) 6818-1255</span>
          </div>
          <div className="info-item">
            <img src="src/img/icons8-relógio-30.png" alt="Clock" className="icon-img" />
            <span>HORÁRIO DE TRABALHO
              <br />
              09:00 - 20:00 Todo dia</span>
          </div>
          <div className="info-item">
            <img src="src/img/icons8-marcador-30.png" alt="Location" className="icon-img" />
            <span>LOCALIZAÇÃO
              <br />
              Av. Marechal Tito, 3400</span>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-links">
          <Link to='/'>Home</Link>
          <Link to='/sobre'>Sobre</Link>
          <Link to='/servicos'>Serviços</Link>
          <Link to='/doutores'>Doutores</Link>
          <Link to='/agendamentos'>Agendamentos</Link>
          <Link to='/contato'>Contato</Link>
        </div>
        <div className="nav-actions">
          <FaSearch className="search-icon" />
          <button className="login-button">LOGIN</button>
        </div>
        <div className="nav-actions">
          <FaSearch className="search-icon" />
          <button className="login-button">
            <Link to='/cadastro'>Cadastro</Link>
          </button>
        </div>
      </nav>
    </header>
  );
}
