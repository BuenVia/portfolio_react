export default function Header(props) {
    return (
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
          <div className="container">
            <a className="navbar-brand fw-bold text-uppercase fs-4" href="/">
              <span className="text-primary">MJ</span>Clifford
            </a>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav gap-lg-3">
                <li className="nav-item">
                  <a className="nav-link active fw-semibold" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold" href="https://github.com/BuenVia" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold" href="https://www.linkedin.com/in/mattclifford123/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn btn-outline-primary btn-sm px-3 fw-semibold" href="/matt_clifford_CV.pdf" target="_blank" rel="noopener noreferrer">
                    CV
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold" href={props.link}>{props.lang}</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
)}