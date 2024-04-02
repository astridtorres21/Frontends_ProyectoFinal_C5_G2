import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import './css/Profile.css';

function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(`/usuario/buscarPorUsername/${username}`); // Corrección en el template literal
        if (!response.ok) {
          throw new Error(`Error al obtener los datos del perfil: ${response.statusText}`); // Corrección de la cadena de error
        }
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error al obtener los datos del perfil:', error);
        console.log('Código de estado HTTP:', error.response?.status);
      }
    };

    if (username) {
      fetchProfileData();
    }
  }, [username]);

  return (
    <div className="profile-container">
      <h2>Mi perfil</h2>
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Ingrese su nombre de usuario" />
        <button type="submit">Obtener perfil</button>
      </form>
      {profileData && ( 
        <div className="profile-info">
          <div className="avatar-container">
            {/* Corrección en el uso de template literals */}
            <Avatar name={`${profileData.nombre} ${profileData.apellido}`} size="100" round={true} />
          </div>
          <div className="details-container">
            <p><strong>Nombre de Usuario:</strong> {profileData.username}</p>
            <p><strong>Nombre:</strong> {profileData.nombre}</p>
            <p><strong>Apellido:</strong> {profileData.apellido}</p>
            <p><strong>Rol:</strong> {profileData.role}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
