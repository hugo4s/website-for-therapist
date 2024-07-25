import React from 'react';
import Header from './../components/Header/Header';
import ImageGrid from '../components/Paginas/ImageGrid/ImageGrid';
import Footer from './../components/Footer/Footer'

function Images() {
  return (
    <div className="images">
      <Header />
      <ImageGrid/>
      <Footer/>
    </div>
  );
}

export default Images;
