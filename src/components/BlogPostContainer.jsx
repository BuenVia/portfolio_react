export default function BlogPostContainer(props) {
    return (
        <div className="item-container">
                                                
            <h4 className="card-title">{props.blogPost.title}</h4>
            <p>{new Date(props.blogPost.createdAt).toLocaleDateString()}</p>
            <p className="card-text">{props.blogPost.markdown.slice(0,200)}...</p>
            <a href="https://mjclifford-blog.herokuapp.com/" className="btn btn-sm btn-st" target="_blank" rel="noreferrer">Read more</a>

        </div>
    )
}