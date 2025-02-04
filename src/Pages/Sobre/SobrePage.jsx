import React from 'react'
import Navbar from '../../components/Navbar/NavBar'
import Footer from '../../components/Footer/Footer'
import './sobrePage.css'

export default function SobrePage() {
    return (
        <>
            <Navbar />
            <img src="../src/img/medicos em sobre.png" alt="" className='img-doutores-sobre' />

            <div className="container-sobre-master">
                <img src="../src/img/medicas em sobre.png" alt="" className='img-medicas-sobre' />
                <div className="child-sobre">

                    <div className="container-sobre">

                        <h1 className='titulo-sobre'>BEM-VINDO AO SAINT-MICHEL</h1>
                        <h1 className='subTitulo-sobre'>Melhor lugar para
                            cuidar da sua saúde! </h1>
                    </div>

                    <div className='container-listas'>
                        <ul>
                            <li>A Passion for Healing</li>
                            <li>All our best</li>
                            <li>Always Caring</li>
                        </ul>

                        <ul>
                            <li>5-Star Care</li>
                            <li>Believe in Us</li>
                            <li>A Legacy of Excellence</li>
                        </ul>
                    </div>

                    <div className="container-texto-sobre">

                        <p className="texto-sobre">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam doloremque quam, dicta eius debitis nulla odio fugiat a illum cupiditate illo iusto porro, laudantium quis error at nisi soluta quia!
                        </p>
                        
                        <p className="texto-sobre">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam doloremque quam, dicta eius debitis nulla odio fugiat a illum cupiditate illo iusto porro, laudantium quis error at nisi soluta quia!
                        </p>

                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}
