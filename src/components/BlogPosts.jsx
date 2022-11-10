import React, { useEffect } from "react"

export default function BlogPosts() {
    
    const url = 'https://mjclifford.herokuapp.com/api/blog'

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
    }, [])
    
    return (
            <div className="col-md-4 mb-4">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md">
                            <div className="card-header">
                                    <h5 className="card-title">Latest Blog Post</h5>
                            </div>
                            <div className="card-body">
                                <div className="item-container">
                                                
                                    <h4 className="card-title">po</h4>
                                    <p>post.createdAt.toLocaleDateString</p>
                                    <p className="card-text">post.markdown.substring...</p>
                                    <a href="/blog" className="btn btn-sm btn-st">Read more</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}