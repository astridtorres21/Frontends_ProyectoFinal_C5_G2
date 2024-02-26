import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
    const isLogged = true; // Coloca tu lógica real aquí
    const handleLogin = () => {
      // Lógica de inicio de sesión
    };
  
    const handleLogout = () => {
      // Lógica de cierre de sesión
    };
  
    return (
      <header className="header">
        <div className="logo-container">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + '/images/logo.png'}
              alt="Logo"
              className="logo"
            /> 
          </Link>
        </div>
        <div className="buttons-container">
          {isLogged ? (
            <button onClick={handleLogout}>Cerrar sesión</button>
          ) : (
            <button onClick={handleLogin}>Iniciar sesión</button>
          )}
          <button>Crear cuenta</button>
        </div>
      </header>
    );
  }
  
  export default Header;