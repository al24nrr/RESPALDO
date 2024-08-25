import React from 'react';
import './App.css';

// Definimos el componente Navbar
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

export default Navbar;
