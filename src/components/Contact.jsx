import React from 'react';

export default function Contact() {
  return (
    <section className="section section-alt" id="contacto">
      <div className="container">
        <div className="section-eyebrow">contacto</div>
        <div className="section-rule" />
        <h2 className="section-title">¿Hablamos?</h2>
        <p className="section-sub">
          Abierto a proyectos freelance, colaboraciones y oportunidades remotas.
        </p>

        <div className="contact-card">
          <p>
            Si tienes un proyecto en mente, quieres colaborar o simplemente
            quieres conectar — mándame un mensaje. Respondo en menos de 24 horas.
          </p>

          <div className="contact-links">
            <a
              className="btn-outline"
              href="7296974784"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telefono
            </a>
            <a
              className="btn-primary"
              href="uli05112001@gmail.com"
            >
              ✉ Enviar mensaje
            </a>
            <a
              className="btn-outline"
              href="https://github.com/UlisesIsaias21"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn-outline"
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
