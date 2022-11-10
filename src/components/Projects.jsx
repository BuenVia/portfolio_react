import ProjectContainer from "./ProjectContainer"
import projects from "../projects"

export default function Projects() {
    return (
        <div className="col-md-8">
        <div className="card">  
            <div className="card-header">
                <h4>Projects</h4>
            </div>
            <div className="card-body">
                {projects.map(project => {
                    return <ProjectContainer key={project.id} project={project} />
                })}
            </div>
        </div>
    </div>
    )
}