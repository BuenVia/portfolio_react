import language from "../languages"
import React from "react"

export default function Intro(props) {



    return (
        <div className="col-md-8 mt-4">
            <div className="card">
                <div className="card-header">
                    <h4>{props.language ? 'Acerca de mí' : 'About'}</h4>
                </div>
                <div className="card-body row">
                    <div className="col-md-6 p-2">
                        <img src={'profile.jpg'} alt="profile" className="prof-img"></img>
                    </div>
                    <div className="col-md-6 p-2">
                        {props.language ? language.espIntro.map(i => {
                            return (<p key={language.espIntro.indexOf(i)}>{i}</p>)
                        }) : 
                        language.engIntro.map(i => {
                            return (<p key={language.engIntro.indexOf(i)}>{i}</p>)
                        })}
                        <p>📧 Email: <a href="mailto:matthewclifford@hotmail.co.uk" className="email">matthewclifford@hotmail.co.uk</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}