import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <h5 className="text-uppercase">Sobre nosotros</h5>
            <p>
             En La Parrilla nos dedicamos a llevar las mejores hamburguesas directamente a tu
             puerta con solo unos clics. Nuestro objetivo es ofrecer una experiencia rápida y deliciosa,
              donde cada pedido se prepara con ingredientes frescos y de calidad. Ya sea que estés en
              casa o en la oficina, disfrutar de nuestras hamburguesas es tan fácil como
               hacer un pedido desde tu dispositivo.
             ¡Bienvenido a la nueva forma de disfrutar tu hamburguesa favorita!"
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase">Enlaces rápidos</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-dark">Inicio</Link></li>
              <li><Link to="/menu" className="text-dark">Menú</Link></li>
              <li><Link to="/registro" className="text-dark">Registrarse</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        © 2024 La Parrilla
      </div>
    </footer>
  );
}

export default Footer;
