import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MaybeShowHeaderAndFooter from './components/MaybeShowHeaderAndFooter';
import Register from './components/Register';
import ProductDetail from './components/ProductDetail';
import ReservationConfirmation from './components/ReservationConfirmation';
import Body from './components/Body';
import Login from './components/Login';
import HomeUser from './components/HomeUser';
import { AuthProvider } from './AuthContext';

import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
       <MaybeShowHeaderAndFooter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/confirm-reservation" element={<ReservationConfirmation />} />
          <Route path="/homeuser" element={<HomeUser />} />
        </Routes>
      </MaybeShowHeaderAndFooter>
      </AuthProvider>
    </Router>
  );
}

export default App;

