import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'; // Asegúrate de tener este archivo

// Asegúrate que las rutas son correctas
import hamburguesa1 from '../imagenes/cs1.png';
import hamburguesa2 from '../imagenes/c2.png';
import hamburguesa3 from '../imagenes/c3.png';
import otraImagen from '../imagenes/mpd.png'; // Imagen existente
import fotoh from '../imagenes/fotoh.png'; // Nueva imagen para el lado derecho

const Home = () => {
  return (
    <div>
      {/* Carrusel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hamburguesa1} // Usar la imagen importada
            alt="Hamburguesa 1"
          />
          <Carousel.Caption>
            {/* Aquí puedes añadir texto si lo deseas */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hamburguesa2} // Usar la imagen importada
            alt="Hamburguesa 2"
          />
          <Carousel.Caption>
            {/* Aquí puedes añadir texto si lo deseas */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hamburguesa3} // Usar la imagen importada
            alt="Hamburguesa 3"
          />
          <Carousel.Caption>
            {/* Aquí puedes añadir texto si lo deseas */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Contenedor de imágenes */}
      <div className="image-container">
        <img 
          className="img-fluid image-left" 
          src={otraImagen} // Imagen existente
          alt="Otra hamburguesa" 
        />
        
        <img
          className="img-fluid image-right"
          src={fotoh} // Nueva imagen para el lado derecho
          alt="Fotoh" 
        />
      </div>
    </div>
  );
};

export default Home;
