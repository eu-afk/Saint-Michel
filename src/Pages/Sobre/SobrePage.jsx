import React from 'react'
import Navbar from '../../components/Navbar/NavBar'
import Footer from '../../components/Footer/Footer'
import './sobrePage.css'

export default function SobrePage() {
    return (
        <>
            <Navbar />
                <img src="../src/img/medicos em sobre.png" alt="" className='img-doutores-sobre'/>
            <Footer />
        </>
    )
}
