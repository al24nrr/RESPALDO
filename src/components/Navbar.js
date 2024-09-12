// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';
import logo from '../imagenes/logo.png';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/menu">Menú</Nav.Link>
                        <Nav.Link as={Link} to="/pedir">Pedir</Nav.Link>
                        <Nav.Link as={Link} to="/reservaciones">Reservaciones</Nav.Link> {/* Enlace a Reservaciones */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
