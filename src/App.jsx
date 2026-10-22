import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Projects from './components/Projects';
import Contact  from './components/Contact';

export default function App() {
  const [theme, setTheme] = useState('dark');

  // Aplica el tema al <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <span>
            &lt;Ulises Isaías /&gt; · {new Date().getFullYear()} · 
          </span>
        </div>
      </footer>
    </>
  );
}
