import React from 'react';
import './WhoWeAre.css';
import person1 from './../../../../assets/Marvin_Monroe_tapped_out .webp'; // ajuste o caminho conforme necessário
import { Parallax } from 'react-parallax';
import briks from './../../../../assets/briks.jpg';

const WhoWeAre = () => {
  return (
    <Parallax bgImage={briks} strength={700}     bgImageStyle={{ objectFit: 'cover', objectPosition: 'center bottom' }}>
      <div className="who-we-are">
        <h2>QUEM EU SOU</h2>
        <div className="profiles">
          <div className="profile">
            <img src={person1} alt="Adele Stuckey" />
            <h3>Dr. Marvin</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam ratione facere possimus mollitia! Quam molestias recusandae itaque cupiditate libero nobis soluta sapiente fugit, ab iure? Minima deserunt alias veniam.</p> {/* texto completo */}
            <a href="#">SABER MAIS</a>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default WhoWeAre;
