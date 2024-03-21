import React from 'react';
import { 
    BrowserRouter as Router
    , Route 
    , Routes
} from 'react-router-dom';
import Register from './components/Register';
import ProductDetail from './components/ProductDetail';
import ReservationConfirmation from './components/ReservationConfirmation';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Login from './components/Login';

import './App.css';


function App() {
  return (
    <Router>
      <Header/>
      <div className='content-section'>
        <Routes>
          <Route path="/" element={<Body/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/confirm-reservation" element={<ReservationConfirmation/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;