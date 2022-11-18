import ReactMarkdown from "react-markdown"

export default function BlogPostsIndividual(props) {
    return (
        <div>
            <div className="card mt-3">
                <div className="card-header">
                    <h4>{props.blog.title}</h4>
                </div>
                <div className="card-body">
                    <p>By: {props.blog.auth}</p>
                    <p>Date: {new Date(props.blog.createdAt).toLocaleDateString()}</p>
                    <ReactMarkdown>{props.blog.markdown}</ReactMarkdown>
                </div>
                <div className="card-footer">
                    <button className="btn btn-sm" onClick={props.click}>Return</button>
                </div>
            </div>
        </div>
    )
}