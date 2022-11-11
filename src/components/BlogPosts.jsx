import React, { useEffect, useState } from "react"
import BlogPostContainer from "./BlogPostContainer"

export default function BlogPosts() {

    const [blogPosts, setBlogPosts] = useState([])
    
    const url = 'https://mjclifford-blog.herokuapp.com/api/blog'

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => setBlogPosts(json))
    }, [])

    const [noPosts, setNoPosts] = useState(-1)

    function handleClick() {
        return noPosts === -1 ? setNoPosts(null) : setNoPosts(-1)
    }

    return (
            <div className="col-md-4 mt-4">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md">
                            <div className="card-header">
                                <h5 className="card-title">Latest Blog Post</h5>
                                <button className="btn-card" onClick={handleClick}>More...</button>
                            </div>
                            <div className="card-body">

                                {blogPosts.slice(noPosts).reverse().map(post => {
                                    return <BlogPostContainer key={post._id} blogPost={post} />
                                })}
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}