import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

import medico from '../../assets/images/medico.png';
import azul from '../../assets/images/azul.png';

function HomePage() {
    return (
        <div className='carrossel'>
            <Carousel>
                <Carousel.Item>
                    <img src={medico} alt="Imagem um" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={medico} alt="Imagem dois" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default HomePage;
