    import React from 'react';
    import './PerguntasFrequentes.css';
    import { Parallax } from 'react-parallax';
    import escritorio from './../../../../assets/escritorio.jpg';


    const PerguntasFrequentes = () => {
        return (
            <Parallax bgImage={escritorio} strength={300} bgImageStyle={{ objectPosition: 'center 0%' }}>
                <div className="contact-us-container">
                    <div className="contact-us-content">
                        <div className="contact-us-overlay">
                            <h1>Perguntas frequentes</h1>
                        </div>
                    </div>
                </div>
            </Parallax>
        );
    }

    export default PerguntasFrequentes;