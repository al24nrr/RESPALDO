import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BurgerMenu from './components/BurgerMenu';
import OrderForm from './components/OrderForm'; // Importa el formulario de pedido
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Importa el Footer

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Aquí debe estar el Navbar */}

        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta principal */}
          <Route path="/menu" element={<BurgerMenu />} /> {/* Ruta para el menú de hamburguesas */}
          <Route path="/order" element={<OrderForm />} /> {/* Ruta para el formulario de pedido */}
        </Routes>

        <Footer /> {/* Añade el Footer aquí */}
      </div>
    </Router>
  );
}

export default App;
