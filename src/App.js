// src/App.js
import React from 'react';
import './App.css';
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer'; // Importa el componente Footer

function App() {
    return (
        <div className="App">
            <MyNavbar />
            <Home />
            <Footer /> {/* Usa el componente Footer aquí */}
        </div>
    );
}

export default App;
