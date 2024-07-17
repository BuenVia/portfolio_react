import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


export default function Blog(props) {
    
    const [blog, setBlog] = useState([])
    
    
    // const url = `https://mjclifford.onrender.com/api${pathname}`
    
    
    
    useEffect(() => {
        const pathname = window.location.pathname;
        const url = `https://mjclifford.onrender.com/api${pathname}`
        // const url = `http://localhost:9000/api${pathname}`
        const getBlog = async () => {
            try {
                await axios
                .get(url)
                .then(res => {
                    setBlog(res.data)
                })
            } catch (err) {
                console.error(err)
            }
        }
        getBlog()
    }, [])

    console.log(blog);

    return (
        <div className="container">
            <div className="row">
                <div className="card mt-4">
                    <div className="card-header">
                        <h2>{blog.title}</h2>
                    </div>
                    <div className="card-body">
                        <p>by {blog.auth}</p>
                        <p>{blog.createdAt}</p>
                        <ReactMarkdown children={blog.markdown} remarkPlugins={[remarkGfm]} />
                    </div>

                </div>
            </div>
        </div>
    );
  };
  
