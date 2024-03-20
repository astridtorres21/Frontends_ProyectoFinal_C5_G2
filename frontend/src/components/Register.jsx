import React, { useState } from 'react';
import './css/Register.css';

const Register = () => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });


  const [confirmationMessage, setConfirmationMessage] = useState('');

  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setConfirmationMessage('El correo electrónico no tiene un formato válido');
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setConfirmationMessage('Registro exitoso');
      } else {
        setConfirmationMessage('Error en el registro');
      }
    } catch (error) {
      console.error('Error al enviar datos al servidor:', error);
      setConfirmationMessage('Error al enviar datos al servidor');
    }
  };

  return (
    <section className="register-container">
      <section className="picture-left">
        <img className='logo-section' src="images/logonuevo.png" alt="logo" />
        <h2 className='title-left'>Tu armonía, nuestra pasión</h2>
      </section>
      <section className="register-right">
        <form className='register-form' onSubmit={handleSubmit}>
          <h3> <strong>Registrarse</strong></h3>
          <div className='input-form'>
            <label className='input' htmlFor="firstName"></label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Nombre"
              required
            />
          </div>
          <div className='input-form'>
            <label className='input' htmlFor="lastName"></label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Apellido"
              required
            />
          </div>
          <div className='input-form'>
            <label className='input' htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Correo electrónico"
              required
            />
          </div>
          <div className='input-form'>
            <label className='input' htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Contraseña"
              required
            />
          </div>
          {confirmationMessage && <p>{confirmationMessage}</p>}
          <button className='button-register' type="submit">Registrarse</button>
          <p className='account'>¿Ya tienes cuenta? <a href="/login">Iniciar sesión</a></p>
        </form>
      </section>
    </section>
  );
};

export default Register;


