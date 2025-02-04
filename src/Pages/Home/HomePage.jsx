import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

import medicos from '../../img/medicos.png';
import azul from '../../img/azul.png';
import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';

const services = [
    { name: 'Checkup', icon: 'checkup-icon.png', style: 'light' },
    { name: 'Cardiograma', icon: 'cardiograma-icon.png', style: 'dark' },
    { name: 'Teste de DNA', icon: 'teste-dna-icon.png', style: 'light' },
    { name: 'Banco de Sangue', icon: 'banco-sangue-icon.png', style: 'light' }
];    

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="homepage-container">
                <div className="main-content">
                    <div className='carrossel'>
                        <Carousel>
                            <Carousel.Item>
                                <img className='imagem' src={medicos} alt="Imagem um" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='imagem'  src={medicos} alt="Imagem dois" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <p className='titulo'>BEM VINDO A SAINT-MICHEL</p>
                    <h4 className='segundoTitulo'>Um ótimo lugar para receber cuidados</h4>
                    <p className='paragrafo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat <br />scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur<br /> proin massa in. Consequat faucibus porttitor enim et.</p>

                    <p className='saibaMais'> <a href="">Saiba mais</a>
                        <img className='seta' src="../src/img/seta.png"  />
                    </p>
                    <img className='medicos' src="../src/img/medicos.png"  />
                    <p className='titulo'>CUIDADO EM QUE VOCÊ PODE ACREDITAR</p>
                    <h4 className='segundoTitulo'>Nossos Serviços</h4>
                </div>
                <div className="services-container">
                    <div className="menu">
                        {services.map((service, index) => (
                            <div key={index} className={`menu-item ${service.style}`}>
                                <img src={service.icon} alt={service.name} />
                                {service.name}
                            </div>
                        ))}
                        <div className="footer"><a href="">Ver tudo</a></div>
                    </div>
                </div>
                <p className='frase'>Paixão por colocar nossos pacientes em primeiro lugar.</p>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;