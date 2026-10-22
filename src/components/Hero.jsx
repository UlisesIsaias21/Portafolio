import React from 'react';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-grid">

          {/* ── Left col ── */}
          <div>
            <div className="hero-tag">
              <span className="tag-dot" />
              disponible para proyectos
            </div>

            <p className="hero-intro">Hola, soy</p>

            <h1 className="hero-name">
              Ulises Isaías<br />
              <span className="blue">DevOps S</span>
            </h1>

            <p className="hero-role">
              <br /> {/* Infraestructura cloud · CI/CD · Kubernetes*/}
              Convirtiendo código en sistemas que no se caen.
            </p>

            <div className="hero-btns">
              <button
                className="btn-primary"
                onClick={() => scrollTo('proyectos')}
              >
                Ver proyectos
              </button>
              <button
                className="btn-outline"
                onClick={() => scrollTo('contacto')}
              >
                Contacto
              </button>
            </div>
          </div>

          {/* ── Right col ── */}
          <div className="hero-right">
            <div className="avatar-row">
              <div className="avatar-circle">UI</div>
              <div>
                <div className="avatar-name">Ulises Isaías</div>
                <div className="avatar-role">DevOps · Cloud · Backend</div>
                <div className="status-badge">
                  <span className="pulse" />
                  Disponible · Remote
                </div>
              </div>
            </div>

            <div className="terminal">
              <div className="term-header">
                <div className="term-dot" style={{ background: '#ff5f57' }} />
                <div className="term-dot" style={{ background: '#febc2e' }} />
                <div className="term-dot" style={{ background: '#28c840' }} />
                <span className="term-title">stack.config</span>
              </div>
              <div className="term-body">
                <div><span className="cm"># infraestructura actual</span></div>
                <div><span className="kw">cloud</span>     : <span className="val">AWS · GCP · Azure</span></div>
                <div><span className="kw">cicd</span>      : <span className="val">GitHub Actions · Jenkins</span></div>
                <div><span className="kw">containers</span>: Docker · Kubernetes</div>
                <div><span className="kw">iac</span>       : <span className="val">Terraform · Ansible</span></div>
                <div><span className="kw">monitor</span>   : Grafana · Prometheus</div>
                <div><span className="cm"># always shipping ✓</span></div>
                <div>
                  <span className="prompt">$</span>{' '}
                  <span style={{ color: 'var(--text)' }}>ready_to_deploy</span>
                  <span className="cursor" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
