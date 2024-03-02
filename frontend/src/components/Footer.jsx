import React, { useState } from 'react';
import './css/Footer.css';



const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="left-content">
        <img src="images/footer/nota_dorada.png" alt="Isologotipo de la empresa" className="logo_nota" />
        <img src="images/footer/logo_blanco.png" alt="Isologotipo de la empresa" className="logo_blanco" />
        <div>
        <span className="copyright">&copy; Doremi {year}. Todos los derechos reservados</span>
        </div>
      </div>
      <div className='right-content'>
        <div>
          <h4>Seguinos en nuestras redes sociales</h4>
        </div>
        <img src="images/footer/instagram.png" alt="Instagram" />
        <img src="images/footer/linkedin.png" alt="Linkedin" />
        <img src="images/footer/tiktok.png" alt="TikTok" />
        <img src="images/footer/X.png" alt="X" />
        </div>
    </footer>
  );
};

export default Footer;
