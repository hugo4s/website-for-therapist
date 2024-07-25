import React from 'react';
import './FAQ.css';
import { Parallax } from 'react-parallax';
import gray from './../../assets/gray.jpg';
import { Link } from 'react-router-dom';    

const FAQ = () => {
    return (
        <Parallax bgImage={gray} strength={300}>
            <div className="section">
                <Link className="faq-title" to="/faq">PERGUNTAS FREQUENTES</Link>
            </div>
        </Parallax>

    );
};

export default FAQ;
