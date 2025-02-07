import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

import medicos from '../../img/medicos.png';
import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';
import checkup from '../../img/checkup.png';
import cardiograma from '../../img/cardiograma.png';
import dna from '../../img/dna.png';
import bancoSangue from '../../img/bancoSangue.png';
import grupo from '../../img/grupo.png';
import cuidados from '../../img/cuidados.png';


import neurologia from '../../img/neurologia.png';
import coracao from '../../img/coracao.png';
import oncologia from '../../img/oncologia.png';
import otorrino from '../../img/otorrino.png';
import oftalmologia from '../../img/oftalmologia.png';
import cardiologia from '../../img/cardiologia.png';
import pneumologia from '../../img/pneumologia.png';
import renal from '../../img/renal.png';
import gastro from '../../img/gastro.png';
import urologia from '../../img/urologia.png';
import dermatologia from '../../img/dermatologia.png';
import ginecologia from '../../img/ginecologia.png';
import { Link } from 'react-router-dom';
import Doutores from '../../components/Doutores/Doutores'
import Contato from '../../components/Contato/Contato'


const services = [
    { img: checkup, style: 'light' },
    { img: cardiograma, style: 'dark' },
    { img: dna, style: 'light' },
    { img: bancoSangue, style: 'light' }
];

const especialidades = [
    { img: neurologia },
    { nome: "Ortopedia", img: coracao },
    { img: oncologia },
    { img: otorrino },
    { img: oftalmologia },
    { img: cardiologia },
    { img: pneumologia },
    { img: renal },
    { img: gastro },
    { img: urologia },
    { img: dermatologia },
    { img: ginecologia }
];

const HomePage = () => {
    return (
        <>
            <Navbar />

            {/* Carrossel */}
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



            {/* Começo da página */}
            <div className="homepage-container">
                <p className='titulo'>BEM VINDO A SAINT-MICHEL</p>
                <h4 className='segundoTitulo'>Um ótimo lugar para receber cuidados</h4>
                <p className='paragrafoHome'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat <br />scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur<br /> proin massa in. Consequat faucibus porttitor enim et.</p>
                <p className='saibaMais'> <Link to='/servicos'>Saiba mais</Link>
                    <img className='seta' src="../src/img/seta.png" />
                </p>

                {/*   Primeira Imagem */}
                <img className='medico' src={medicos} />


            </div>


            {/* Subtitulo */}
            <p className='titulo'>CUIDADO EM QUE VOCÊ PODE ACREDITAR</p>
            <h4 className='segundoTitulo'>Nossos Serviços</h4>

            <div className='conjunto-nossos-servicos'>
                {/* Serviços */}
                <div className="menu-servicos-homepage">
                    {services.map((service, index) => (
                        <div key={index} className={`menu-item-homepage ${service.style}`}>
                            <img src={service.img} style={{ width: '90px', height: '70px' }} alt="Serviço" />
                        </div>))}
                    <div className="ver-tudo"><a href="#">Ver tudo</a></div>
                </div>


                <div className=''>
                    {/*  Frase Principal */}
                    <br />
                    <h1 className='frase-homepage'>Paixão por colocar os pacientes em primeiro lugar.</h1>

                    {/* Lista de Serviços */}
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
                    {/* Segundo Paragrafo */}
                    <div className='segundoParagrafoHome'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.</p>
                        <p>Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                    </div>
                </div>

                {/* Imagens Laterais */}
                <div className='imgLateral'>
                    <img src={grupo} alt="Grupo" />
                    <img src={cuidados} alt="Cuidados" />
                </div>
            </div>





            {/* Subtitulos */}
            <div className='subtitulosHome'>
                <p className='titulo'>SEMPRE CUIDANDO</p>
                <h4 className='segundoTitulo'>Nossas Especialidades</h4>
            </div>



            {/*  Especialidades  */}
            <div className="especialidades-grid">
                {especialidades.map((item, index) => (
                    <div
                        key={index}
                        className={`especialidade ${item.nome === "Ortopedia" ? "ortopedia" : ""}`}
                    >
                        <img src={item.img} alt={item.nome} />
                        <p>{item.nome}</p>
                    </div>
                ))}
                <div>
                </div>
            </div>

            {/* Segunda Imagem*/}
            <img className='medicoBranco' src="../src/img/medicoBranco.png" />
            <Doutores />
            <Contato />
            <Footer />

        </>
    );
};

export default HomePage;
