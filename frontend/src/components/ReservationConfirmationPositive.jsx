import React from 'react';
import PositiveBody from './PositiveBody';
import Footer from './Footer';
import NewHeader from './NewHeader';
import './css/PositiveBody.css';
import './css/Footer.css';
import './css/NewHeader.css';

function ReservationConfirmationPositive () {
  return (
    <div>
      <NewHeader />
      <PositiveBody />
      <Footer />
    </div>
  );
}

export default ReservationConfirmationPositive;