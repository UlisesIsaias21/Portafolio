import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Para tus Hábitos',
    desc: 'Página para registrar tus hábitos y llevar un control diario, semanal y mensual, con rachas y gráficas.',
    tags: ['React', 'Vite', 'Netlify', 'localStorage'],
    link: 'https://for-habitos-atomic.netlify.app/',
    preview: '🔥 habitos.jsx',
  },
  {
    id: 2,
    title: 'Lista de Pendientes',
    desc: 'App funcional para listar tus pendientes con prioridades, categorías y fecha límite. Instalable como PWA.',
    tags: ['React', 'JavaScript', 'PWA', 'Netlify'],
    link: 'https://pendientes-list.netlify.app/',
    preview: '✅ pendientes.jsx',
    media: '../previews/pendientes.mp4',
  },
  {
    id: 3,
    title: 'Ventas & Cuentas',
    desc: 'Punto de venta para mi negocio en la cancha: cuentas de clientes, inventario, pagos parciales y gráfica mensual. Instalable como PWA.',
    tags: ['React', 'PWA', 'Netlify', 'Inventario'],
    link: 'https://campos-ventas-cuentas.netlify.app/',
    preview: '⚽ ventas.jsx',
  },
];

function ProjectPreview({ label }) {
  return (
    <div className="project-preview">
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent)', opacity: 0.7 }}>
        {label}
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section" id="proyectos">
      <div className="container">
        <div className="section-eyebrow">proyectos</div>
        <div className="section-rule" />
        <h2 className="section-title">Lo que he construido.</h2>
        <p className="section-sub">
          Cada proyecto es un problema real resuelto — haz clic para verlo en acción.
        </p>

        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.id}>
              <ProjectPreview label={p.preview} />
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <a
                className="project-link"
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyecto →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
