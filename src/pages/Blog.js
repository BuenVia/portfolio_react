import axios from "axios";
import { useEffect, useState } from "react";
import BlogPostsAll from "../components/BlogPostsAll";
import LoadingSpinner from "../components/LoadingSpinner";


export default function Blog() {

    const [loading, setLoading] = useState(false)
    const [blogArr, setBlogArr] = useState([])


    const url = 'https://mjclifford.onrender.com/api/blog'

    const getBlogs = async () => {
        try {
            await axios
            .get(url)
            .then(res => {
                setBlogArr(res.data)
            })
            setLoading(true)
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
            {loading ? blogArr.reverse().map(blog => {
                    return (
                        <BlogPostsAll key={blog._id} blog={blog} />
                )}) : <LoadingSpinner />}
            </div>
        </div>
    );
  };
  
