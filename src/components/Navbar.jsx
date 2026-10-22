import React from 'react';

export default function Navbar({ theme, toggleTheme }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a className="logo" href="#inicio">
          &lt;<span>Ulises</span> /&gt;
        </a>

        <ul className="nav-links">
          <li><a onClick={() => scrollTo('inicio')}>Inicio</a></li>
          <li><a onClick={() => scrollTo('sobre-mi')}>Sobre mí</a></li>
          <li><a onClick={() => scrollTo('proyectos')}>Proyectos</a></li>
          <li><a onClick={() => scrollTo('contacto')}>Contacto</a></li>
        </ul>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Cambiar tema"
        >
          <div className="toggle-thumb">
            {theme === 'dark' ? '🌙' : '💡'}
          </div>
        </button>
      </div>
    </nav>
  );
}
