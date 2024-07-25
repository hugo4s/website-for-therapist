import React from 'react';
import './ContactUs.css';
import { Parallax } from 'react-parallax';
import escritorio from './../../../../assets/escritorio.jpg';

const ContactUs = () => {
    return (
        <Parallax bgImage={escritorio} strength={300} bgImageStyle={{ objectPosition: 'center 0%' }}>
            <div className="contact-us-container">
                <div className="contact-us-content">
                    <div className="contact-us-overlay">
                        <h1>Contacta me</h1>
                    </div>
                </div>
            </div>
        </Parallax>
    );
}

export default ContactUs;
