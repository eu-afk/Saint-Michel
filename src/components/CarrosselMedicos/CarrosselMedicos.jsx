import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './carrosselMedicos.css';

import drFlavio from '../../img/drFlavio.png';
import drMarcio from '../../img/drMarcio.png';
import draEllen from '../../img/draEllen.png';

const images = [ drFlavio, drMarcio, draEllen, drFlavio, drMarcio, draEllen];

function CarouselMedico() {
  const carousel = useRef();
  const innerCarousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current && innerCarousel.current) {
      const carouselWidth = carousel.current.offsetWidth;
      const innerWidth = innerCarousel.current.scrollWidth;
      setWidth(innerWidth - carouselWidth);
    }
  }, []);

  return (
    <div className='divPrincipal'>
      <motion.div ref={carousel} className='carrosselMedicos' whileTap={{ cursor: "grabbing" }}>
        <motion.div 
          ref={innerCarousel}
          className='inner'
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {images.map((image, index) => (
            <motion.div className='item' key={index}>
              <img src={image} alt={`Imagem ${index + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default CarouselMedico;
