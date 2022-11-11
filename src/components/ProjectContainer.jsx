export default function ProjectContainer(props) {
    return (
        <div className="item-container col-md-6">
            <h5 className="card-title">{props.project.title}</h5>
            <p className="card-text">{props.project.content}</p>
            <div className="card-btn-cont">
                <a href={props.project.site} target="_blank" rel="noopener noreferrer"><button className="btn btn-sm btn-st"><i className="fa-solid fa-laptop-code"></i> Site</button></a>
                <a href={props.project.gitHub} target="_blank" rel="noopener noreferrer"><button className="btn btn-sm btn-st"><i className="fa-brands fa-github"></i> Github</button></a>
            </div>
        </div>
    )
}