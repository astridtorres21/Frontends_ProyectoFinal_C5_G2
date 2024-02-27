import Search from './Search';
import React, { useState } from 'react';
import './css/Body.css';





const Body = () => {
  return (
    <div className="body">
      <section className="search-section">
        <h2 className="title-search">La clave de tus sueños musicales</h2>
        <Search /> 
      </section>

      <section className="categories-section">
        <h2 className='title-categorias'>Categorías</h2>
        <div className="category-cards">
          <div className="category-card">
            <img src={process.env.PUBLIC_URL + '/images/body/Cuerdas.jpg'} alt="Cuerdas" />
            <h3>Cuerdas</h3>
            <span>Descubre la magia de las cuerdas y 
                crea melodías cautivadoras con nuestra 
                selección de instrumentos de cuerda, 
                perfectos para expresar emociones y 
                añadir profundidad a tu música.</span>
          </div>

          <div className="category-card">
            <img src="images/body/Vientos.jpg" alt="Vientos" />
            <h3>Vientos</h3>
            <span>Deja que el viento lleve tu música 
                a nuevas alturas con nuestra gama 
                de instrumentos de viento. Desde 
                flautas delicadas hasta potentes 
                trompetas, encuentra el sonido 
                que te inspira.</span>
          </div>
          <div className="category-card">
            <img src="images/body/Teclados.jpg" alt="Teclados" className="piano-img"/>
            <h3>Teclados</h3>
            <span>Explora un mundo de posibilidades musicales 
                con nuestros teclados. Desde pianos clásicos 
                hasta sintetizadores modernos, desbloquea 
                tu creatividad y encuentra tu voz única.</span>
          </div>
          <div className="category-card">
            <img src="images/body/Percusion.jpg" alt="Percusión" />
            <h3>Percusión</h3>
            <span>Haz latir el corazón de tu música 
                con nuestros instrumentos de 
                percusión. Desde ritmos enérgicos 
                hasta texturas atmosféricas, 
                añade profundidad y 
                ritmo a tus composiciones.</span>
          </div>
        </div>
      </section>


      <section className="products-section">

  

        <div className="products-cards">

        <h2 className='title-products'>Productos</h2>

          <div className="products-card">
            <img src="images/body/Guitarra acústica Yamaha FG800.jpg" alt="Guitarra Acustica Yamaha FG800" />
            <h3>Guitarra acústica Yamaha FG800</h3>
          </div>
          <div className="products-card">
            <img src="images/body/Saxofón alto Selmer AS42.jpg" alt="Saxofón alto Selmer AS42" />
            <h3>Saxofón alto Selmer AS42</h3>
          </div>
          <div className="products-card">
            <img src="images/body/Piano digital Casio Privia PX-160.jpg" alt="Piano digital Casio Privia PX-160" />
            <h3>Piano digital Casio Privia PX-160</h3>
          </div>
          <div className="products-card">
            <img src="images/body/Batería Pearl Export Series.jpg" alt="Batería Pearl Export Series" />
            <h3>Batería Pearl Export Series</h3>
          </div>
          <div className="products-card">
            <img src="images/body/Violín Yamaha V5SC.jpg" alt="Violín Yamaha V5SC" />
            <h3>Violín Yamaha V5SC</h3>
          </div>
          <div className="products-card">
            <img src="images/body/Flauta traversa Gemeinhardt 2SP.jpg" alt="Flauta traversa Gemeinhardt 2SP" />
            <h3>Flauta traversa Gemeinhardt 2SP</h3>
          </div>
          <div className="products-card">
            <img src="images/body/Teclado MIDI Akai MPK Mini.jpg" alt="Teclado MIDI Akai MPK Mini" />
            <h3>Teclado MIDI Akai MPK Mini</h3>
          </div>
          <div className="products-card">
            <img src="images/body/Trompeta Yamaha YTR-2330.jpg" alt="Trompeta Yamaha YTR-2330" />
            <h3>Trompeta Yamaha YTR-2330</h3>
          </div>
          <div className="products-card">
            <img src="images/body/Bajo eléctrico Fender Precision Bass.jpg" alt="Bajo eléctrico Fender Precision Bass" />
            <h3>Bajo eléctrico Fender Precision Bass</h3>
          </div>
          <div className="products-card">
            <img src="images/body/Cajón peruano LP Americana.jpg" alt="Cajón peruano LP Americana" />
            <h3>Cajón peruano LP Americana</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;


