import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../components/product.json';
import '../components/css/ProductDetail.css';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const [loading, setLoading] = useState(true);

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
          <h1>{selectedProduct.nombre}</h1>
        </div>
        <div className="productDetail-header-right">
          <Link to="/">
            <button>Volver Atrás</button>
          </Link>
        </div>
      </div>
      <div className="container">
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
            <p>{selectedProduct.descripcion}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
