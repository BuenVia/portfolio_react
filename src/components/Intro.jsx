import Cards from "./Cards"

export default function Intro() {

    const intro = ["Hi, I am Matt 👋. A self-taught WebDev with a passion for code 💻. I have been self-teaching myself JavaScript, HTML, CSS, NodeJS and React with a strong desire to move into a career in coding 👨‍💻.",
    "If you want me to build your website or webapp, or you want to collaborate, then get in touch! 🗣️",
    "Matt"]

    return (
        <div className="card">
            <div className="card-header">
                <h4>About</h4>
            </div>
            <div className="card-body">
                <p>Hi, I am Matt 👋. A self-taught WebDev with a passion for code 💻. I have been self-teaching myself JavaScript, HTML, CSS, NodeJS and React with a strong desire to move into a career in coding 👨‍💻.</p>
                <p>If you want me to build your website or webapp, or you want to collaborate, then get in touch! 🗣️</p>
                <p>📧 Email: matthewclifford@hotmail.co.uk</p>
            </div>
        </div>
    )
}