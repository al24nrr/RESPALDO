import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import './Home.css'; // Importa los estilos específicos de Home
import cs1 from '../imagenes/cs1.png';
import c2 from '../imagenes/c2.png';
import c3 from '../imagenes/c3.png';
import fotoh from '../imagenes/fotoh.png';
import fotod from '../imagenes/fotod.png';

function Home() {
  return (
    <div className="container mt-5">
      {/* Carrusel de imágenes */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cs1} className="d-block w-100" alt="cs1" />
          </div>
          <div className="carousel-item">
            <img src={c2} className="d-block w-100" alt="c2" />
          </div>
          <div className="carousel-item">
            <img src={c3} className="d-block w-100" alt="c3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Imágenes simétricas debajo del carrusel */}
      <div className="imagenes-simetricas">
        <img src={fotoh} alt="Foto izquierda" />
        <img src={fotod} alt="Foto derecha" />
      </div>
    </div>
  );
}

export default Home;
