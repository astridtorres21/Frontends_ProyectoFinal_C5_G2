import React, { useState, useEffect } from 'react';
import './css/ReservationDetail.css';

const DetalleReserva = () => {
  const [usuario, setUsuario] = useState([]);
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    // Obtener información del usuario
    const fetchUsuario = async () => {
      const idUsuario = obtenerIdUsuarioDelToken();
      const respuesta = await fetch(`/api/usuarios/${idUsuario}`);
      const datosUsuario = await respuesta.json();
      setUsuario(datosUsuario);
    };
    fetchUsuario();

    // Obtener información del producto
    const fetchProducto = async () => {
      const idProducto = obtenerIdProductoSeleccionado();
      const respuesta = await fetch(`/api/productos/${idProducto}`);
      const datosProducto = await respuesta.json();
      setProducto(datosProducto);
    };
    fetchProducto();
  }, []);

  return (
    <div className="detalle-reserva-container">
      <div className="tarjeta">
        <h2><strong>Detalle de Reserva</strong></h2>
        <div className="producto-info">
          <p><strong>Producto:</strong> {producto.nombre}</p>
          <p><strong>Fechas de Reserva:</strong></p>
          <p>Del {producto.fechaInicio} al {producto.fechaFin}</p>
          <p><strong>Duración:</strong> {producto.duracion} días</p>
        </div>
        <div className="cliente-info">
          <p><strong>Datos del cliente</strong></p>
          <p><strong>Nombre:</strong> {usuario.nombre}</p>
          <p><strong>Apellido:</strong> {usuario.apellido}</p>
          <p><strong>Correo Electrónico:</strong> {usuario.correo}</p>
        </div>
        ...
      </div>
    </div>
  );
};

export default DetalleReserva;

