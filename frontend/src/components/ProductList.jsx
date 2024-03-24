import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ productos }) => {
  return (
    <section className="products-section">
      <h2 className='title-products'>Productos</h2>
      {productos.length > 0 ? (
        <div className="products-cards">
          {productos.map(producto => (
            <div className="products-card" key={producto.instrumento_id}>
              <Link to={`/product/${producto.instrumento_id}`}>
                <section className='picture-product'>
                  <img src={producto.imagen[0].url} alt={producto.nombre} />
                </section>
              </Link>
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
            </div>
          ))}
        </div>
      ) : (
        <h2 className='title-products'>Producto no encontrado</h2>
      )}
    </section>
  );
};

export default ProductList;
