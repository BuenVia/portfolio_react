import axios from "axios";
import { useEffect, useState } from "react";
import BlogPostsAll from "../components/BlogPostsAll";


export default function Blog() {

    const [blogArr, setBlogArr] = useState([])


    const url = 'https://mjclifford.onrender.com/api/blog'

    const getBlogs = async () => {
        try {
            await axios
            .get(url)
            .then(res => {
                setBlogArr(res.data)
            })
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getBlogs()
    }, [])


    return (
        <div className="container">
            <h1 className="title">Blog</h1>
            <div className="row">
            {blogArr.map(blog => {
                    return (
                        <BlogPostsAll key={blog._id} blog={blog} />
                )})}
            </div>
        </div>
    );
  };
  
