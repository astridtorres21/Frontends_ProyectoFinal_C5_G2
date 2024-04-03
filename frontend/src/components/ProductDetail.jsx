import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../components/product.json';
import '../components/css/ProductDetail.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext'; 
import Calendario from './Calendario';

const ProductDetail = () => {
  const { id } = useParams();
  const { isLogged } = useAuth();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  const changeThumbnail = (index) => {
    setSelectedThumbnail(index);
  };

  const navigateThumbnails = (direction) => {
    const newIndex =
      direction === 'up'
        ? selectedThumbnail - 1
        : selectedThumbnail + 1;

    if (newIndex >= 0 && newIndex < selectedProduct.images.length) {
      setSelectedThumbnail(newIndex);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); 

    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    if (isFavorite) {
      delete favorites[id];
    } else {
      favorites[id] = selectedProduct;
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/instrumentos/buscarPorId/' + parseInt(id));
        const data = await response.json();

        // Fusionas los datos del backend con el JSON importado
        const productFromBackend = data;
        const productFromJSON = products.find((product) => product.instrumento_id === parseInt(id));

        if (productFromBackend && productFromJSON) {
          // Combina las propiedades de ambos objetos
          const mergedProduct = {
            ...productFromBackend,
            imagen: productFromJSON.imagen,
          };
          console.log('productFromJSON--->',productFromJSON.imagen);
          console.log('productFromBackend--->',productFromBackend);
          console.log('mergedProduct--->',mergedProduct);

          setSelectedProduct(mergedProduct);
        } else {
          setSelectedProduct(productFromBackend);
        }


        setLoading(false);

/*

        const response = await fetch(`http://localhost:8081/instrumentos/buscarPorId/${id}`);
        const data = await response.json();

        setSelectedProduct(data);
        setLoading(false);        */
      } catch (error) {
        console.error('Error al obtener los datos del servidor:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    setIsFavorite(!!favorites[id]);
  }, [id]);

  if (loading) {
    return <div className="loading-container">Cargando...</div>;
  }

  if (!selectedProduct) {
    return <div className="error-container">Producto no encontrado</div>;
  }

  if (!selectedProduct) {
    return <div className="error-container">Producto no encontrado</div>;
  }

  return (
    <>
      {/* Primer bloque */}
      <div className="productDetail-header">
        <div className="productDetail-header-title-left">
          <h1>Categoría: {selectedProduct.categoria.nombre}</h1>
        </div>
        <div className="productDetail-header-right">
          <Link to="/">
            <button>Volver Atrás</button>
          </Link>
        </div>
      </div>
      <div className="">
        <div className="product-container">
          <div className="product-images">
            <img
              src={selectedProduct.imagen[selectedThumbnail].url}
              alt={`Producto ${selectedProduct.id} Imagen principal`}
              className="main-image"
              />
            <div className="thumbnail-container">
              {selectedProduct.imagen.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={`Producto ${selectedProduct.id} Imagen ${index + 1}`}
                  className={`product-thumbnail ${
                    index === selectedThumbnail ? 'selected' : ''
                  }`}
                  onClick={() => changeThumbnail(index)}
                />
              ))}
            </div>
          </div>
          <div className="product-details">
            <h3>
              {isLogged && ( // Solo muestra el botón de favoritos si el usuario está autenticado
              <span onClick={toggleFavorite} style={{ cursor: 'pointer', position: 'absolute', top: '0', right: '0', margin: '8px' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill={isFavorite ? '#512DA8' : 'none'}
                stroke={isFavorite ? '#512DA8' : '#000000'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21.943L12 21.943C5.91 16.373 2 12.82 2 9.155c0-3.309 2.91-5.983 6.5-5.983 2.637 0 4.638 1.767 5.5 3.5.862-1.733 2.863-3.5 5.5-3.5C19.09 3.172 22 5.846 22 9.155c0 3.665-3.91 7.218-9 12.788z"></path>
              </svg>
            </span>
            
              )}
              <p
                style={{
                  fontWeight: 'bold',
                  fontSize: '30px',
                  color: '#512DA8',
                  right: '0',
                  margin: '8px',
                }}
              >
                  {selectedProduct.nombre}
              </p>            
            </h3>
            <p>{selectedProduct.descripcion}</p>
            {selectedProduct.precioDia && ( 
              <p
                style={{
                  fontWeight: 'bold',
                  fontSize: '20px',
                  color: '#512DA8',
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  margin: '8px',
                }}
              >
                Precio por día: ${selectedProduct.precioDia}
              </p>
            )} 


            <div className="boton-container">
<button className="confirmar-btn">Reservar</button>
</div> 

          </div>
          <Calendario />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
