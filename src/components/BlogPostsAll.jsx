export default function BlogPostsAll(props) {

    const url = `https://mjclifford.onrender.com/blog/${props.blog.slug}`
    
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
                                    <a href={url} className="btn btn-sm">Read More...</a>
                                </div>
                            </div>
                        </div>
    )
}