import React, { useState } from 'react';
import ReservationButton from './ReservationButton';
import Calendario from './Calendario';
import Modal from './Modal'; 

const ContenedorCalendario = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => {
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };

  return (
    <div>
      <div className="boton-container">
        <ReservationButton onClick={abrirModal} />
      </div>
      <Modal mostrar={mostrarModal} onClose={cerrarModal}>
        <div className="modal-contenido">
          <h2>Selecciona tu fecha de reserva</h2>
          <Calendario />
          <div className="boton-container">
            <ReservationButton />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ContenedorCalendario;
