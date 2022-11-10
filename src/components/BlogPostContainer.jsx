export default function BlogPostContainer(props) {
    return (
        <div className="item-container">
                                                
            <h4 className="card-title">{props.blogPost.title}</h4>
            <p>{props.blogPost.createdAt}</p>
            <p className="card-text">{props.blogPost.markdown.slice(0,100)}...</p>
            <a href="/blog" className="btn btn-sm btn-st">Read more</a>

        </div>
    )
}