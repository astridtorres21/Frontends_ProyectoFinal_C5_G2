import React, { useState } from "react";
import "./css/Search.css";

function App() {
  const [fechaInicio, setFechaInicio] = useState(new Date());
  const [fechaFin, setFechaFin] = useState(new Date());
  const [search, setSearch] = useState("");

  const bgSearch = {
    backgroundImage: 'url(images/bg-search.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
  };

  const handleFechaInicioChange = (e) => {
    setFechaInicio(e.target.value);
  };

  const handleFechaFinChange = (e) => {
    setFechaFin(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí se puede enviar la información a un API o realizar la búsqueda

    alert(
      `Buscando ${search} para alquilar entre ${fechaInicio} y ${fechaFin}`
    );
  };

  return (
    <div className="search" style={{ ...bgSearch, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div className="search-title">
        <h1>La clave de tus sueños musicales</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="search-form">
          <div className="search-section">
            <div>
            <input
              type="text"
              id="search"
              name="search"
              value={search}
              onChange={handleSearch}
            />            
            </div>
          </div>
          <div className="search-section-date">
            <div>
              <input
                type="date"
                id="fechaInicio"
                name="fechaInicio"
                value={fechaInicio}
                onChange={handleFechaInicioChange}
              />
            </div>
            <div>
              <input
                type="date"
                id="fechaFin"
                name="fechaFin"
                value={fechaFin}
                onChange={handleFechaFinChange}
              />
            </div>
          </div>
          <button type="submit">Buscar</button>
        </form>
      </div>
    </div>
  );
}

export default App;