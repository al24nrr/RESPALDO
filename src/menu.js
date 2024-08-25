import React, { useState, useEffect } from 'react';
import './App.css';


const Navbar = () => {
    const handleLinkClick = (url, e) => {
      e.preventDefault();
      window.open(url, "_blank"); // Abre la página en una nueva pestaña
    };
  
    return (
      <>
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
        <Carousel />
        <ImageBelowCarousel />
        <Footer />
      </>
    );
  };






  

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

export default Navbar;
