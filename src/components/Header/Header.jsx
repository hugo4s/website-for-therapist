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
            <li className="nav-item"><Link to="/about">Sobre</Link></li>
            <li className="nav-item"><Link to="/consulta">Nosso espaço</Link></li>
            <li className="nav-item"><Link to="/contact">Contacto</Link></li>
            <li className="nav-item"><Link to="/espaço">Consultas</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
