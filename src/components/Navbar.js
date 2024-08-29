import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegación
import './Navbar.css'; // Asegúrate de tener este archivo para estilos
import logo from '../imagenes/logo.png'; // Asegúrate de que esta ruta sea correcta

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/menu">Menú</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
