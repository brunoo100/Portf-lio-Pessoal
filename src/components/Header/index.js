import React, { useState } from 'react';
import minnhaImagem from '../../img/Logo.png';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Controla a visibilidade do menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna o estado do menu
  };

  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={minnhaImagem} alt="Logo" />
        </div>

        {/* Botão de menu para dispositivos móveis */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰ {/* Ícone de menu */}
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
            <li>
              <Link to="/sobremim">Sobre Mim</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}
