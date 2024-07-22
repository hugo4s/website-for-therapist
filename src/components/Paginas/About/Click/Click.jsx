import React from 'react';
import './Click.css';
import escritorio from './../../../../assets/escritorio.jpg';
import { Parallax } from 'react-parallax';

const Click = () => {

  return (
    <Parallax bgImage={escritorio} strength={300} bgImageStyle={{ objectPosition: 'center 50%' }}>
      <div className="click-component">
        <div className="content-box">
          <h1>Nosso Espaço</h1>
          <p>Venha conhecer nosso espaço incrível, onde a natureza e a tecnologia se encontram em perfeita harmonia.</p>
          <button>Ver Mais Imagens</button>
        </div>
      </div>
    </Parallax>
  );
};

export default Click;
