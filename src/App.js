import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Definimos el Navbar
const Navbar = () => {
  const handleLinkClick = (url, e) => {
    e.preventDefault();
    window.open(url, "_blank"); // Abre la página en una nueva pestaña
  };

  return (
    <nav className="navbar">
      <img src={require('./imagenes/logo.png')} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li>
          <a href="#promociones" onClick={(e) => handleLinkClick('/promociones', e)}>
            Promociones
          </a>
        </li>
        <li>
          <a href="#menu" onClick={(e) => handleLinkClick('/menu', e)}>
            Menú
          </a>
        </li>
        <li>
          <a href="#combos" onClick={(e) => handleLinkClick('/combos', e)}>
            Combos
          </a>
        </li>
      </ul>
    </nav>
  );
};

// Definimos el Carousel
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    require('./imagenes/cs1.png'),
    require('./imagenes/c2.png'),
    require('./imagenes/c3.png')
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="carousel-item" key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}>❮</button>
      <button className="carousel-control next" onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>❯</button>
    </div>
  );
};

// Imagen debajo del carrusel
const ImageBelowCarousel = () => {
  const imgindx = require('./imagenes/imgindx.png');

  return (
    <img src={imgindx} alt="Imagen debajo del carousel" className="imagen-debajo-carousel" />
  );
};

// Definimos el Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 HBB Hamburguesas Bogotá</p>
        <ul className="footer-links">
          <li><a href="#">Acerca de nosotros</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Política de privacidad</a></li>
        </ul>
      </div>
    </footer>
  );
};

// Componente para la página de inicio
const Home = () => {
  return (
    <>
      <Carousel />
      <ImageBelowCarousel />
    </>
  );
};

// Componente para la página del menú
const Menu = () => {
  return (
    <div>
      <h1>Menú</h1>
      <p>Bienvenido al menú de nuestras deliciosas hamburguesas.</p>
      {/* Aquí puedes agregar el contenido específico del menú */}
    </div>
  );
};

// Componente principal App
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
