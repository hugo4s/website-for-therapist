import React from 'react';
import './QuoteComponent.css';
import { Parallax } from 'react-parallax';
import fundo from './../../../../assets/mistakes.jpg';

const QuoteComponent = () => {
  return (
    <Parallax bgImage={fundo} strength={300} bgImageStyle={{ objectPosition: 'center 100%' }}>
        <div className="quote-component">
            <div className="quote-box">
                <p>
                    “A hipnoterapia pode ajudar a curar as feridas do passado e abrir caminho para um futuro brilhante.”
                    <span>- Dr. Milton H. Erickson</span>
                </p>
            </div>
        </div>
    </Parallax>
  );
};

export default QuoteComponent;
