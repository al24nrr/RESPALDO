import React from 'react';
import './Menu.css';
import Vegana from '../imagenes/Vegana.png';
import Bbq from '../imagenes/Bbq.png';
import Clasica from '../imagenes/Clasica.png';
import Pollo from '../imagenes/Pollo.png';

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-item">
        <img src={Vegana} alt="Hamburguesa Vegana" />
        <h3>VEGANA</h3>
        <p>$13.000</p>
      </div>
      <div className="menu-item">
        <img src={Bbq} alt="Hamburguesa BBQ" />
        <h3>BBQ</h3>
        <p>$18.000</p>
      </div>
      <div className="menu-item">
        <img src={Clasica} alt="Hamburguesa Clásica" />
        <h3>CLASICA</h3>
        <p>$16.000</p>
      </div>
      <div className="menu-item">
        <img src={Pollo} alt="Hamburguesa de Pollo" />
        <h3>POLLO</h3>
        <p>$20.000</p>
      </div>
    </div>
  );
}

export default Menu;
