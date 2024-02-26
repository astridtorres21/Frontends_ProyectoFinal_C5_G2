import React, { useState } from 'react';
import './css/Footer.css';



const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="left-content">
        <img src="images/footer/nota_dorada.png" alt="Isologotipo de la empresa" className="logo_nota" />
        <img src="images/footer/logo_blanco.png" alt="Isologotipo de la empresa" className="logo_blanco" />
        <span className="copyright">&copy; {year}</span>
      </div>
      <div className='right-content'>
        <img src="images/footer/instagram.png" alt="Instagram" />
        <img src="images/footer/linkedin.png" alt="Linkedin" />
        <img src="images/footer/tiktok.png" alt="TikTok" />
      </div>
    </footer>
  );
};

export default Footer;
