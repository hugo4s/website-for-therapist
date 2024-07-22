import React from 'react';
import './HeaderSection.css';
import texto from './../../../../assets/silvia.png';
import fundo from './../../../../assets/consultorio.jpg';
import { Parallax } from 'react-parallax';

const HeaderSection = () => {
  return (
    <Parallax bgImage={fundo} strength={300} bgImageStyle={{ objectPosition: 'center 100%' }}>
      <div className="header-section">
        <div className="text-container">
          <img src={texto} alt="Different image" />
        </div>
      </div>
    </Parallax>
  );
};

export default HeaderSection;
