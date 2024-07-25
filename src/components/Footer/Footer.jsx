import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sobre</h3>
          <ul>
            <li><a href="#about">Sobre mim</a></li>
            <li><a href="#values">Minha História</a></li>
            <li><a href="#gallery">O que eu acredito</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Info</h3>
          <ul>
            <li><a href="#individual-therapy">Espaço</a></li>
            <li><a href="#couples-therapy">Certificado</a></li>
            <li><a href="#workshops">Perguntas Frequentes</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Políticas</h3>
          <ul>
            <li><a href="#policies">Aviso Legal</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <a id='contacto' href='#'>Gafanha, Aveiro 3800-678</a>
          <p>Telemóvel: <a id='contacto' href="tel:703-596-9557">928098765</a></p>
          <p>Email: <a id='contacto' href="mailto:info@alexandriaarttherapy.com">bibi@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
