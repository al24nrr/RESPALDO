// src/components/Pedir.js
import React, { useState } from 'react';
import './Pedir.css';

const Pedir = () => {
    const [cliente, setCliente] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
    });

    const [pedido, setPedido] = useState({
        sucursalID: '',
        metodoPagoID: '',
        tipoHamburguesa: '',
        adicionales: {
            papas: false,
            gaseosa: false,
            marcaGaseosa: '',
        },
        total: 0,
    });

    const precios = {
        hamburguesas: {
            clasica: 15000,
            bbq: 17000,
            vegana: 16000,
            pollo: 15500,
        },
        papas: 5000,
        gaseosa: 3000,
    };

    const handleChangeCliente = (e) => {
        setCliente({ ...cliente, [e.target.name]: e.target.value });
    };

    const handleChangePedido = (e) => {
        const { name, value, type, checked } = e.target;
        setPedido((prev) => {
            if (type === 'checkbox') {
                return {
                    ...prev,
                    adicionales: { ...prev.adicionales, [name]: checked },
                };
            }
            return { ...prev, [name]: value };
        });
    };

    const calcularTotal = () => {
        let total = precios.hamburguesas[pedido.tipoHamburguesa] || 0;
        if (pedido.adicionales.papas) total += precios.papas;
        if (pedido.adicionales.gaseosa) total += precios.gaseosa;
        return total;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const total = calcularTotal();
        setPedido((prev) => ({ ...prev, total }));
        console.log('Cliente:', cliente);
        console.log('Pedido:', { ...pedido, total });
        // Aquí puedes manejar el envío del formulario, quizá conectando con un API
    };

    return (
        <div className="form-container">
            <h1>Realizar Pedido</h1>
            <form onSubmit={handleSubmit}>

                <h2>Información del Cliente</h2>
                <input type="text" name="nombre" placeholder="Nombre" value={cliente.nombre} onChange={handleChangeCliente} />
                <input type="text" name="apellido" placeholder="Apellido" value={cliente.apellido} onChange={handleChangeCliente} />
                <input type="email" name="email" placeholder="Email" value={cliente.email} onChange={handleChangeCliente} />
                <input type="text" name="telefono" placeholder="Teléfono" value={cliente.telefono} onChange={handleChangeCliente} />

                <h2>Detalles del Pedido</h2>
                <select name="sucursalID" value={pedido.sucursalID} onChange={handleChangePedido} required>
                    <option value="">Selecciona Sucursal</option>
                    <option value="Calle 80">Calle 80</option>
                    <option value="Calle 100">Calle 100</option>
                    <option value="Chapinero">Chapinero</option>
                </select>
                <select name="metodoPagoID" value={pedido.metodoPagoID} onChange={handleChangePedido} required>
                    <option value="">Selecciona Método de Pago</option>
                    <option value="Efectivo">Efectivo</option>
                    <option value="Tarjeta de Crédito">Tarjeta de Crédito</option>
                    <option value="Nequi">Nequi</option>
                    <option value="Daviplata">Daviplata</option>
                </select>

                <h3>Selección de Hamburguesa</h3>
                <select name="tipoHamburguesa" value={pedido.tipoHamburguesa} onChange={handleChangePedido} required>
                    <option value="">Selecciona Hamburguesa</option>
                    <option value="clasica">Hamburguesa Clásica</option>
                    <option value="bbq">Hamburguesa BBQ</option>
                    <option value="vegana">Hamburguesa Vegana</option>
                    <option value="pollo">Hamburguesa de Pollo</option>
                </select>

                <h3>Adicionales</h3>
                <div className="adicionales">
                    <label>
                        <input type="checkbox" name="papas" checked={pedido.adicionales.papas} onChange={handleChangePedido} />
                        Papas Fritas - $5,000 COP
                    </label>

                    <label>
                        <input type="checkbox" name="gaseosa" checked={pedido.adicionales.gaseosa} onChange={handleChangePedido} />
                        Gaseosa - $3,000 COP
                    </label>
                    {pedido.adicionales.gaseosa && (
                        <select name="marcaGaseosa" value={pedido.adicionales.marcaGaseosa} onChange={handleChangePedido} required>
                            <option value="">Selecciona Marca</option>
                            <option value="Coca Cola">Coca Cola</option>
                            <option value="Pepsi">Pepsi</option>
                            <option value="Colombiana">Colombiana</option>
                        </select>
                    )}
                </div>

                <h3>Total: ${calcularTotal()} COP</h3>
                <button type="submit">Enviar Pedido</button>
            </form>
        </div>
    );
};

export default Pedir;
