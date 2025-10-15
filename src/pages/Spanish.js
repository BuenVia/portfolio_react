import projects from "../projects"
import Header from "../components/Header";

export default function Spanish() {

    const techStack = ["React", "Django", "Node.js", "PostgreSQL", "MongoDB", "SQL", "REST APIs", "AI Engineering", "Linux", "Jira", "Git", "Docker", "HTML5", "CSS3"]

    return (
    <div>
      <Header lang={"ES"} home={"/es"} link={"/"} flag={"./spain.png"} cv={"./matt_clifford_CV_es.pdf"}/>
      {/* ===== HERO SECTION ===== */}
      <section className="py-5 bg-gradient" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-4 text-center">
              <div className="position-relative d-inline-block">
                <h1 className="display-3 fw-bold mb-3" style={{color: "#333", textAlign: "left"}}>Matthew Clifford</h1>
              </div>
            </div>

            {/* INTRO */}
            <div className="col-lg-8 text-white">
              <div className="mb-3">
              </div>
              {/* <h1 className="display-3 fw-bold mb-3" style={{color: "#333"}}>Matthew Clifford</h1> */}
              <p className="fs-4 mb-4 opacity-90"  style={{color: "#777"}}>
                Hola, soy Matt 👋 — un Desarrollador de Software apasionado especializado en desarrollo Python
              </p>
              <p className="fs-5 mb-4 opacity-90" style={{color: "#777"}}>
                Creando soluciones limpias, eficientes y escalables con 2 años de experiencia práctica.
                Desde APIs robustas hasta aplicaciones web dinámicas, convierto ideas en realidad.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="#projects" className="btn btn-light btn-lg px-4 fw-semibold shadow">
                  Ver Mi Trabajo
                </a>
                <a href="mailto:matt@mjclifford.com" className="btn btn-light btn-lg px-4 fw-semibold shadow">
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6 mb-3">Stack Tecnológico</h2>
            <p className="text-muted fs-5">Tecnologías con las que trabajo diariamente</p>
          </div>
          <div className="row g-4">
            {/* Python - Featured */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 hover-lift">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <span className="fs-1 fw-bold text-primary">🐍</span>
                  </div>
                  <h5 className="card-title fw-bold mb-2">Python</h5>
                  <p className="card-text text-muted mb-0">Lenguaje principal para desarrollo backend, automatización y procesamiento de datos</p>
                </div>
              </div>
            </div>

            {/* JavaScript */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 hover-lift">
                <div className="card-body text-center p-4">
                  <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <span className="fs-1 fw-bold text-warning">JS</span>
                  </div>
                  <h5 className="card-title fw-bold mb-2">JavaScript</h5>
                  <p className="card-text text-muted mb-0">Construcción de interfaces interactivas y aplicaciones full-stack con frameworks modernos</p>
                </div>
              </div>
            </div>

            {/* PHP */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 hover-lift">
                <div className="card-body text-center p-4">
                  <div className="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <span className="fs-1 fw-bold text-info">PHP</span>
                  </div>
                  <h5 className="card-title fw-bold mb-2">PHP</h5>
                  <p className="card-text text-muted mb-0">Scripting del lado del servidor y desarrollo de aplicaciones web</p>
                </div>
              </div>
            </div>
          </div>

          {/* Framework Badges */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {techStack.map(item => {
                  return <span className="badge bg-dark fs-6 px-4 py-2 rounded-pill">{item}</span>
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="py-5 bg-light">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6 mb-3">Proyectos</h2>
            <p className="text-muted fs-5">Haz clic en <span className="fw-bold">Sitio</span> para ver el proyecto o <span className="fw-bold">GitHub</span> para ver el repositorio.</p>
          </div>
          <div className="row g-4">
            {projects.map(project => {
                return (
                <div className="col-lg-4" key={project.id}>
                <div className="p-4 h-100">
                    <h5 className="fw-bold mb-3">{project.titleEsp}</h5>
                    <p className="text-muted">{project.contentEsp}</p>
                    <a target="_blank" rel="noreferrer" href={project.site} className="btn btn-light btn-lg px-4 fw-semibold shadow m-1">
                        Sitio
                    </a>
                    <a target="_blank" rel="noreferrer" href={project.gitHub} className="btn btn-light btn-lg px-4 fw-semibold shadow m-1">
                        GitHub
                    </a>
                </div>
                </div>
                )
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-5 bg-dark text-white">
        <div className="container py-5 text-center">
          <h2 className="display-5 fw-bold mb-4">Construyamos Algo Increíble</h2>
          <p className="fs-5 mb-4 text-white-50">
            Ya sea que tengas un proyecto en mente o simplemente quieras conectar, me encantaría saber de ti.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a href="mailto:matt@mjclifford.com" className="btn btn-primary btn-lg px-5 fw-semibold">
              📧 Envíame un Email
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.15) !important;
        }
        .hover-primary:hover {
          color: #0d6efd !important;
        }
        .nav-link {
          transition: color 0.2s ease;
        }
      `}</style>
    </div>
      )
}