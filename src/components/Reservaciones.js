// src/components/Reservaciones.js
import React, { useState } from 'react';
import './Pedir.css'; // Utilizando el mismo CSS para mantener el estilo


const FormularioReservacion = () => {
    const [cliente, setCliente] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
    });

    const [reservacion, setReservacion] = useState({
        sucursalID: '',
        fecha: '',
        estado: 'Pendiente',
    });

    const handleChangeCliente = (e) => {
        setCliente({ ...cliente, [e.target.name]: e.target.value });
    };

    const handleChangeReservacion = (e) => {
        setReservacion({ ...reservacion, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simular envío de datos para almacenar en la base de datos
        console.log('Cliente:', cliente);
        console.log('Reservación:', reservacion);

        // Aquí agregarías la lógica para:
        // 1. Verificar y agregar cliente en `CLIENTES`.
        // 2. Crear una entrada en `RESERVACIONES` con `ClienteID`, `SucursalID`, `fecha` y `estado`.
    };

    return (
        <div className="form-container">
            <h1>Reservar</h1>
            <form onSubmit={handleSubmit}>

                <h2>Información del Cliente</h2>
                <input type="text" name="nombre" placeholder="Nombre" value={cliente.nombre} onChange={handleChangeCliente} required />
                <input type="text" name="apellido" placeholder="Apellido" value={cliente.apellido} onChange={handleChangeCliente} required />
                <input type="email" name="email" placeholder="Email" value={cliente.email} onChange={handleChangeCliente} required />
                <input type="text" name="telefono" placeholder="Teléfono" value={cliente.telefono} onChange={handleChangeCliente} required />

                <h2>Detalles de la Reservación</h2>
                <select name="sucursalID" value={reservacion.sucursalID} onChange={handleChangeReservacion} required>
                    <option value="">Selecciona Sucursal</option>
                    <option value="1">Calle 80</option>
                    <option value="2">Calle 100</option>
                    <option value="3">Chapinero</option>
                </select>
                <input type="datetime-local" name="fecha" value={reservacion.fecha} onChange={handleChangeReservacion} required />

                <button type="submit">Reservar</button>
            </form>
        </div>
    );
};

export default FormularioReservacion;
