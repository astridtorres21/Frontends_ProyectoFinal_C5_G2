import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MaybeShowHeaderAndFooter = ({ children }) => {
  const location = useLocation();

  // Lista de rutas en las que no se debe mostrar el encabezado y el pie de página
  const excludedRoutes = ['/', '/register', '/login'];

  // Verifica si la ruta actual está en la lista de rutas excluidas
  const shouldShowHeaderAndFooter = !excludedRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowHeaderAndFooter && <Header />}
      {children}
      {shouldShowHeaderAndFooter && <Footer />}
    </>
  );
};

export default MaybeShowHeaderAndFooter;
