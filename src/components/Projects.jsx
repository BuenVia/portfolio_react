import ProjectContainer from "./ProjectContainer"
import projects from "../projects"
import React, { useState } from "react";

export default function Projects(props) {

  const [lang, setLang] = useState(false)

  function handleClick() {
      setLang(prevVals => !prevVals)
  }


    return (
        <div className="m-4">
            <span className="mx-auto" onClick={handleClick}>{lang ? <div className="lang-btn"><img className="lang-img" src='./spain.png' alt="Spain"></img><span>ES</span></div> : <div className="lang-btn"><img className="lang-img" src='./uk.png' alt="UK"></img><span>EN</span></div>}</span>
            <div className="card-header">
                <h4 style={{ textAlign: "center", fontSize: "36px" }}>{lang ? 'Proyectos' : 'Projects'}</h4>
            </div>
            <div className="blog-body">
 
                <div className="card-body">
                {projects.map(project => {return <ProjectContainer key={project.id} project={project} language={lang} />})}
            </div>

            </div>
    </div>
    )
}