import React from 'react';

const stats = [
  { num: '2+',   label: 'años de experiencia' },
  { num: '21+',  label: 'proyectos deployados' },
  { num: '99.9%',label: 'uptime promedio' },
  { num: '∞',    label: 'ganas de aprender' },
];

export default function About() {
  return (
    <section className="section section-alt" id="sobre-mi">
      <div className="container">
        <div className="section-eyebrow">sobre mí</div>
        <div className="section-rule" />
        <h2 className="section-title">
          Construyo infraestructura<br />que escala de verdad.
        </h2>
        <p className="section-sub">
          No solo código — sistemas confiables, rápidos y automatizados.
        </p>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Soy un DevOps Senior apasionado por la automatización, la nube
              y los pipelines que realmente funcionan en producción. Me
              especializo en reducir tiempos de deploy y maximizar la
              disponibilidad de los sistemas.
            </p>
            <p>
              Con experiencia en equipos ágiles, conecto el puente entre
              desarrollo y operaciones para que los equipos entreguen más
              rápido, con más confianza y sin dolores de cabeza.
            </p>
            <p>
              Actualmente expandiendo mi portafolio con proyectos cloud-native,
              arquitecturas serverless y automatización end-to-end.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
