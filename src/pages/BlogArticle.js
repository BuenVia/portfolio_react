import axios from "axios";
import { useEffect, useState } from "react";


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
            <h1 className="title">Blog</h1>
            <div className="row">
                <h2>{blog.title}</h2>
                <p>{blog.markdown}</p>
            </div>
        </div>
    );
  };
  
