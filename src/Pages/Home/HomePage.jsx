import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

import medicos from '../../img/medicos.png';
import azul from '../../img/azul.png';
import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';

const services = [
    { img: '../src/img/checkup.png', style: 'light' },
    { img: '../src/img/cardiograma.png', style: 'dark' },
    { img: '../src/img/dna.png', style: 'light' },
    { img: '../src/img/bancoSangue.png', style: 'light' }
];

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className='carrossel'>
                <Carousel>
                    <Carousel.Item>
                        <img className='imagem' src={medicos} alt="Imagem um" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='imagem' src={medicos} alt="Imagem dois" />
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="homepage-container">
                <p className='titulo'>BEM VINDO A SAINT-MICHEL</p>
                <h4 className='segundoTitulo'>Um ótimo lugar para receber cuidados</h4>
                <p className='paragrafo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat <br />scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur<br /> proin massa in. Consequat faucibus porttitor enim et.</p>

                <p className='saibaMais'> <a href="">Saiba mais</a>
                    <img className='seta' src="../src/img/seta.png" />
                </p>
                <img className='medico' src="../src/img/medicos.png" />
                <p className='titulo'>CUIDADO EM QUE VOCÊ PODE ACREDITAR</p>
                <h4 className='segundoTitulo'>Nossos Serviços</h4>


            </div >


            <div className="services-container">
                <div className="menu">
                    {services.map((service, index) => (
                        <div key={index} className={`menu-item ${service.style}`}>
                            <img src={service.img} style={{ width: '90px', height: '70px' }} />
                        </div>
                    ))}
                    <div className="ver-tudo">
                        <a href="#">Ver tudo</a>
                    </div>
                </div>

                <h1 className='frase-homepage'>Paixão por colocar os pacientes em </h1>
                <h1 className='frase-homepage'>primeiro lugar.</h1>

                <div className='lista-homepage'>
                    <ul>
                        <li>Uma paixão pela cura</li>
                        <li>Uma legado de exelencia</li>
                        <li>Uma legado de exelencia</li>
                    </ul>
                    <ul>
                        <li>Uma paixão pela cura</li>
                        <li>Uma legado de exelencia</li>
                        <li>Uma legado de exelencia</li>
                    </ul>
                </div>

                <div className='imgLateral'>
                    <img src="../src/img/grupo.png" alt="" />
                    <img src="../src/img/cuidados.png" alt="" />

                </div>

                <div className='segundoParagrafo'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare<br /> ornare  Convallis felis vitae tortor augue. Velit nascetur proin massa in. <br /> Consequat faucibus porttitor enim et.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque.<br /> Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
                </div>

                <div className='subtitulosHome'>
                    <p className='titulo'>SEMPRE CUIDANDO</p>
                    <h4 className='segundoTitulo'>Nossas Especialidades</h4>
                </div>
            </div>
            <Footer />

        </>

    );
};

export default HomePage;