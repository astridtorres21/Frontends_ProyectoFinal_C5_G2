import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import './css/Profile.css';

function Profile() {
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('/api/profile');
        if (!response.ok) {
          throw new Error('Error al obtener los datos del perfil');
        }
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error al obtener los datos del perfil:', error);
      }
    };

    fetchProfileData();
  }, []);

  const handleChangePassword = () => {
    console.log('Cambiando contraseña...');
  };

  return (
    <div className="profile-container">
      <h2>Mi perfil</h2>
      {profileData && ( 
        <div className="profile-info">
          {/* Avatar del usuario */}
          <div className="avatar-container">
            <Avatar name={`${profileData.firstName} ${profileData.lastName}`} size="100" round={true} />
          </div>
          {/* Datos del perfil */}
          <div className="details-container">
            <p><strong>Nombre:</strong> {profileData.firstName}</p>
            <p><strong>Apellido:</strong> {profileData.lastName}</p>
            <p><strong>Usuario:</strong> {profileData.username}</p>
            {/* Contraseña encriptada */}
            <p><strong>Contraseña:</strong> {profileData.encryptedPassword}</p>
            {/* Botón para cambiar la contraseña */}
            <button onClick={handleChangePassword}>Cambiar contraseña</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
