import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import "./Footer.css"; // Importando o CSS

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h1>SM</h1>
          <p>Cuidar de você é nossa missão divina</p>
        </div>


        <div className="footer-links">
          <h3>Links Importantes</h3>
          <ul>
            <li><a href="#">Agendamentos</a></li>
            <li><a href="#">Doutores</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Sobre nós</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Fale Conosco</h3>
          <p>Telefone: (11) 6818-1255</p>
          <p>Email: saintmichel@gmail.com</p>
          <p>Endereço: Av. Marechal Tito, 3400</p>
          <p>Brasil</p>
        </div>

        <div className="footer-newsletter">
          <h3>Informações</h3>
          <div className="newsletter-box">
            <input type="email" placeholder="Digite seu email aqui:" />
            <button><FaPaperPlane /></button>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025 Direitos reservados hospital Saint-Michel by PNTEC-LTD</p>
        <div className="footer-partners">
          <span>Parcerias:</span> <strong>Libbs</strong>
        </div>
        <div className="footer-social">
          <FaLinkedin />
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
}
