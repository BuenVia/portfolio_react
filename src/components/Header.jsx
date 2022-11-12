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

                            <a className="nav-link" href="https://mjclifford-blog.herokuapp.com" target="_blank" rel="noreferrer">Blog</a>
                            <a className="nav-link" href="https://github.com/BuenVia" target="_blank" rel="noreferrer">GitHub</a>                  
                            <a className="nav-link" href="https://www.linkedin.com/in/mattclifford123/" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a className="nav-link" href="/documents/matt_clifford_CV.pdf" target="_blank" rel="noreferrer">CV</a>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

)}