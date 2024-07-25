import React from 'react';
import './ImageGrid.css';
import img1 from './../../../assets/img1.jpg';
import img2 from './../../../assets/img2.jpg';
import img3 from './../../../assets/img3.jpg';
import img4 from './../../../assets/img4.jpg';
import img5 from './../../../assets/img5.jpg';
import img6 from './../../../assets/img6.jpg';
import img7 from './../../../assets/img7.jpg';
import img8 from './../../../assets/img8.jpg';
import img9 from './../../../assets/img9.jpg';
import img10 from './../../../assets/img10.jpg';
import img11 from './../../../assets/img11.jpg'; // New images
import img12 from './../../../assets/img12.jpg';
import img13 from './../../../assets/img13.jpg';
import img14 from './../../../assets/img14.jpg';
import img15 from './../../../assets/img15.jpg';
import { Parallax } from 'react-parallax';

const ImageGrid = () => {
  return (
    <div className="image-grid">
      <Parallax className="parallax" bgImage={img9} strength={700} bgImageStyle={{ objectPosition: 'center bottom' }}>
      </Parallax>
      <div className="image-item img2">
        <img src={img2} alt="Description 2" />
      </div>
      <div className="image-item img3">
        <img src={img3} alt="Description 3" />
      </div>
      <div className="image-item img4">
        <img src={img4} alt="Description 4" />
      </div>
      <div className="image-item img5">
        <img src={img5} alt="Description 5" />
      </div>
      <div className="image-item img6">
        <img src={img6} alt="Description 6" />
      </div>
      <div className="image-item img7">
        <img src={img7} alt="Description 7" />
      </div>
      <div className="image-item img8">
        <img src={img8} alt="Description 8" />
      </div>
      <div className="image-item img9">
        <img src={img9} alt="Description 9" />
      </div>
      <div className="image-item img10">
        <img src={img10} alt="Description 10" />
      </div>
      <div className="image-item img11">
        <img src={img11} alt="Description 11" />
      </div>
      <div className="image-item img12">
        <img src={img12} alt="Description 12" />
      </div>
      <div className="image-item img13">
        <img src={img13} alt="Description 13" />
      </div>
      <div className="image-item img14">
        <img src={img14} alt="Description 14" />
      </div>
      <div className="image-item img15">
        <img src={img15} alt="Description 15" />
      </div>
      <Parallax className="parallax" bgImage={img9} strength={700} bgImageStyle={{ objectPosition: 'center bottom' }}>
      </Parallax>
    </div>
  );
};

export default ImageGrid;
