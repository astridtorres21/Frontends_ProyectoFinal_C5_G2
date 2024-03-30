import React, { useState } from "react";
import "./css/Search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function Search({ onSearch }) {
  const [fechaInicio, setFechaInicio] = useState(new Date());
  const [fechaFin, setFechaFin] = useState(new Date());
  const [search, setSearch] = useState("");
  const [productos, setProductos] = useState([]);
  const suggestions = ['Guitarra Acústica', 'Violín', 'Viola', 'Contrabajo', 'Banjo','Bajo Eléctrico','Arpa','Mandolina','Charango','Cuerda Guitarra','Flauta Travesera','Saxofón Alto','Trompeta','Clarinete','Trombón','Oboe','Flauta Dulce','Fagot','Trompa','Batería Completa','Congas','Timbales','Cajón Peruano','Pandereta','Marimba','Bombo Legüero','Steel Drum','Tabla','Piano Digital','Órgano Eléctrico','Sintetizador','Acordeón', 'Clavicordio', 'Melódica', 'Celesta', 'Órgano de Tubos', 'Sintetizador Analógico', 'Sampler', 'Sintetizador Modular', 'Caja de Ritmos', 'Controlador MIDI', 'Theremin', 'Secuenciador', 'Drum Machine', 'Controlador de DJ', 'Didgeridoo', 'Hang Drum', 'Koto', 'Sitar', 'Bagpipes'];

  const bgSearch = {
    backgroundImage: 'url(images/bg-search.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
  };

  const handleFechaInicioChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
    if (selectedDate < today) {
      e.target.classList.add("past-date");
    } else {
      e.target.classList.remove("past-date");
    }
    setFechaInicio(selectedDate);
  };

  const handleFechaFinChange = (e) => {
    setFechaFin(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/instrumentos/buscarPorKeyWord/${search}`);
      if (!response.ok) {
        alert(`No se encontraron productos con el nombre ${search}`)
        setProductos({});
        onSearch(data);
        throw new Error('Error al buscar productos');
      }
      const data = await response.json();
      setProductos(data);
      onSearch(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="search" style={{ ...bgSearch, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div className="search-title">
        <h1>La clave de tus sueños musicales</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="search-form">
          <div className="search-section">
            <div className="input-with-icon">
              <FontAwesomeIcon icon={faSearch} className="frm-input frm-large-icon"/>
              <input
                type="text"
                id="search"
                name="search"
                value={search}
                onChange={handleSearch}
                placeholder="Guitarra, Batería, Piano..."
                list="suggestions"
              />
              <datalist id="suggestions">
                {suggestions.map((suggestion, index) => (
                  <option key={index} value={suggestion} />
                ))}
              </datalist>
            </div>
          </div>
          <div className="search-section-date">
            <div className="input-with-icon">
              <FontAwesomeIcon icon={faCalendarAlt} className="frm-input frm-large-icon"/>
              <input
                type="date"
                id="fechaInicio"
                name="fechaInicio"
                value={fechaInicio.toISOString().split('T')[0]} // Format the date to ISO string
                onChange={handleFechaInicioChange}
                aria-hidden="true"
              />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="input-with-icon">
              <FontAwesomeIcon icon={faCalendarAlt} className="frm-input frm-large-icon"/>
              <input
                type="date"
                id="fechaFin"
                name="fechaFin"
                value={fechaFin}
                onChange={handleFechaFinChange}
                aria-hidden="true"
              />
            </div>
          </div>
          <button type="submit">Buscar</button>
        </form>
      </div>
    </div>
  );
}

export default Search;


