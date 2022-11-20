import ProjectContainer from "./ProjectContainer"

import projects from "../projects"

export default function Projects() {
    return (
        <div className="mt-4">
        <div className="card">  
            <div className="card-header">
                <h4>Projects</h4>
            </div>
            <div className="blog-body">
 
                <div className="card-body row">
                {projects.reverse().map(project => {
                    return <ProjectContainer key={project._id} project={project} />
                })}
            </div>

            </div>
        </div>
    </div>
    )
}