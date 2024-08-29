import React, { useState } from 'react';
import './OrderForm.css'; // Importando los estilos CSS

const OrderForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    burgerType: '',
    quantity: 1,
    paymentMethod: 'Nequi', // Ajustado a "Nequi"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/miProyecto/submitOrder.php', { // Cambia a tu ruta correspondiente
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          address: formData.address,
          burgerType: formData.burgerType,
          quantity: formData.quantity,
          paymentMethod: formData.paymentMethod,
        }),
      });

      const result = await response.text();
      // Puedes manejar el resultado aquí, como mostrar un mensaje de éxito
      alert(result);
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el pedido.'); // Manejo básico de errores
    }
  };

  return (
    <div className="order-form-container">
      <h1>Formulario de Pedido</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Número de Celular:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tipo de Hamburguesa:</label>
          <select
            name="burgerType"
            value={formData.burgerType}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una hamburguesa</option>
            <option value="Clásica">Hamburguesa Clásica</option>
            <option value="BBQ">Hamburguesa BBQ</option>
            <option value="Vegana">Hamburguesa Vegana</option>
          </select>
        </div>
        <div>
          <label>Cantidad:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <div>
          <label>Método de Pago:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="Nequi">Nequi</option>
            <option value="Davi plata">Davi plata</option>
            <option value="Efectivo">Efectivo</option>
          </select>
        </div>
        <button type="submit">Enviar Pedido</button>
      </form>
    </div>
  );
};

export default OrderForm;
