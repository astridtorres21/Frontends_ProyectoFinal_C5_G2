import React, { useState } from "react";
import "./css/Search.css";

const instrumentos = [
  {
    id: 1,
    tipo: "Guitarras",
  },
  {
    id: 2,
    tipo: "Teclados",
  },
  {
    id: 3,
    tipo: "Batería",
  },
  {
    id: 4,
    tipo: "Instrumentos de viento",
  },
  {
    id: 5,
    tipo: "Instrumentos de cuerda",
  },
  {
    id: 6,
    tipo: "Pianos",
  },
  {
    id: 7,
    tipo: "Instrumentos de percusión",
  },
];

function App() {
  const [fechaInicio, setFechaInicio] = useState(new Date());
  const [fechaFin, setFechaFin] = useState(new Date());
  const [tipoInstrumento, setTipoInstrumento] = useState("");

  const handleFechaInicioChange = (e) => {
    setFechaInicio(e.target.value);
  };

  const handleFechaFinChange = (e) => {
    setFechaFin(e.target.value);
  };

  const handleTipoInstrumentoChange = (e) => {
    setTipoInstrumento(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí se puede enviar la información a un API o realizar la búsqueda

    alert(
      `Buscando ${tipoInstrumento} para alquilar entre ${fechaInicio} y ${fechaFin}`
    );
  };

  return (
    <div className="search">
      <div className="search-title">
        <h1>Busca los mejores instrumentos musicales</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="search-form">
          <div className="search-section">
            <label htmlFor="tipoInstrumento">Tipo de instrumento:</label>
            <select
              id="tipoInstrumento"
              name="tipoInstrumento"
              value={tipoInstrumento}
              onChange={handleTipoInstrumentoChange}
            >
              {instrumentos.map((instrumento) => (
                <option key={instrumento.id} value={instrumento.tipo}>
                  {instrumento.tipo}
                </option>
              ))}
            </select>
          </div>
          <div className="search-section">
            <label htmlFor="fechaInicio">Fecha de inicio:</label>
            <input
              type="date"
              id="fechaInicio"
              name="fechaInicio"
              value={fechaInicio}
              onChange={handleFechaInicioChange}
            />
          </div>
          <div className="search-section">
            <label htmlFor="fechaFin">Fecha de fin:</label>
            <input
              type="date"
              id="fechaFin"
              name="fechaFin"
              value={fechaFin}
              onChange={handleFechaFinChange}
            />
          </div>
          <button type="submit">Buscar</button>
        </form>
      </div>
    </div>
  );
}

export default App;