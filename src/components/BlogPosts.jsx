import React, { useEffect, useState } from "react"
import axios from "axios"
import LoadingSpinner from "./LoadingSpinner"

export default function BlogPosts(props) {

    const [loading, setLoading] = useState(false)
    const [blogPosts, setBlogPosts] = useState([])
    
    const url = 'https://mjclifford.onrender.com/api/blog/latest'

    const loadBlog = async () => {
        try {
            await axios
            .get(url)
            .then(res => setBlogPosts(res.data))
            setLoading(true)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
       loadBlog()
    }, [])

    return (
            <div className="col-md-4 mt-4">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md">
                            <div className="card-header">
                                <h5 className="card-title">{props.language ? 'La última entrada' : 'Latest Blog Post'}</h5>
                            </div>
                            <div className="card-body blog-body">
                                {loading ? 
                                <div style={{padding: '.5rem'}}>
                                    <h4 className="card-title">{blogPosts.title}</h4>
                                    <p>{new Date(blogPosts.createdAt).toLocaleDateString()}</p>
                                    <p>By {blogPosts.auth}</p>
                                    <p className="card-text">{blogPosts.markdown.slice(0,200)}...</p>
                                    <a href="/blog" className="btn btn-sm btn-st">{props.language ? "Leer Más" : "Read More"}</a>
                                </div> 
                                : 
                                <LoadingSpinner />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}