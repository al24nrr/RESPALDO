// src/App.js
import React from 'react';
import './App.css';
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Pedir from './components/Pedir';
import Reservaciones from './components/Reservaciones'; // Importar el componente Reservaciones
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <MyNavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/pedir" element={<Pedir />} />
                    <Route path="/reservaciones" element={<Reservaciones />} /> {/* Nueva ruta para Reservaciones */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
