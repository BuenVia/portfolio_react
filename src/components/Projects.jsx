import ProjectContainer from "./ProjectContainer"
import React, { useEffect, useState } from "react"
import axios from "axios"

export default function Projects() {

    const [loading, setLoading] = useState(false)
    const [projectsArr, setProjectsArr] = useState([])

    const url = 'https://mjclifford.onrender.com/api/projects'

    const loadProjects = async () => {
        try {
            await axios.get(url)
            .then(res => setProjectsArr(res.data))            
            setLoading(true)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        loadProjects()
    }, [])

    return (
        <div className="mt-4">
        <div className="card">  
            <div className="card-header">
                <h4>Projects</h4>
            </div>
            <div className="blog-body">
            {loading ? 
                <div className="card-body row">
                {projectsArr.reverse().map(project => {
                    return <ProjectContainer key={project._id} project={project} />
                })}
            </div>
            : 
            <div style={{marginTop: '1rem'}}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            </div>
        </div>
    </div>
    )
}