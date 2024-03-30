import React from 'react';
import Body from './Body';
import Footer from './Footer';
import NewHeader from './NewHeader';
import './css/Body.css';
import './css/Footer.css';
import './css/NewHeader.css';

function HomeUser () {
  return (
    <div>
      <NewHeader />
      <Body />
      <Footer />
    </div>
  );
}

export default HomeUser;

