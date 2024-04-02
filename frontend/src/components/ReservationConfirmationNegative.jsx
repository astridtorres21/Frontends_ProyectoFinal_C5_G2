import React from 'react';
import NegativeBody from './NegativeBody';
import Footer from './Footer';
import NewHeader from './NewHeader';
import './css/NegativeBody.css';
import './css/Footer.css';
import './css/NewHeader.css';

function ReservationConfirmationNegative () {
  return (
    <div>
      <NewHeader />
      <NegativeBody />
      <Footer />
    </div>
  );
}

export default ReservationConfirmationNegative;