import projects from "../projects"
import cpds from "../cpd";
import Header from "../components/Header";

export default function Home() {

    const techStack = ["React", "Django", "Node.js", "PostgreSQL", "MongoDB", "SQL", "REST APIs", "AI Engineering", "LangChain/ LangGraph", "Linux", "Jira", "Git", "Docker", "HTML5", "CSS3"]

    return (
    <div>
      <Header lang={"En"} home={"/"} link={"/es"} cpd={"CPD"} flag={"./assets/images/uk.png"}  cv={"./assets/cv/matt_clifford_CV.pdf"}/>
      {/* ===== HERO SECTION ===== */}
      <section className="py-5 bg-gradient" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-4 text-center">
              <div className="position-relative d-inline-block">
                <h1 className="name__header display-3 fw-bold mb-3">Matthew Clifford</h1>
                <div className="name__title"></div>
              </div>
            </div>

            {/* INTRO */}
            <div className="col-lg-8 text-white">
              <div className="mb-3">
              </div>
              {/* <h1 className="display-3 fw-bold mb-3" style={{color: "#333"}}>Matthew Clifford</h1> */}
              <p className="fs-4 mb-4 opacity-90"  style={{color: "#777"}}>
                Hi, I'm Matt 👋 — a passionate Software Developer specializing in Python development
              </p>
              <p className="fs-5 mb-4 opacity-90" style={{color: "#777"}}>
                Crafting clean, efficient, and scalable solutions with 2 years of hands-on experience.
                From robust APIs to dynamic web applications, I turn ideas into reality.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="#projects" className="btn btn-light btn-lg px-4 fw-semibold shadow">
                  View My Work
                </a>
                <a href="mailto:matt@mjclifford.com" className="btn btn-light btn-lg px-4 fw-semibold shadow">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="py-2 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6 mb-3">Tech Stack</h2>
            <p className="text-muted fs-5">Technologies I work with daily</p>
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
                  <p className="card-text text-muted mb-0">Primary language for backend development, automation, and data processing</p>
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
                  <p className="card-text text-muted mb-0">Building interactive UIs and full-stack applications with modern frameworks</p>
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
                  <p className="card-text text-muted mb-0">Server-side scripting and web application development</p>
                </div>
              </div>
            </div>
          </div>

          {/* Framework Badges */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {techStack.map((item, index) => {
                  return <span key={index} className="tech__pill badge fs-6 px-4 py-2 rounded-pill">{item}</span>
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="py-5 bg-dark">
        <div className="container py-4 text-white">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6 mb-3">Projects</h2>
            <p className="text-muted fs-5">Click on <span className="fw-bold">Site</span> to view project or <span className="fw-bold">GitHub</span> to view the git repo.</p>
          </div>
          <div className="row g-4">
            {projects.map(project => {
                return (
                <div className="col-lg-3" key={project.id}>
                  <div className="p-4 h-100 d-flex flex-column">
                      <h5 className="fw-bold mb-3">{project.titleEng}</h5>
                      <p className="text-muted flex-grow-1">{project.contentEng}</p>
                      <div>
                          <a target="_blank" rel="noreferrer" href={project.site} className="btn btn-light btn-lg px-4 fw-semibold shadow m-1">
                              Site
                          </a>
                          <a target="_blank" rel="noreferrer" href={project.gitHub} className="btn btn-light btn-lg px-4 fw-semibold shadow m-1">
                              GitHub
                          </a>
                      </div>
                  </div>
              </div>
                )
            })}
          </div>
        </div>
      </section>

      {/* ==== CPD ==== */}
      <section id="cpd" className="py-5 bg-white">
                <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6 mb-3">Continued Professional Development</h2>
            <p className="text-muted fs-5">Click on <span className="fw-bold">Site</span> to view project or <span className="fw-bold">GitHub</span> to view the git repo.</p>
          </div>
          <div className="row g-4">
            {cpds.map((cpd, index) => {
                return (
                <div className="col-lg-4" key={index}>
                  <div className="p-4 h-100 d-flex flex-column">
                      <h5 className="fw-bold mb-3">{cpd.title}</h5>
                      <p className="flex-grow-1 text-muted">{cpd.date_completed}</p>
                      <p className="flex-grow-1">{cpd.summary}</p>
                      <div>
                          <a target="_blank" rel="noreferrer" href={cpd.certificate_link} className="btn btn-light btn-lg px-4 fw-semibold shadow m-1">
                              Certificate
                          </a>
                          <a target="_blank" rel="noreferrer" href={cpd.course_link} className="btn btn-light btn-lg px-4 fw-semibold shadow m-1">
                              Course
                          </a>
                      </div>
                  </div>
              </div>
                )
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta py-5 bg-dark text-white">
        <div className="container py-5 text-center">
          <h2 className="display-5 fw-bold mb-4">Let's Build Something Amazing</h2>
          <p className="fs-5 mb-4 text-white-50">
            Whether you have a project in mind or just want to connect, I'd love to hear from you.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a href="mailto:matt@mjclifford.com" className="btn btn-primary btn-lg px-5 fw-semibold">
              📧 Email Me
            </a>
          </div>
        </div>
      </section>
    </div>
      )
}