export default function Intro() {
    return (
        <div className="col-md-8 mt-4">
            <div className="card">
                <div className="card-header">
                    <h4>About</h4>
                </div>
                <div className="card-body row">
                    <div className="col-md-6 p-2">
                        <img src={'profile.jpg'} alt="profile" className="prof-img"></img>
                    </div>
                    <div className="col-md-6 p-2">
                        <p>Hi, I am Matt 👋. A self-taught WebDev with a passion for code 💻. I have been self-teaching myself JavaScript, HTML, CSS, NodeJS and React with a strong desire to move into a career in coding 👨‍💻.</p>
                        <p>If you want me to build your website or webapp, or you want to collaborate, then get in touch! 🗣️</p>
                        <p>📧 Email: matthewclifford@hotmail.co.uk</p>
                    </div>
                </div>
            </div>
        </div>
    )
}