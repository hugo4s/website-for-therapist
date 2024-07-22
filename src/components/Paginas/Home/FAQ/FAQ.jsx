import React from 'react';
import './FAQ.css';
import { Parallax } from 'react-parallax';
import gray from './../../../../assets/gray.png';

const FAQ = () => {
    return (
        <Parallax bgImage={gray} strength={300}>
            <div className="section">
                <a className="faq-title">Perguntas Ferquentes</a>
            </div>
        </Parallax>

    );
};

export default FAQ;
