import React from 'react';
import './css/ReservationDetail.css';

const DetalleReserva = () => {
  return (
    <div className="detalle-reserva-container">
      <div className="tarjeta">
        <h2><strong>Detalle de Reserva</strong></h2>
        <div className="producto-info">
          <p><strong>Producto:</strong> Saxofón alto Selmer A542</p>
          <p><strong>Fechas de Reserva:</strong></p>
          <p>Del 10 de abril de 2024 al 17 de abril de 2024</p>
          <p><strong>Duración:</strong> 7 días</p>
        </div>
        <div className="cliente-info">
          <p><strong>Datos del cliente</strong></p>
          <p><strong>Nombre:</strong> Juan</p>
          <p><strong>Apellido:</strong> Perez</p>
          <p><strong>Correo Electrónico:</strong> juan.perez@example.com</p>
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
}

export default DetalleReserva;
