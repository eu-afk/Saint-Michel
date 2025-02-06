import React from 'react';
import './Contato.css';
import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';

const Contatos = () => {
  return (
    <>
      <Navbar />
      <img src="../src/img/Contatos.png" className="img-servicos" alt="Logo Servicos" />

      
      
      <div className="contato-container">
        <div className="map-container">
          <iframe
            title="Localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0192186343984!2d-122.41941518468147!3d37.77492977975914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cba3f0e2f%3A0x4c4e4c4c4c4c4c4c!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sbr!4v1615395398274!5m2!1sen!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contatos;
