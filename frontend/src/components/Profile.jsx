import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Avatar from 'react-avatar';
import './css/Profile.css';
import './css/Footer.css';

function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(`/usuario/buscarPorUsername/${username}`);
        if (!response.ok) {
          throw new Error(`Error al obtener los datos del perfil: ${response.statusText}`);
        }
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error al obtener los datos del perfil:', error);
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
<Footer />

export default Profile;
