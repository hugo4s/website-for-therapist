import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './../../assets/logo.png'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Sílvia Vieira Hipnoterapia Logo" />
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">Inicio</Link></li>
            <li className="nav-item"><Link to="/sobre">Sobre</Link></li>
            <li className="nav-item"><Link to="/espaço">Espaço</Link></li>
            <li className="nav-item"><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
