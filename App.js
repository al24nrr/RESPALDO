import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import Footer from './componentes/Footer';
import Registro from './componentes/Registro';
import Menu from './componentes/Menu';  // Importamos el nuevo componente

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />  {/* Actualizamos el contenido de la ruta /menu */}
          <Route path="/registro" element={<Registro />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
