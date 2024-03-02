import React, { useState } from 'react';
import './css/NewHeader.css';
function NewHeader() {
  const [username, setUsername] = useState('Usuario');
  const handleUsernameChange = () => {
    const newName = prompt('Por favor, ingresa tu nombre de usuario:');
    if (newName) {
      setUsername(newName);
    }
  };

  return (
    <div className="newheader">
      <div className="logo">
        <img src="ruta/al/logo.png" alt="Logo" />
      </div>
      <div className="user-info">
        <p>Bienvenido, {username}</p>
        <img src="ruta/al/foto-usuario.jpg" alt="Foto de Usuario" />
      </div>
      <button onClick={handleUsernameChange}>Cambiar Usuario</button>
    </div>
  );
}

export default NewHeader;

