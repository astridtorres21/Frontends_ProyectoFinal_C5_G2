// Login.js
import React, { useState } from 'react';
import './css/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    // Validamos el formato del correo electrónico
    if (!validateEmailFormat(newEmail)) {
      setEmailError('El correo electrónico debe tener un formato válido');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validamos el formato del correo electrónico antes de enviar el formulario
    if (!validateEmailFormat(email)) {
      setEmailError('El correo electrónico debe tener un formato válido');
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const userData = await response.json();
        // Guardamos el nombre de usuario en el almacenamiento local
        localStorage.setItem('userName', userData.name);
        // Redirigimos al usuario a la página de inicio después de iniciar sesión
        window.location.href = '/home';
      } else {
        console.error('Error en el inicio de sesión:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar datos al servidor:', error);
    }
  };

  // Función para validar el formato del correo electrónico
  const validateEmailFormat = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container">
      <div className="left-section">
        {/* Agregamos el código proporcionado al lado izquierdo */}
        <img className='logo-section' src="images/logonuevo.png" alt="Logo" />
        <h2 className='title-left'>Tu armonía, nuestra pasión</h2>
      </div>
      <div className="right-section">
        {/* Formulario de inicio de sesión */}
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
            {emailError && <p className="error-message">{emailError}</p>}
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





