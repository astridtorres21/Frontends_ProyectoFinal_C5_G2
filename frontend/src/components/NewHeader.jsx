import React from 'react';
import Avatar from 'react-avatar'; // Importa el componente Avatar de react-avatar

function NewHeader() {
  // Función para obtener el nombre de usuario desde el almacenamiento local
  const getUserName = () => {
    return localStorage.getItem('userName') || ''; // Si el nombre de usuario no está definido, devuelve una cadena vacía
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    const confirmLogout = window.confirm('¿Estás seguro que quieres cerrar sesión?');
    if (confirmLogout) {
      localStorage.removeItem('userName'); // Elimina el nombre de usuario del almacenamiento local al cerrar sesión
      window.location.href = '/logout'; // Redirige al usuario a otra página después de cerrar sesión
    }
  };

  return (
    <header>
      <div className="logo">
        <img src="images/header.png" alt="logo" />
      </div>
      <div className="user-info">
        {/* Mostramos el nombre del usuario */}
        <span>{getUserName()}</span>
        {/* Mostramos el avatar del usuario utilizando el componente Avatar de react-avatar */}
        <Avatar name={getUserName()} size="40" round={true} />
        {/* Botón de cerrar sesión con confirmación */}
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </header>
  );
}

export default NewHeader;



