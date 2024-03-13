import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './css/Login.css';

function LoginPage() {
  return (
    <div className="container">
      <div className="left-section">
        <img src="ruta/al/logo.png" alt="Logo" />
        <h2>Tu armonía, nuestra pasión</h2>
      </div>
      <div className="right-section">
        <h3>Iniciar sesión</h3>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />
        </div>
        <p><a href="#">¿Olvidaste tu contraseña?</a></p>
        <button>Iniciar sesión</button>
      </div>
    </div>
  );
}

export default LoginPage;


