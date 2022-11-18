export default function BlogPostsAll(props) {
    
    function handleClick() {
        return props.click(props.blog)
    }
    
    return (
        <div className="col-md-6 mt-3">
                            <div className="card">
                                <div className="card-header">
                                    <h4>{props.blog.title}</h4>
                                </div>
                                <div className="card-body">
                                    <p>By: {props.blog.auth}</p>
                                    <p>Date: {new Date(props.blog.createdAt).toLocaleDateString()}</p>
                                    <p>{props.blog.markdown.slice(0,200)}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-sm" onClick={handleClick}>Read More</button>
                                </div>
                            </div>
                        </div>
    )
}