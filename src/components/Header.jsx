export default function Header() {
    return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container container-fluid">
                <a className="navbar-brand" href="/">MATT CLIFFORD</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/BuenVia" target="_blank">GitHub</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/mattclifford123/" target="_blank">LinkedIn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/documents/matt_clifford_CV.pdf" target="_blank">CV</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

)}