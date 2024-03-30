import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

import './css/Login.css';

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const navigate = useNavigate();
  const { login } = useAuth();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (response.ok) {
        login();
        const data = await response.json();
        localStorage.setItem('token', data.token);
        console.log('Inicio de sesión exitoso');
        navigate('/');        
      } else {
        // Si la respuesta no es exitosa, lanzamos un error para que sea manejado en el bloque catch
        throw new Error(`Error en el inicio de sesión: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error al enviar datos al servidor:', error);
    }
  }; 

  return (
    <div className="container">
      <div className="left-section">
        <img className='logo-section' src="images/logonuevo.png" alt="Logo" />
        <h2 className='title-left'>Tu armonía, 
        nuestra pasión</h2>
      </div>
      <div className="right-section">
        <form className='form-login' onSubmit={handleSubmit}>
        <h3>Iniciar sesión</h3>
          <div className="input-group">
            <label htmlFor="username"></label>
            <input
              type="email"
              id="username"
              name="username"
              placeholder="Correo electrónico"
              value={username}
              onChange={handleUserNameChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <p><a href="#">¿Olvidaste tu contraseña?</a></p>
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;





