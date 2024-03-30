import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './css/Header.css';

const Header = () => {
  const { isLogged, logout } = useAuth();

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
          <button onClick={logout}>Cerrar sesión</button>
        ) : (
          <>
            <Link to="/login">
              <button>Iniciar sesión</button>
            </Link>
            <Link to="/register">
              <button>Crear cuenta</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
