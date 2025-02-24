import language from "../languages"
import React from "react"

export default function Intro(props) {

    return (
        <div className="col-md-12 mt-4">
            <div className="card">
                <div className="card-body row">
                    
                    <div className="col-md-4 p-2">
                        <img src={'profile.jpg'} alt="profile" className="prof-img"></img>
                    </div>
                    
                    <div className="col-md-8 p-5">

                        <h1 className="name_title">MATTHEW CLIFFORD</h1>
                        <h4 className="role_title">{props.language ? "Ingeniero de software" : "Software Engineer"}</h4>                    
                        {props.language ? language.espIntro.map(i => {
                            return (<p key={language.espIntro.indexOf(i)}>{i}</p>)
                        }) : 
                        language.engIntro.map(i => {
                            return (<p key={language.engIntro.indexOf(i)}>{i}</p>)
                        })}
                        <p>📧 Email: <a href="mailto:matthewclifford@hotmail.co.uk" className="email">matthewclifford@hotmail.co.uk</a></p>
                        <p>{props.language ? "¡Echa un vistazo a mi trabajo!" : "Check out my work!"}: <a href="/projects?lang=es">{props.language ? "Aquí":"Here"}</a></p>
                    </div>

                </div>
            </div>
        </div>
    )
}