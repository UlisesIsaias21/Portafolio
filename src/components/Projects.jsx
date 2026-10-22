import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Para tus Habitos',
    desc: 'pagina para registrar tus habitos y llevar un control diario/semanal/mensual',
    tags: ['React', 'Netlify', 'localstorage', ],
    link: 'https://for-habitos.netlify.app/',
    preview: '🚀 pipeline.yml',
  },
  {
    id: 2,
    title: 'Kubernetes Cluster en GCP',
    desc: 'Cluster multi-nodo en Google Kubernetes Engine con autoscaling, Helm charts y monitoreo con Grafana.',
    tags: ['Kubernetes', 'GCP', 'Helm', 'Grafana'],
    link: '#',
    preview: '☸ k8s.config',
  },
  {
    id: 3,
    title: 'Infraestructura como Código',
    desc: 'Módulos Terraform para desplegar ambientes completos (dev/staging/prod) en minutos con un solo comando.',
    tags: ['Terraform', 'Ansible', 'AWS', 'IaC'],
    link: '#',
    preview: '⚡ main.tf',
  },
  {
    id: 4,
    title: 'Pagina lista de pendientes',
    desc: 'pagina funcional para listar tus pendietes y llevar un registro',
    tags: ['React', 'Java Script', 'PWD', 'Deployada'],
    link: 'https://list-pendientes.netlify.app/',
    preview: '⚡uu',
    media: '../previews/pendientes.mp4',
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
