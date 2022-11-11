import ProjectContainer from "./ProjectContainer"
import projects from "../projects"
import React, { useState } from "react"

export default function Projects() {

    const [noProjects, setNoProjects] = useState(-1)

    function handleClick() {
        if (noProjects === -1) {
            setNoProjects(null)
        } else {
            setNoProjects(-1)
        }
    }

    return (
        <div className="col-md-4 mt-4">
        <div className="card">  
            <div className="card-header">
                <h4>Projects</h4>
                <button onClick={handleClick} className='btn-card'>More...</button>
            </div>
            <div className="card-body row">
                {projects.slice(noProjects).map(project => {
                    return <ProjectContainer key={project.id} project={project} />
                })}
            </div>
        </div>
    </div>
    )
}