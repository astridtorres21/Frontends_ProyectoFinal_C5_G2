import React, { useState } from 'react';
import './css/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        console.log('Inicio de sesión exitoso');
      } else {
        console.error('Error en el inicio de sesión:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar datos al servidor:', error);
    }
  };

  return (
    <div className="container">
      <div className="left-section">
        <img src="ruta/al/logo.png" alt="Logo" />
        <h2>Tu armonía, nuestra pasión</h2>
      </div>
      <div className="right-section">
        <h3>Iniciar sesión</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingrese su correo electrónico"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingrese su contraseña"
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




