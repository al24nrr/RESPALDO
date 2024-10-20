import React, { useState } from 'react';
import './Registro.css'; // Estilos adicionales

function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    contrasena: '', // Campo correcto para la contraseña
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    alert('Registro exitoso');
  };

  return (
    <div className="registro-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre (varchar):</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Apellido (varchar):</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Dirección (varchar):</label>
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Número de Teléfono (int):</label>
          <input
            type="number"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="form-control"
            required
            min="0"
          />
        </div>
        <div className="form-group">
          <label>Contraseña (varchar):</label>
          <input
            type="password"  // Cambiado a type="password" para ocultar caracteres
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Registro;
