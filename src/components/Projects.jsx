import ProjectContainer from "./ProjectContainer"

import projects from "../projects"

export default function Projects(props) {
    return (
        <div className="mt-4">
        <div className="card">  
            <div className="card-header">
                <h4>{props.language ? 'Proyectos' : 'Projects'}</h4>
            </div>
            <div className="blog-body">
 
                <div className="card-body row">
                {props.language ? 
                projects.spanish.reverse().map(project => {
                    return <ProjectContainer key={project._id} project={project} />
                }) 
                : 
                projects.english.reverse().map(project => {
                    return <ProjectContainer key={project._id} project={project} />
                })}
            </div>

            </div>
        </div>
    </div>
    )
}