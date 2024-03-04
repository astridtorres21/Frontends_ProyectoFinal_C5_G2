import React from 'react';
import { 
    BrowserRouter as Router
    , Route 
    , Routes
} from 'react-router-dom';
import NewHeader from './components/NewHeader';
import Register from './components/Register';
import Search from './components/Search';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';
import ReservationConfirmation from './components/ReservationConfirmation';
import Admin from './components/Admin';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <Header/>
      <Search/>
      <Body/>
      <Footer/>      
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/confirm-reservation" element={<ReservationConfirmation/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </Router>
  );
}

export default App;