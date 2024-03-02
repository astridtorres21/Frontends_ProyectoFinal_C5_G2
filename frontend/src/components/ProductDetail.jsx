import React from 'react';
import { Link } from 'react-router-dom';
import './css/ProductDetail.css';

const ProductDetail = ({ match }) => {
  return (
    <div>
      {/* Primer bloque */}
      <div className="productDetail-header">
        <div className="productDetail-header-title-left">
          <h1>Titulo del Producto 1</h1>
        </div>
        <div className="productDetail-header-right">
          <Link to="/">
            <button>Volver Atrás</button>
          </Link>
        </div>
      </div>

      {/* Segundo bloque */}
      <div className="productDetail-header">
        <div className="productDetail-header-title-left">
          <div className="col-6 col-s-9 product-detail-main-image">
            <img src="https://www.eltiempo.com/files/article_main_1200/uploads/2023/03/09/640a5f6c7f159.jpeg" alt="Main" />
          </div>

          <div className="col-3 col-s-12">
            <div className="aside">
              <div className="product-detail-row">
                <img src="https://www.eltiempo.com/files/article_main_1200/uploads/2023/03/09/640a5f6c7f159.jpeg" alt="Image1" />
              </div>
              <div className="product-detail-row">
                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_996993-MLU69825293985_062023-F.webp" alt="Image2" />
              </div>
              <div className="product-detail-row">
                <img src="https://www.eltiempo.com/files/article_main_1200/uploads/2023/03/09/640a5f6c7f159.jpeg" alt="Image1" />
              </div>
            </div>
          </div>
        </div>

        <div className="productDetail-header-right  ">
          <h5>Descripción del Producto</h5>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
