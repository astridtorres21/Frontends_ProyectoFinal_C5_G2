import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
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
      const response = await fetch('/auth/login', {
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
        {/* Agrega un Link al logo para redirigir a otra página */}
        <Link to="/">
          <img className='logo-section' src="images/logonuevo.png" alt="Logo" />
        </Link>
        <h2 className='title-left'>Tu armonía, 
        nuestra pasión</h2>
      </div>
      <div className="right-section">
        <form className='form-login' onSubmit={handleSubmit}>
        <h3>Iniciar sesión</h3>
          <div className="input-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={handleEmailChange}
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
          <p className='account'>¿No tienes cuenta? <a href="/register">Crear Cuenta</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login;






