import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

import medicos from '../../img/medicos.png';
import azul from '../../img/azul.png';
import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';
import checkup from '../../img/checkup.png';
import cardiograma from '../../img/cardiograma.png';
import dna from '../../img/dna.png';
import bancoSangue from '../../img/bancoSangue.png';
import grupo from '../../img/grupo.png';
import cuidados from '../../img/cuidados.png';
import seta from '../../img/seta.png'

// Importando imagens das especialidades corretamente
import neurologia from '../../img/neurologia.png';
import ortopedia from '../../img/ortopedia.png';
import oncologia from '../../img/oncologia.png';
import otorrino from '../../img/otorrino.png';
import oftalmologia from '../../img/oftalmologia.png';
/* import cardiologia from '../../img/cardiologia.png'; */
import pneumologia from '../../img/pneumologia.png';
import renal from '../../img/renal.png';
/*import gastro from '../../img/gastro.png';
import urologia from '../../img/urologia.png';
import dermatologia from '../../img/dermatologia.png';
import ginecologia from '../../img/ginecologia.png';*/

const services = [
    { img: checkup, style: 'light' },
    { img: cardiograma, style: 'dark' },
    { img: dna, style: 'light' },
    { img: bancoSangue, style: 'light' }
];

const especialidades = [
    { img: neurologia },
    { img: ortopedia, style: 'dark'  },
    { img: oncologia },
    { img: otorrino },
    {img: oftalmologia},
    /* { img: cardiologia, nome: "Cardiovascular" }, */
    { img: pneumologia },
    { img: renal },
    /*{ img: gastro, nome: "Gastroenterologia" },
    { img: urologia, nome: "Urologia" },
    { img: dermatologia, nome: "Dermatologia" }
    { img: ginecologia, nome: "Ginecologia" }*/
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

                <p className='saibaMais'> <a href="#">Saiba mais</a>
                    <img className='seta' src={seta} alt="Seta" />
                </p>
                <img className='medico' src={medicos} alt="Médicos" />
                <p className='titulo'>CUIDADO EM QUE VOCÊ PODE ACREDITAR</p>
                <h4 className='segundoTitulo'>Nossos Serviços</h4>
            </div>

            <div className="services-container">
                <div className="menu">
                    {services.map((service, index) => (
                        <div key={index} className={`menu-item ${service.style}`}>
                            <img src={service.img} style={{ width: '90px', height: '70px' }} alt="Serviço" />
                        </div>
                    ))}
                    <div className="ver-tudo"><a href="#">Ver tudo</a></div>
                </div>

                <h1 className='frase-homepage'>Paixão por colocar os pacientes em primeiro lugar.</h1>

                <div className='lista-homepage'>
                    <ul>
                        <li>Uma paixão pela cura</li>
                        <li>Um legado de excelência</li>
                        <li>Profissionais capacitados</li>
                    </ul>
                    <ul>
                        <li>Ambiente seguro e moderno</li>
                        <li>Atendimento humanizado</li>
                        <li>Tecnologia de ponta</li>
                    </ul>
                </div>

                <div className='imgLateral'>
                    <img src={grupo} alt="Grupo" />
                    <img src={cuidados} alt="Cuidados" />
                </div>

                <div className='segundoParagrafo'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.</p>
                    <p>Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                </div>

                <div className='subtitulosHome'>
                    <p className='titulo'>SEMPRE CUIDANDO</p>
                    <h4 className='segundoTitulo'>Nossas Especialidades</h4>
                </div>


                <div className="especialidades-grid">
                    {especialidades.map((item, index) => (
                        <div
                            key={index}
                            className={`especialidade ${item.nome === "Ortopedia" ? "ortopedia" : ""}`}
                        >
                            <img src={item.img} />
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default HomePage;
