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
                    “WHAT IF YOU JUST DID IT YOUR OWN WAY? NO RULES, NO RIGHT OR WRONG, JUST WHAT YOU THINK IS BEAUTIFUL?”
                    <span>- SARAH MAGSAMEN</span>
                </p>
            </div>
        </div>
    </Parallax>
  );
};

export default QuoteComponent;
