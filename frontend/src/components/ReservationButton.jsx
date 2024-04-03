import React from 'react';
import { useAuth } from '../AuthContext';

const ReservaButton = () => {
  const { isLogged } = useAuth();

  // Si el usuario está autenticado, redirige a una ruta específica
  // Si no está autenticado, redirige al login
  const handleReservaClick = () => {
    if (isLogged) {
      window.location.href = '/confirmationreservation' ;
      console.log('Usuario autenticado, redirigiendo...');
    } else {
       window.location.href = '/login';
      console.log('Usuario no autenticado, redirigiendo al login...');
    }
  };

  return (
    <button onClick={handleReservaClick}>
      Reservar
    </button>
  );
};

export default ReservaButton;
