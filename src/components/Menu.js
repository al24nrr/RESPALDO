// src/components/Menu.js
import React from 'react';
import './Menu.css';
// Imágenes (asegúrate de usar las rutas correctas)
import clasica from '../imagenes/clasica.jpg';
import bbq from '../imagenes/bbq.jpg';
import vegana from '../imagenes/vegana.jpg';
import pollo from '../imagenes/pollo.jpg';
import papas from '../imagenes/papas.png'; // Importa la imagen de papas
import gaseosa from '../imagenes/gaseosa.jpg'; // Importa la imagen de gaseosa

const Menu = () => {
    return (
        <div className="menu-container">
            <h1>Menú de Hamburguesas </h1>

            <div className="burger-card">
                <img src={clasica} alt="Hamburguesa Clásica" className="burger-img" />
                <h2>Hamburguesa Clásica</h2>
                <p>Una fusión exquisita de carne de res de primera, complementada con lechuga fresca, tomate maduro y queso cheddar.</p>
                <p className="price">$15,000 COP</p>
            </div>

            <div className="burger-card">
                <img src={bbq} alt="Hamburguesa BBQ" className="burger-img" />
                <h2>Hamburguesa BBQ</h2>
                <p>Saborea nuestra jugosa carne de res bañada en una rica salsa BBQ, con cebolla caramelizada y queso cheddar fundido perfectamente.</p>
                <p className="price">$17,000 COP</p>
            </div>

            <div className="burger-card">
                <img src={vegana} alt="Hamburguesa Vegana" className="burger-img" />
                <h2>Hamburguesa Vegana</h2>
                <p>Disfruta de una opción saludable con nuestra hamburguesa hecha de garbanzos y especias, servida con vegetales orgánicos frescos.</p>
                <p className="price">$16,000 COP</p>
            </div>

            <div className="burger-card">
                <img src={pollo} alt="Hamburguesa de Pollo" className="burger-img" />
                <h2>Hamburguesa de Pollo</h2>
                <p>Saborosa pechuga de pollo a la parrilla, acompañada de una suave mayonesa, lechuga crujiente y tomate fresco.</p>
                <p className="price">$15,500 COP</p>
            </div>

            <h2>Adicionales</h2>
            <div className="burger-card">
                <img src={papas} alt="Papas Fritas" className="burger-img" />
                <h2>Papas Fritas</h2>
                <p>Crujientes papas fritas doradas a la perfección. </p>
                <p className="price">$5,000 COP</p>
            </div>

            <div className="burger-card">
                <img src={gaseosa} alt="Gaseosa" className="burger-img" />
                <h2>Gaseosa</h2>
                <p>Refrescante gaseosa de tu elección.</p>
                <p className="price">$3,000 COP</p>
            </div>
        </div>
    );
};

export default Menu;
