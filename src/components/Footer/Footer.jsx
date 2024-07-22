import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">Meet the Team</a></li>
            <li><a href="#values">Company Values</a></li>
            <li><a href="#gallery">Office Gallery</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#individual-therapy">Terapia Individual</a></li>
            <li><a href="#couples-therapy">Couples Therapy</a></li>
            <li><a href="#workshops">Workshops</a></li>
            <li><a href="#emdr">EMDR</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Info</h3>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#policies">Practice Policies</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Gafanha, Aveiro 3800-678
          </p>
          <p>Telemóvel: <a href="tel:703-596-9557">928098765</a></p>
          <p>Email: <a href="mailto:info@alexandriaarttherapy.com">bibi@gmail.com</a></p>
          <div className="social-icons">
            <a href="https://www.facebook.com"><FaFacebookF /></a>
            <a href="https://www.instagram.com"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
