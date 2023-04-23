export default function ProjectContainer(props) {
    return (
        <div className="item-container col-md-6">
            <h5 className="card-title">{props.language ? props.project.titleEsp : props.project.titleEng}</h5>
            <p className="card-text">{props.language ? props.project.contentEsp : props.project.contentEng}</p>
            <div className="card-btn-cont">
                <a href={props.project.site} target="_blank" rel="noopener noreferrer"><button className="btn btn-sm"><i className="fa-solid fa-laptop-code"></i> {props.language ? "Página" : "Site"}</button></a>
                <a href={props.project.gitHub} target="_blank" rel="noopener noreferrer"><button className="btn btn-sm"><i className="fa-brands fa-github"></i> Github</button></a>
            </div>
        </div>
    )
}