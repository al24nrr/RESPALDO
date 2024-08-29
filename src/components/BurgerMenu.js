import React from 'react';
import { useNavigate } from 'react-router-dom';
import hamburguesaClasica from '../imagenes/clasica.png';
import hamburguesaBBQ from '../imagenes/bbq.png';
import hamburguesaVegana from '../imagenes/vegana.png';
import './BurgerMenu.css'; // Asegúrate de que la ruta sea correcta

const burgers = [
  {
    name: 'Hamburguesa Clásica',
    description: 'Carne de res, lechuga, tomate y cebolla.',
    imageUrl: hamburguesaClasica,
  },
  {
    name: 'Hamburguesa BBQ',
    description: 'Carne de res con salsa BBQ y cebolla caramelizada.',
    imageUrl: hamburguesaBBQ,
  },
  {
    name: 'Hamburguesa Vegana',
    description: 'Hamburguesa de garbanzos con aguacate y espinacas.',
    imageUrl: hamburguesaVegana,
  },
];

const BurgerMenu = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order');
  };

  return (
    <div className="burger-menu-container">
      <h1>Menú de Hamburguesas</h1>
      {burgers.map((burger, index) => (
        <div key={index} className="burger-item">
          <h2>{burger.name}</h2>
          <img src={burger.imageUrl} alt={burger.name} className="burger-image" />
          <p>{burger.description}</p>
        </div>
      ))}
      <button className="order-button" onClick={handleOrderClick}>
        Pedir
      </button>
    </div>
  );
}

export default BurgerMenu;
