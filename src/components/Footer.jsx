export default function Footer() {
  const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-dark border-top border-secondary text-center text-muted py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-md-start mb-3 mb-md-0">
              <span className="fw-bold text-white fs-5">MJClifford</span>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="d-flex gap-3 justify-content-center">
                <a href="https://github.com/BuenVia" target="_blank" rel="noopener noreferrer" className="text-muted text-decoration-none hover-primary">
                  GitHub
                </a>
                <span className="text-muted">•</span>
                <a href="https://www.linkedin.com/in/mattclifford123/" target="_blank" rel="noopener noreferrer" className="text-muted text-decoration-none hover-primary">
                  LinkedIn
                </a>
                <span className="text-muted">•</span>
                <a href="mailto:matt@mjclifford.com" className="text-muted text-decoration-none hover-primary">
                  Email
                </a>
              </div>
            </div>
            <div className="col-md-4 text-md-end">
              <small>© {currentYear} Matthew Clifford. All Rights Reserved</small>
            </div>
          </div>
        </div>
      </footer>
    )
}