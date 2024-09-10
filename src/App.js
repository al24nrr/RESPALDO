// src/App.js
import React from 'react';
import './App.css';
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Pedir from './components/Pedir'; // Importar el componente Pedir
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <MyNavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/pedir" element={<Pedir />} /> {/* Nueva ruta para el formulario */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
