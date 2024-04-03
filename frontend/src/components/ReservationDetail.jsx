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
        <p><strong>¿Listo para Confirmar tu Reserva?</strong></p>
        <p>Haz clic en el botón "Confirmar Reserva" a continuación para asegurar tu Saxofón alto Selmer AS42 y comenzar tu aventura musical.</p>
        <div className="botones-container">
          <button className="confirmar-btn">Confirmar Reserva</button>
          <button className="cancelar-btn">Cancelar</button>
        </div>
        <p className="texto-adicional">¿Necesitas hacer cambios o tienes alguna pregunta antes de confirmar? Si necesitas ayuda adicional no dudes en ponerte en contacto con nuestro equipo de soporte al cliente.</p>
      </div>
    </div>
  );
};

export default DetalleReserva;


